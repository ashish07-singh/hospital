import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Main About Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About MEDICARE</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            MEDICARE is a premier healthcare institution dedicated to delivering exceptional medical care 
            through innovation, compassion, and excellence. Since our establishment, we have been at the 
            forefront of medical advancement, providing comprehensive healthcare solutions to our community.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-teal-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-teal-700 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide exceptional healthcare services that enhance the quality of life for our patients 
              through innovative medical solutions, compassionate care, and unwavering commitment to 
              medical excellence and patient safety.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the leading healthcare provider recognized for medical innovation, patient-centered care, 
              and community health improvement, setting new standards in healthcare delivery and patient outcomes.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        {/* ... keep all JSX content as-is here ... */}

        {/* Team Section */}
        {/* ... team cards unchanged ... */}

        {/* How It Works Section */}
        {/* ... steps unchanged ... */}
      </div>
    </section>
  );
};

export default About;
