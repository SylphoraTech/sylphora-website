import React from "react";
import PageTransition from "@/components/ui/PageTransition";

const DMCA = () => {
  return (
    <PageTransition>
      <div className="container mx-auto p-6 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">DMCA Policy</h1>
          <p className="text-gray-600 dark:text-gray-400">
            <strong>Effective Date:</strong> March 10, 2025 |{" "}
            <strong>Last Updated:</strong> March 10, 2025
          </p>
        </header>

        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-8">
            <p>
              Sylphora Technologies Private Limited respects the intellectual property rights of
              others and expects users of our services to do the same. In accordance with the Digital
              Millennium Copyright Act (DMCA), we will respond promptly to claims of copyright
              infringement committed using our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Reporting Copyright Infringement</h2>
            <p>
              If you believe that your copyrighted work has been copied in a way that constitutes
              copyright infringement, please provide our designated DMCA agent with the following
              information:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                A physical or electronic signature of a person authorized to act on behalf of the
                copyright owner
              </li>
              <li>Identification of the copyrighted work claimed to have been infringed</li>
              <li>
                Identification of the material that is claimed to be infringing and information
                reasonably sufficient to locate the material
              </li>
              <li>Your contact information, including address, telephone number, and email address</li>
              <li>
                A statement that you have a good faith belief that use of the material is not
                authorized by the copyright owner, its agent, or the law
              </li>
              <li>
                A statement, made under penalty of perjury, that the information in the notification
                is accurate and that you are authorized to act on behalf of the copyright owner
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Counter-Notification</h2>
            <p>
              If you believe that your content was removed or disabled as a result of a mistake or
              misidentification, you may submit a counter-notification to our DMCA agent, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Your physical or electronic signature</li>
              <li>Identification of the removed content and its location before removal</li>
              <li>
                A statement under penalty of perjury that you have a good faith belief that the
                content was removed due to a mistake
              </li>
              <li>Your contact information</li>
              <li>A statement that you consent to the jurisdiction of the courts in India</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Repeat Infringers</h2>
            <p>
              Sylphora Technologies maintains a policy of terminating the accounts of users who are
              repeat infringers of copyright. A user may be considered a repeat infringer if we
              receive multiple DMCA notices related to their account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. DMCA Agent Contact Information</h2>
            <p>
              Please send all DMCA notices and counter-notifications to our designated DMCA agent at:
            </p>
            <p className="mt-2">
              Email:{" "}
              <a href="mailto:Sylphora.pvt@gmail.com" className="text-blue-600 hover:text-blue-800">
                Sylphora.pvt@gmail.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Good Faith Belief</h2>
            <p>
              By submitting a DMCA notice or counter-notification, you acknowledge that you have a
              good faith belief in the accuracy of your claim and that you understand the legal
              consequences of making false claims.
            </p>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default DMCA;
