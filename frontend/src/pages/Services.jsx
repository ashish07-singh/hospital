import React, { useState } from "react";

const departments = [
  {
    title: "General Surgery",
    shortDescription: "Advanced surgical treatment for abdominal and related conditions.",
    fullDescription: "General Surgery involves surgical treatment of abdominal and related conditions with advanced techniques and experienced surgeons. Our team specializes in both traditional and minimally invasive procedures, ensuring optimal patient outcomes with reduced recovery times.",
    icon: "🏥",
    features: ["Laparoscopic Surgery", "Emergency Surgery", "Minimal Invasive Procedures"],
    additionalInfo: "Our surgical team has over 20 years of combined experience and performs over 500 successful procedures annually."
  },
  {
    title: "Pediatrics",
    shortDescription: "Comprehensive healthcare for children from birth through adolescence.",
    fullDescription: "Pediatrics focuses on children's health, development, and medical care needs from birth through adolescence. We provide a child-friendly environment with specialized care tailored to each developmental stage.",
    icon: "👶",
    features: ["Child Development", "Vaccination", "Growth Monitoring"],
    additionalInfo: "Our pediatric department features colorful, child-friendly facilities and experienced pediatricians who specialize in various childhood conditions."
  },
  {
    title: "Gynaecology & Obstetrics",
    shortDescription: "Complete women's health care including pregnancy and reproductive health.",
    fullDescription: "Comprehensive women's health care including pregnancy, childbirth, and reproductive health issues. We provide personalized care throughout every stage of a woman's life.",
    icon: "👩‍⚕️",
    features: ["Prenatal Care", "Delivery Services", "Women's Health"],
    additionalInfo: "Our department offers state-of-the-art facilities for prenatal care, safe deliveries, and comprehensive women's health services."
  },
  {
    title: "Vascular Surgery",
    shortDescription: "Treatment of blood vessel disorders with modern surgical techniques.",
    fullDescription: "Vascular Surgery treats blood vessel disorders, including arteries and veins with modern surgical techniques. We use advanced imaging and minimally invasive procedures for optimal results.",
    icon: "🫀",
    features: ["Varicose Veins", "Aneurysm Treatment", "Blood Flow Issues"],
    additionalInfo: "Our vascular surgery team uses cutting-edge technology including laser therapy and endovascular procedures."
  },
  {
    title: "Orthopedics",
    shortDescription: "Specialized care for bones, joints, and musculoskeletal system.",
    fullDescription: "Specializes in bones, joints, muscles and musculoskeletal system treatment with advanced orthopedic care. We provide both surgical and non-surgical treatment options.",
    icon: "🦴",
    features: ["Joint Replacement", "Sports Injuries", "Fracture Treatment"],
    additionalInfo: "Our orthopedic department features advanced rehabilitation facilities and experienced physiotherapists for complete recovery."
  },
  {
    title: "Neurology",
    shortDescription: "Diagnosis and treatment of nervous system disorders.",
    fullDescription: "Specializing in diagnosing and treating nervous system disorders with cutting-edge neurological care. We use advanced diagnostic tools and treatment protocols.",
    icon: "🧠",
    features: ["Stroke Treatment", "Epilepsy Management", "Neurological Disorders"],
    additionalInfo: "Our neurology department is equipped with advanced MRI and CT scanning facilities for accurate diagnosis."
  },
  {
    title: "Physiotherapy",
    shortDescription: "Movement and function restoration through physical therapy.",
    fullDescription: "Physiotherapy restores movement and function through exercises and physical techniques for rehabilitation. We create personalized treatment plans for each patient.",
    icon: "💪",
    features: ["Rehabilitation", "Pain Management", "Movement Therapy"],
    additionalInfo: "Our physiotherapy department features modern equipment and experienced therapists for comprehensive rehabilitation."
  },
  {
    title: "Urology",
    shortDescription: "Treatment of urinary tract and male reproductive system disorders.",
    fullDescription: "Specializing in treating urinary tract and male reproductive system disorders with expert care. We provide both medical and surgical treatment options.",
    icon: "🔬",
    features: ["Kidney Stones", "Prostate Care", "Urinary Issues"],
    additionalInfo: "Our urology department uses advanced laser technology for kidney stone treatment and minimally invasive procedures."
  },
  {
    title: "Gastroenterology",
    shortDescription: "Digestive system disorders and gastrointestinal tract health.",
    fullDescription: "Gastroenterology focuses on digestive system disorders and gastrointestinal tract health. We provide comprehensive diagnostic and treatment services.",
    icon: "🏥",
    features: ["Endoscopy", "Digestive Disorders", "Liver Care"],
    additionalInfo: "Our gastroenterology department features advanced endoscopy suites and specialized liver care facilities."
  },
  {
    title: "ENT (Ear, Nose, Throat)",
    shortDescription: "Treatment of sensory and airway disorders.",
    fullDescription: "Specializing in ENT treats related sensory and airway disorders with comprehensive care. We provide both medical and surgical treatment options.",
    icon: "👂",
    features: ["Hearing Tests", "Sinus Treatment", "Throat Disorders"],
    additionalInfo: "Our ENT department features advanced hearing testing facilities and specialized treatment for complex cases."
  },
  {
    title: "Medicine Department",
    shortDescription: "General medicine for disease diagnosis, treatment, and prevention.",
    fullDescription: "General medicine helps in diagnosing, treating, and preventing diseases using comprehensive medical approaches. We provide primary care and specialized medical services.",
    icon: "💊",
    features: ["Internal Medicine", "Preventive Care", "Chronic Disease Management"],
    additionalInfo: "Our medicine department provides comprehensive health screenings and preventive care programs."
  },
  {
    title: "Emergency Care",
    shortDescription: "24/7 emergency medical services for critical situations.",
    fullDescription: "24/7 emergency medical services providing immediate care for critical and urgent medical situations. Our emergency department is staffed by experienced emergency medicine specialists.",
    icon: "🚨",
    features: ["Trauma Care", "Critical Care", "Emergency Surgery"],
    additionalInfo: "Our emergency department features advanced life support equipment and rapid response protocols."
  }
];

