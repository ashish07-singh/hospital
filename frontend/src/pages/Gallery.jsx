import React, { useState } from "react";

const Gallery = () => {
  const [category, setCategory] = useState("all");


  const galleryItems = [
    {
      id: 1,
      category: "facilities",
      image: "/images/reception.jpg",
      title: "Modern Reception Area",
      description: "Our welcoming reception area designed for patient comfort",
    },
    {
      id: 2,
      category: "equipment",
      image: "/images/gallery-surgery.jpg",
      title: "Advanced Surgical Equipment",
      description: "State-of-the-art surgical technology for precise procedures",
    },
    {
      id: 3,
      category: "team",
      image: "/images/medical-team.jpg",
      title: "Expert Medical Team",
      description: "Our dedicated healthcare professionals",
    },
    {
      id: 4,
      category: "facilities",
      image: "/images/gallery-patient-room.jpg",
      title: "Patient Rooms",
      description: "Comfortable and modern patient accommodation",
    },
    {
      id: 5,
      category: "equipment",
      image: "/images/recovery.jpg",
      title: "Diagnostic Equipment",
      description: "Advanced diagnostic imaging and testing equipment",
    },
    {
      id: 6,
      category: "patients",
      image: "/images/gallery-patient-care.jpg",
      title: "Patient Care",
      description: "Compassionate care in a healing environment",
    },
    {
      id: 7,
      category: "facilities",
      image: "/images/gallery-emergency.jpg",
      title: "Emergency Department",
      description: "24/7 emergency care facilities",
    },
    {
      id: 8,
      category: "equipment",
      image: "/images/laboratory.jpg",
      title: "Laboratory Equipment",
      description: "State-of-the-art laboratory testing facilities",
    },
    {
      id: 9,
      category: "team",
      image: "/images/specialist.jpg",
      title: "Specialist Consultation",
      description: "Expert consultations with our specialists",
    },
    {
      id: 10,
      category: "facilities",
      image: "/images/pharmasy.jpg",
      title: "Hospital Pharmacy",
      description: "Modern pharmacy with comprehensive medication services",
    },
    {
      id: 11,
      category: "equipment",
      image: "/images/equipment.jpg",
      title: "Emergency Equipment",
      description: "Advanced emergency care facilities and equipment",
    },
    {
      id: 12,
      category: "patients",
      image: "/images/recovery.jpg",
      title: "Patient Recovery",
      description: "Dedicated recovery areas for patient rehabilitation",
    },
  ];

  const filteredItems =
    category === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === category);

  return (
    <div className="py-14 px-4 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8"> MEDICARE by the Numbers</h2>
 <p className="text-xl text-gray-600 max-w-3xl mb-7 mx-auto">
            Take a virtual tour of our state-of-the-art facilities, advanced medical equipment, 
            and meet our dedicated healthcare team at MEDICARE.
          </p>

      <div className="flex justify-center mb-8 flex-wrap gap-2">
        {["all", "facilities", "equipment", "team", "patients"].map((cat) => (
          <button
            key={cat}
            className={`px-5 py-2 rounded-full border font-medium transition ${
              category === cat
                ? "bg-teal-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-teal-100 hover:text-teal-600"
            }`}
            onClick={() => setCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Gallery;
