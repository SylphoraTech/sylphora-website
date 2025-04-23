import React from "react";

const DMCA = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">DMCA Notice</h1>

      <h2 className="text-2xl font-semibold mt-8">Digital Millennium Copyright Act (DMCA) Policy</h2>
      <p className="mt-4"><strong>Effective Date:</strong> March 10, 2025</p>
      <p><strong>Last Updated:</strong> March 10, 2025</p>

      <p className="mt-4">
        Sylphora Technologies Private Limited respects the intellectual property rights of others and expects users of our services to do the same. In accordance with the Digital Millennium Copyright Act (DMCA), we will respond promptly to claims of copyright infringement committed using our services.
      </p>

      <h3 className="text-xl font-semibold mt-6">1. Reporting Copyright Infringement</h3>
      <p className="mt-2">
        If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement, please provide our designated DMCA agent with the following information:
      </p>
      <ul className="list-inside list-disc mt-4">
        <li>A physical or electronic signature of a person authorized to act on behalf of the copyright owner.</li>
        <li>Identification of the copyrighted work claimed to have been infringed.</li>
        <li>Identification of the material that is claimed to be infringing and information reasonably sufficient to locate the material.</li>
        <li>Your contact information, including address, telephone number, and email address.</li>
        <li>A statement that you have a good faith belief that the use of the material is not authorized by the copyright owner, its agent, or the law.</li>
        <li>A statement, made under penalty of perjury, that the information in the notification is accurate and that you are authorized to act on behalf of the copyright owner.</li>
      </ul>

      <p className="mt-6"><strong>DMCA Agent Contact Information:</strong></p>
      <p>📧 Email: <a href="mailto:Sylphora.pvt@gmail.com" className="text-blue-500">Sylphora.pvt@gmail.com</a></p>

      <h3 className="text-xl font-semibold mt-8">2. Counter-Notification</h3>
      <p className="mt-2">
        If you believe that your content was removed or disabled as a result of a mistake or misidentification, you may submit a counter-notification to our DMCA agent, including:
      </p>
      <ul className="list-inside list-disc mt-4">
        <li>Your physical or electronic signature.</li>
        <li>Identification of the removed content and its location before removal.</li>
        <li>A statement under penalty of perjury that you have a good faith belief that the content was removed due to a mistake.</li>
        <li>Your contact information.</li>
        <li>A statement that you consent to the jurisdiction of the courts in India.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8">3. Repeat Infringers</h3>
      <p className="mt-2">
        We may terminate accounts of users who are repeat infringers of copyright.
      </p>
    </div>
  );
};

export default DMCA;