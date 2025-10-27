import React, { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Laptop, Users, IndianRupee, Timer } from "lucide-react";
import RegistrationForm from "./RegistrationForm";

const WorkshopDetails = ({ workshop }) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-gradient-to-br from-blue-50 to-white p-5 sm:p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 mt-10 mx-3 sm:mx-auto max-w-3xl"
    >
      {/* Header */}
      <div className="text-center mb-5">
        <h2 className="text-xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
          {workshop.name}
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm font-medium">
          Upgrade your skills with our live sessions 🚀
        </p>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-gray-700 mb-6">
        <DetailItem icon={<CalendarDays className="text-blue-600" />} label="Start Date" value={workshop.startDate} />
        <DetailItem icon={<Timer className="text-blue-600" />} label="Duration" value={workshop.duration} />
        <DetailItem icon={<Clock className="text-blue-600" />} label="Session Time" value="7:00 PM - 8:30 PM (IST)" />
        <DetailItem icon={<Laptop className="text-blue-600" />} label="Platform" value="Live Online Sessions" />
        <DetailItem icon={<Users className="text-blue-600" />} label="Seats Left" value={`${workshop.seatsAvailable}`} />
        <DetailItem
          icon={<IndianRupee className="text-green-600" />}
          label="Price"
          value={
            <span className="font-bold text-green-600">
              ₹{workshop.price}{" "}
              <span className="text-gray-600 text-sm">({workshop.priceType})</span>
            </span>
          }
        />
      </div>

      {/* ✅ Centered Book Seat Button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setOpenDialog(true)}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 active:scale-95"
        >
          Book Seat
        </button>
      </div>

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 rounded-b-2xl" />

      {/* ✅ Dialog Box */}
      {openDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-6 w-full max-w-md relative">
            {/* Close Button */}
            <button
              onClick={() => setOpenDialog(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>

            {/* Dialog Title */}
            <h3 className="text-lg sm:text-xl font-bold text-center text-blue-700 mb-4">
              Register for {workshop.name}
            </h3>

            {/* Registration Form */}
            <RegistrationForm workshop={workshop} />
          </div>
        </div>
      )}
    </motion.section>
  );
};

const DetailItem = ({ icon, label, value }) => (
  <div className="flex items-start sm:items-center gap-3 p-3 bg-white/80 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200">
    <div className="p-2 bg-blue-50 rounded-lg flex-shrink-0">{icon}</div>
    <div>
      <p className="text-xs sm:text-sm text-gray-500">{label}</p>
      <p className="text-sm sm:text-base font-semibold break-words">{value}</p>
    </div>
  </div>
);

export default WorkshopDetails;
