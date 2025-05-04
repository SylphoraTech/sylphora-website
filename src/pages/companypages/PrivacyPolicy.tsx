import React from "react";
import PageTransition from "@/components/ui/PageTransition";

const PrivacyPolicy = () => {
  return (
    <PageTransition>
      <div className="container mx-auto p-6 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600 dark:text-gray-400">
            <strong>Last Updated:</strong> March 10, 2025
          </p>
        </header>

        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-8">
            <p>
              This Privacy Policy describes Our policies and procedures on the collection, use, and
              disclosure of Your information when You use the Service and tells You about Your privacy
              rights and how the law protects You.
            </p>
            <p>
              We use Your Personal data to provide and improve the Service. By using the Service, You
              agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Interpretation and Definitions</h2>
            <h3 className="text-xl font-semibold mb-3">Interpretation</h3>
            <p className="mb-4">
              Words with capitalized initial letters have specific meanings defined under the
              following conditions. These definitions apply whether words appear in singular or plural.
            </p>

            <h3 className="text-xl font-semibold mb-3">Definitions</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Account:</strong> A unique account created for You to access our Service.
              </li>
              <li>
                <strong>Company:</strong> Sylphora Technologies Private Limited, Mumbai.
              </li>
              <li>
                <strong>Cookies:</strong> Small files stored on Your Device containing browsing history
                details.
              </li>
              <li>
                <strong>Country:</strong> Maharashtra, India.
              </li>
              <li>
                <strong>Personal Data:</strong> Information related to an identifiable individual.
              </li>
              <li>
                <strong>Service:</strong> Refers to the Website.
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a href="http://www.sylphora.com" className="text-blue-600 hover:text-blue-800">
                  Sylphora
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Collection and Usage</h2>
            <h3 className="text-xl font-semibold mb-3">Types of Data Collected</h3>
            <h4 className="text-lg font-semibold mb-2">Personal Data</h4>
            <p>We may collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email address</li>
              <li>Usage Data</li>
              <li>Contact information</li>
            </ul>

            <h4 className="text-lg font-semibold mt-4 mb-2">Usage Data</h4>
            <p>
              Usage Data is collected automatically and may include IP address, browser type, pages
              visited, time spent on pages, and device details.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Use of Your Personal Data</h2>
            <p>We may use Your Personal Data to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain our Service</li>
              <li>Manage Your Account</li>
              <li>Perform contract obligations</li>
              <li>Contact You for updates and marketing</li>
              <li>Analyze data to improve our Service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Protection Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Rectify your personal data</li>
              <li>Delete your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>For any questions about this Privacy Policy, please contact us:</p>
            <p className="mt-2">
              Email:{" "}
              <a href="mailto:sylphora.pvt@gmail.com" className="text-blue-600 hover:text-blue-800">
                sylphora.pvt@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default PrivacyPolicy;
