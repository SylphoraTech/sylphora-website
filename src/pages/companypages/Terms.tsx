import React from "react";

const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Terms and Conditions</h1>
        <p className="text-gray-600">
          Effective Date: March 10, 2025 | Last Updated: March 10, 2025
        </p>
      </header>

      <main className="prose max-w-none mb-12">
        <section className="mb-6">
          <p className="text-gray-700 mb-4">
            Welcome to Sylphora Technologies Private Limited. These Terms and Conditions outline the
            rules and regulations for the use of our services, website, and applications. By
            accessing or using our services, you agree to comply with and be bound by these terms.
            If you do not agree with any part of these terms, you should not use our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">1. Definitions</h2>
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

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">2. Use of Services</h2>
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

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">3. Intellectual Property</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              All content, trademarks, logos, and intellectual property associated with our services
              remain the sole property of Sylphora Technologies Private Limited.
            </li>
            <li>
              You may not use, reproduce, or distribute our content without prior written consent.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">4. Account and Security</h2>
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

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">5. Payment and Subscription</h2>
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

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">6. Limitation of Liability</h2>
          <p className="text-gray-700">
            We do not guarantee that our services will be error-free or uninterrupted. Sylphora
            Technologies Private Limited is not liable for any direct, indirect, incidental, or
            consequential damages arising from the use or inability to use our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">7. Privacy Policy</h2>
          <p className="text-gray-700">
            Our Privacy Policy governs how we collect, use, and protect user data. By using our
            services, you agree to our Privacy Policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">8. Termination</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              We reserve the right to terminate or suspend your access to our services if you
              violate these terms.
            </li>
            <li>Termination does not waive any accrued rights or obligations.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">9. Changes to Terms</h2>
          <p className="text-gray-700">
            We may update these Terms and Conditions periodically. Continued use of our services
            after changes signifies acceptance of the updated terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">10. Governing Law</h2>
          <p className="text-gray-700">
            These terms are governed by the laws of India. Any disputes shall be subject to the
            exclusive jurisdiction of the courts in Bangalore, Karnataka.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">11. Contact Information</h2>
          <p className="text-gray-700 mb-2">
            For any questions or concerns regarding these terms, please contact us at:
          </p>
          <p className="text-gray-700">
            Email:{" "}
            <a href="mailto:Sylphora.pvt@gmail.com" className="text-blue-600 hover:text-blue-800">
              Sylphora.pvt@gmail.com
            </a>
          </p>
        </section>
      </main>

      <footer className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="about-us" className="text-blue-600 hover:text-blue-800">
                  About
                </a>
              </li>
              <li>
                <a href="privacy-policy" className="text-blue-600 hover:text-blue-800">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="Terms" className="text-blue-600 hover:text-blue-800">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="disclaimer" className="text-blue-600 hover:text-blue-800">
                  Legal Disclaimer
                </a>
              </li>
              <li>
                <a href="contact" className="text-blue-600 hover:text-blue-800">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <span className="sr-only">Facebook</span>
                <img src="/assets/facebook.png" alt="Facebook" className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/SylphoraPvt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                <span className="sr-only">Twitter</span>
                <img src="/assets/twitter.png" alt="Twitter" className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/sylphora_technologies?igsh=MW5rYzFpM2ZqNDBvbA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                <span className="sr-only">Instagram</span>
                <img src="/assets/instagram.png" alt="Instagram" className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/sylphora/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                <span className="sr-only">LinkedIn</span>
                <img src="/assets/linkedin.png" alt="LinkedIn" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Sylphora Technologies Private Limited. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Terms;