const Services = () => {
  const [expandedIdx, setExpandedIdx] = useState(null);

  const handleLearnMore = (idx) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Specialized Departments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our specialized departments work together seamlessly to provide comprehensive healthcare services with the highest standards of medical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {departments.map((department, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="p-6 flex-grow">
                <div className="text-4xl mb-4">{department.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {department.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {department.shortDescription}
                </p>
              </div>
              
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleLearnMore(idx)}
                  className="w-full bg-teal-600 text-white py-3 px-4 rounded-md hover:bg-teal-700 transition-all duration-300 font-semibold"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}

          {/* Overlay for expanded card */}
          {expandedIdx !== null && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center">
                      <div className="text-4xl mr-4">{departments[expandedIdx].icon}</div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {departments[expandedIdx].title}
                      </h3>
                    </div>
                    <button
                      onClick={() => setExpandedIdx(null)}
                      className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                    >
                      ×
                    </button>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {departments[expandedIdx].fullDescription}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-teal-700 text-lg">Key Services:</h4>
                    {departments[expandedIdx].features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-6 border-l-4 border-teal-500">
                    <h4 className="font-semibold text-teal-800 mb-3 text-lg">Department Highlights:</h4>
                    <p className="text-gray-700 leading-relaxed text-lg">{departments[expandedIdx].additionalInfo}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Additional Services Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Additional Healthcare Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Diagnostic Services</h4>
              <p className="text-sm text-gray-600">Advanced imaging and laboratory testing</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">24/7 Emergency</h4>
              <p className="text-sm text-gray-600">Round-the-clock emergency medical care</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Patient Care</h4>
              <p className="text-sm text-gray-600">Comprehensive patient care and support</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Preventive Care</h4>
              <p className="text-sm text-gray-600">Health screenings and preventive medicine</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;