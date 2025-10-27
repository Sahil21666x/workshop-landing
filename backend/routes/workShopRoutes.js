import express from "express";
const app = express.Router();
import { Workshop, Registration, Waitlist } from "../model/workShopSchema.js";

//  Helper function for dynamic pricing
const getCurrentPrice = (seatsAvailable, workshop) => {
  if (seatsAvailable > 10) {
    return { price: workshop.earlyBirdPrice, priceType: "Early Bird" };
  } else if (seatsAvailable > 0) {
    return { price: workshop.standardPrice, priceType: "Standard" };
  } else {
    return { price: workshop.standardPrice, priceType: "Sold Out" };
  }
};

//  Initialize default workshop if not exists
const initializeWorkshop = async () => {
  const existing = await Workshop.findOne();
  if (!existing) {
    await Workshop.create({
      name: "Digiskill Academy",
      startDate: "Saturday, November 15th, 2025",
      duration: "4 Weeks (Sat & Sun)",
      time: "7:00 PM - 8:30 PM (IST)",
      platform: "Live Online Sessions",
      requirements: "A Computer with Internet connection, No prior experience needed",
      totalSeats: 20,
      seatsAvailable: 20,
      earlyBirdPrice: 499,
      standardPrice: 799,
    });
    console.log("✅ Workshop initialized");
  }
};
initializeWorkshop();


//  GET workshop details
app.get("/api/workshop", async (req, res) => {
  try {
    const workshop = await Workshop.findOne();
    if (!workshop) return res.status(404).json({ message: "Workshop not found" });

    // Dynamically calculate seats available
    const totalRegistrations = await Registration.countDocuments();
    const seatsAvailable = workshop.totalSeats - totalRegistrations;

    const { price, priceType } = getCurrentPrice(seatsAvailable, workshop);

    res.json({
      name: workshop.name,
      startDate: workshop.startDate,
      duration: workshop.duration,
      time: workshop.time,
      platform: workshop.platform,
      requirements: workshop.requirements,
      seatsAvailable,
      price,
      priceType,
    });
  } catch (error) {
    console.error("Error fetching workshop:", error);
    res.status(500).json({ message: "Server error" });
  }
});


//  POST registration
app.post("/api/register", async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email)
      return res.status(400).json({ message: "Name and email are required." });

    const workshop = await Workshop.findOne();
    if (!workshop)
      return res.status(404).json({ message: "Workshop not found" });

    const totalRegistrations = await Registration.countDocuments();
    const seatsAvailable = workshop.totalSeats - totalRegistrations;

    // If seats available → register user
    if (seatsAvailable > 0) {
      const registrationId = "REG" + Math.floor(Math.random() * 100000);
      await Registration.create({ name, email, registrationId });

      console.log(`✅ ${name} registered successfully with ID ${registrationId}`);

      return res.json({
        status: "success",
        registrationId,
        message: "Successfully registered for the workshop!",
      });
    }

    // Else → add to waitlist
    const waitlistId = "WL" + Math.floor(Math.random() * 100000);
    await Waitlist.create({ name, email, waitlistId });
    console.log(`🕓 ${name} added to waitlist.`);

    return res.json({
      status: "waitlisted",
      message: "Workshop is full. You’ve been added to the waitlist.",
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Server error" });
  }
});


// 🗑️ DELETE registration (automatically increases seats)
app.delete("/api/registration/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Registration.findByIdAndDelete(id);
    if (!deleted)
      return res.status(404).json({ message: "Registration not found" });

    console.log(`🗑️ Registration ${id} deleted.`);

    res.json({ message: "Registration deleted successfully." });
  } catch (error) {
    console.error("Error deleting registration:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default app;
