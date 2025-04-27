import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
      <p className="text-center">
        <strong>Last Updated:</strong> March 10, 2025
      </p>

      <div className="mt-6">
        <p>
          This Privacy Policy describes Our policies and procedures on the collection, use, and
          disclosure of Your information when You use the Service and tells You about Your privacy
          rights and how the law protects You.
        </p>
        <p>
          We use Your Personal data to provide and improve the Service. By using the Service, You
          agree to the collection and use of information in accordance with this Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Interpretation and Definitions</h2>

        <h3 className="text-xl font-semibold mt-4">Interpretation</h3>
        <p>
          The words with capitalized initial letters have specific meanings defined under the
          following conditions. These definitions apply whether words appear in singular or plural.
        </p>

        <h3 className="text-xl font-semibold mt-4">Definitions</h3>
        <ul className="list-inside list-disc mt-4">
          <li>
            <strong>Account:</strong> A unique account created for You to access our Service.
          </li>
          <li>
            <strong>Affiliate:</strong> An entity that controls, is controlled by, or is under
            common control with Us.
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
            <strong>Device:</strong> Any device used to access the Service.
          </li>
          <li>
            <strong>Personal Data:</strong> Information related to an identifiable individual.
          </li>
          <li>
            <strong>Service:</strong> Refers to the Website.
          </li>
          <li>
            <strong>Service Provider:</strong> A third party processing data on behalf of the
            Company.
          </li>
          <li>
            <strong>Usage Data:</strong> Data collected automatically through the Service.
          </li>
          <li>
            <strong>Website:</strong>{" "}
            <a href="http://www.sylphora.com" target="_blank" rel="noopener noreferrer">
              Sylphora
            </a>
          </li>
          <li>
            <strong>You:</strong> The individual accessing or using the Service.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Collecting and Using Your Personal Data</h2>

        <h3 className="text-xl font-semibold mt-4">Types of Data Collected</h3>

        <h4 className="font-semibold mt-2">Personal Data</h4>
        <p>We may collect the following personally identifiable information:</p>
        <ul className="list-inside list-disc mt-2">
          <li>Email address</li>
          <li>Usage Data</li>
        </ul>

        <h4 className="font-semibold mt-4">Usage Data</h4>
        <p>
          Usage Data is collected automatically and may include IP address, browser type, pages
          visited, time spent on pages, and device details.
        </p>

        <h3 className="text-xl font-semibold mt-6">Tracking Technologies and Cookies</h3>
        <p>We use Cookies and tracking technologies to improve Our Service.</p>

        <h3 className="text-xl font-semibold mt-6">Use of Your Personal Data</h3>
        <p>The Company may use Your Personal Data to:</p>
        <ul className="list-inside list-disc mt-2">
          <li>Provide and maintain our Service.</li>
          <li>Manage Your Account.</li>
          <li>Perform contract obligations.</li>
          <li>Contact You for updates and marketing.</li>
          <li>Analyze data to improve our Service.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">Retention of Your Personal Data</h3>
        <p>
          We will retain Your Personal Data only as necessary to comply with legal obligations,
          resolve disputes, and enforce agreements.
        </p>

        <h3 className="text-xl font-semibold mt-6">Transfer of Your Personal Data</h3>
        <p>
          Your data may be processed outside of Your location, subject to secure handling measures.
        </p>

        <h3 className="text-xl font-semibold mt-6">Delete Your Personal Data</h3>
        <p>You have the right to delete Your Personal Data by contacting us.</p>

        <h3 className="text-xl font-semibold mt-6">Disclosure of Your Personal Data</h3>
        <ul className="list-inside list-disc mt-2">
          <li>
            <strong>Business Transactions:</strong> In case of a merger or sale.
          </li>
          <li>
            <strong>Legal Compliance:</strong> If required by law.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">Security of Your Personal Data</h3>
        <p>
          We use commercially acceptable means to protect Your Personal Data but cannot guarantee
          absolute security.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Children's Privacy</h2>
        <p>Our Service is not intended for individuals under 13.</p>

        <h2 className="text-2xl font-semibold mt-6">Links to Other Websites</h2>
        <p>Our Service may contain third-party links. We are not responsible for their policies.</p>

        <h2 className="text-2xl font-semibold mt-6">Changes to this Privacy Policy</h2>
        <p>We may update this Privacy Policy periodically.</p>

        <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
        <p>If you have any questions, You can contact us:</p>
        <ul className="list-inside list-disc mt-2">
          <li>
            Email:{" "}
            <a href="mailto:sylphora.pvt@gmail.com" className="text-blue-500">
              Sylphora.pvt@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
