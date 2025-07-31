import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> January 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using the MEDICARE website and services, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 mb-4">
                MEDICARE provides healthcare services, medical consultations, appointment scheduling, and related healthcare information through our website. 
                Our services include but are not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Medical consultations and treatments</li>
                <li>Appointment scheduling and management</li>
                <li>Health information and resources</li>
                <li>Emergency medical services</li>
                <li>Specialized medical departments</li>
                <li>Patient care and support services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-700 mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Use the services for lawful purposes only</li>
                <li>Respect the privacy and rights of other users</li>
                <li>Follow all applicable laws and regulations</li>
                <li>Not misuse or attempt to gain unauthorized access</li>
                <li>Report any security concerns immediately</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">4. Medical Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                The information provided on this website is for general informational purposes only and is not intended as a substitute for professional medical advice, 
                diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
              <p className="text-gray-700 mb-4">
                MEDICARE does not guarantee the accuracy, completeness, or usefulness of any information on the website. 
                Reliance on any information provided by MEDICARE is solely at your own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">5. Appointment and Cancellation Policy</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Appointment Scheduling</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Appointments can be scheduled through our website or by phone</li>
                    <li>Confirmation will be sent via email or SMS</li>
                    <li>Please arrive 15 minutes before your scheduled appointment</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Cancellation Policy</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>24-hour notice required for appointment cancellations</li>
                    <li>Late cancellations may incur a fee</li>
                    <li>No-shows will be charged the full appointment fee</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">6. Payment Terms</h2>
              <p className="text-gray-700 mb-4">Payment terms and conditions:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Payment is due at the time of service unless otherwise arranged</li>
                <li>We accept cash, credit cards, and insurance</li>
                <li>Insurance claims will be filed on your behalf</li>
                <li>Outstanding balances must be paid within 30 days</li>
                <li>Late payments may incur additional charges</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">7. Privacy and Data Protection</h2>
              <p className="text-gray-700 mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, 
                which is incorporated into these Terms of Service by reference. By using our services, you consent to our Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">8. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content on this website, including text, graphics, logos, images, and software, is the property of MEDICARE 
                and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create 
                derivative works without our express written consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                MEDICARE shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                including but not limited to loss of profits, data, or use, arising out of or relating to your use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">10. Indemnification</h2>
              <p className="text-gray-700 mb-4">
                You agree to indemnify and hold harmless MEDICARE, its officers, directors, employees, and agents from any claims, 
                damages, or expenses arising from your use of our services or violation of these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">11. Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your access to our services immediately, without prior notice, for any reason, 
                including breach of these Terms of Service. Upon termination, your right to use the services will cease immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">12. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These Terms of Service shall be governed by and construed in accordance with the laws of India. 
                Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">13. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these Terms of Service at any time. We will notify users of any changes by posting 
                the new terms on this page and updating the "Last updated" date. Your continued use of our services after such 
                changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">14. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> legal@medicare.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> +91-9876543210</p>
                <p className="text-gray-700"><strong>Address:</strong> 123 Healthcare Avenue, Medical District, City Center, State 123456, India</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 