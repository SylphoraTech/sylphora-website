import React from "react";
import PageTransition from "@/components/ui/PageTransition";

const Disclaimer = () => {
  return (
    <PageTransition>
      <div className="container mx-auto p-6 max-w-4xl">
      <header className="text-center mt-12 mb-12">
          <h1 className="text-4xl font-bold mb-4">Legal Disclaimer</h1>
          <p className="text-gray-600 dark:text-gray-400">
            <strong>Last Updated:</strong> March 10, 2025
          </p>
        </header>

        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. General Information</h2>
            <p>
              The information provided by Sylphora Technologies Private Limited ("Sylphora," "Company,"
              "we," "us," or "our") on its website, services, products, and any other digital or
              physical platforms is for general informational purposes only. All information is
              provided in good faith, but we make no representation or warranty of any kind, express
              or implied, regarding the accuracy, reliability, or completeness of any information on
              our platforms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. No Legal, Financial, or Professional Advice</h2>
            <p>
              The content, solutions, and services provided by Sylphora Technologies do not constitute
              legal, financial, or professional advice. Any reliance you place on such information is
              strictly at your own risk. We recommend consulting with a qualified professional before
              making decisions based on our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property Rights</h2>
            <p>
              All content, including but not limited to text, graphics, logos, software, designs, and
              code, is the exclusive property of Sylphora Technologies or its licensors and is
              protected by intellectual property laws. Unauthorized use, reproduction, or distribution
              of our materials is strictly prohibited.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Sylphora Technologies shall not be
              liable for any direct, indirect, incidental, consequential, or special damages arising
              from the use of our services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Service interruptions</li>
              <li>Security breaches</li>
              <li>Loss of data, revenue, or profits</li>
              <li>Technical issues beyond our control</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Third-Party Links & Services</h2>
            <p>
              Our website or services may contain links to third-party websites, tools, or services
              that are not owned or controlled by Sylphora Technologies. We do not endorse or assume
              responsibility for the content, privacy policies, or practices of third-party websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Compliance & Regulatory Requirements</h2>
            <p>
              Sylphora Technologies operates in accordance with applicable laws, regulations, and
              industry standards. However, it is the user's responsibility to ensure compliance with
              relevant laws when using our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Changes to Legal Disclaimers</h2>
            <p>
              We reserve the right to modify, update, or change these legal disclaimers at any time.
              Changes will be effective immediately upon posting on our website. Your continued use of
              our services constitutes acceptance of any modifications.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
            <p>
              These legal disclaimers are governed by the laws of India. Any disputes arising from
              the use of our services shall be subject to the exclusive jurisdiction of the courts in
              India.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p>For any legal inquiries or concerns regarding our disclaimers, please contact us:</p>
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

export default Disclaimer;
