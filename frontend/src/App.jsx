import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import WorkshopDetails from "./components/WorkshopDetails";
import RegistrationForm from "./components/RegistrationForm";
import FlexHero from "./components/FlexCRMLanding";
import FlexCRMLanding from "./components/FlexCRMLanding";
import DigiskillAcademy from "./components/DigiskillAcademy";

function App() {
  // const [workshop, setWorkshop] = useState(null);
  // const [loading, setLoading] = useState(true);

  // // Fetch workshop details from backend
  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_API_URL}/api/workshop` ||"http://localhost:5000/api/workshop") 
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setWorkshop(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => console.error("Error:", err));
  // }, [workshop]);

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center h-screen text-lg font-semibold text-gray-600">
  //       Loading workshop details...
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* <Header />
      <main className="max-w-4xl mx-auto p-6">
        <WorkshopDetails workshop={workshop} />
      </main> */}
      {/* <FlexCRMLanding/> */}
      <DigiskillAcademy/>
    </div>
  );
}

export default App;