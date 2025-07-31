import React from "react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> January 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">1. What Are Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-700 mb-4">We use cookies for the following purposes:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Analytics Cookies:</strong> Provide insights into website usage and performance</li>
                <li><strong>Marketing Cookies:</strong> Help us deliver relevant content and advertisements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">3. Types of Cookies We Use</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Essential Cookies</h3>
                  <p className="text-gray-700 mb-2">These cookies are necessary for the website to function and cannot be disabled.</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Authentication and security cookies</li>
                    <li>Session management cookies</li>
                    <li>Load balancing cookies</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Performance Cookies</h3>
                  <p className="text-gray-700 mb-2">These cookies help us understand how visitors use our website.</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Google Analytics cookies</li>
                    <li>Page load time tracking</li>
                    <li>Error tracking and monitoring</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Functional Cookies</h3>
                  <p className="text-gray-700 mb-2">These cookies remember your preferences and settings.</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Language preferences</li>
                    <li>Theme and layout preferences</li>
                    <li>Form data retention</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                We may use third-party services that place cookies on your device. These services include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> Website analytics and performance monitoring</li>
                <li><strong>Google Fonts:</strong> Typography and design elements</li>
                <li><strong>Social Media Platforms:</strong> Social sharing and integration features</li>
                <li><strong>Payment Processors:</strong> Secure payment processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">5. Cookie Duration</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Session Cookies</h3>
                  <p className="text-gray-700">These cookies are temporary and are deleted when you close your browser.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Persistent Cookies</h3>
                  <p className="text-gray-700">These cookies remain on your device for a set period or until you delete them.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">6. Managing Your Cookie Preferences</h2>
              <p className="text-gray-700 mb-4">You can control and manage cookies in several ways:</p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Browser Settings</h3>
                  <p className="text-gray-700 mb-2">Most browsers allow you to:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>View and delete existing cookies</li>
                    <li>Block cookies from specific websites</li>
                    <li>Block all cookies</li>
                    <li>Set preferences for different types of cookies</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Cookie Consent</h3>
                  <p className="text-gray-700">
                    When you first visit our website, you'll see a cookie consent banner. You can choose which types of cookies to accept.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">7. Impact of Disabling Cookies</h2>
              <p className="text-gray-700 mb-4">
                If you choose to disable cookies, some features of our website may not function properly:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>You may need to re-enter information repeatedly</li>
                <li>Some features may not work as expected</li>
                <li>Your preferences may not be saved</li>
                <li>Website performance may be affected</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">8. Data Collected by Cookies</h2>
              <p className="text-gray-700 mb-4">
                Cookies may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent</li>
                <li>Referring website information</li>
                <li>User preferences and settings</li>
                <li>Form data and interactions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">9. Updates to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, 
                legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on this page 
                and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">10. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> privacy@medicare.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> +91-9876543210</p>
                <p className="text-gray-700"><strong>Address:</strong> 123 Healthcare Avenue, Medical District, City Center, State 123456, India</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">11. Additional Resources</h2>
              <p className="text-gray-700 mb-4">
                For more information about cookies and how to manage them, you can visit:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><a href="https://www.allaboutcookies.org" className="text-teal-600 hover:text-teal-700 underline">All About Cookies</a></li>
                <li><a href="https://www.youronlinechoices.com" className="text-teal-600 hover:text-teal-700 underline">Your Online Choices</a></li>
                <li><a href="https://www.networkadvertising.org" className="text-teal-600 hover:text-teal-700 underline">Network Advertising Initiative</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy; 