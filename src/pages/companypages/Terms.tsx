import React from "react";
import PageTransition from "@/components/ui/PageTransition";

const Terms = () => {
  return (
    <PageTransition>
      <div className="container mx-auto p-6 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-gray-600 dark:text-gray-400">
            <strong>Effective Date:</strong> March 10, 2025 |{" "}
            <strong>Last Updated:</strong> March 10, 2025
          </p>
        </header>

        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-8">
            <p>
              Welcome to Sylphora Technologies Private Limited. These Terms and Conditions outline
              the rules and regulations for the use of our services, website, and applications. By
              accessing or using our services, you agree to comply with and be bound by these terms.
              If you do not agree with any part of these terms, you should not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Definitions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>"Company"</strong> refers to Sylphora Technologies Private Limited, including
                its affiliates and subsidiaries.
              </li>
              <li>
                <strong>"User"</strong> refers to any individual or entity accessing our services.
              </li>
              <li>
                <strong>"Services"</strong> include any offerings provided by Sylphora Technologies
                Private Limited, including but not limited to software, consultancy, and technical
                support.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must be at least 18 years old to use our services.</li>
              <li>
                You agree to use our services only for lawful purposes and in compliance with all
                applicable laws and regulations.
              </li>
              <li>
                You shall not misuse, modify, or reverse-engineer any part of our services without
                explicit permission.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                All content, trademarks, logos, and intellectual property associated with our
                services remain the sole property of Sylphora Technologies Private Limited.
              </li>
              <li>
                You may not use, reproduce, or distribute our content without prior written consent.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Account and Security</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                You are responsible for maintaining the confidentiality of your account credentials.
              </li>
              <li>Any unauthorized use of your account must be reported to us immediately.</li>
              <li>
                We are not liable for any loss or damage resulting from unauthorized access to your
                account.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Payment and Subscription</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                If any service requires payment, you agree to provide accurate and complete billing
                information.
              </li>
              <li>All payments are non-refundable unless explicitly stated otherwise.</li>
              <li>
                We reserve the right to modify pricing, fees, or payment terms with prior notice.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p>
              We do not guarantee that our services will be error-free or uninterrupted. Sylphora
              Technologies Private Limited is not liable for any direct, indirect, incidental, or
              consequential damages arising from the use or inability to use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
            <p>
              We may update these Terms and Conditions periodically. Continued use of our services
              after changes signifies acceptance of the updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
            <p>For any questions regarding these terms, please contact us:</p>
            <p className="mt-2">
              Email:{" "}
              <a
                href="mailto:Sylphora.pvt@gmail.com"
                className="text-blue-600 hover:text-blue-800"
              >
                Sylphora.pvt@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default Terms;
