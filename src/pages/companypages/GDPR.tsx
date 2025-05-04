import React from "react";
import PageTransition from "@/components/ui/PageTransition";

const GDPR = () => {
  return (
    <PageTransition>
      <div className="container mx-auto p-6 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">GDPR Compliance</h1>
          <p className="text-gray-600 dark:text-gray-400">
            <strong>Last Updated:</strong> March 10, 2025
          </p>
        </header>

        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              At Sylphora Technologies Private Limited ("Sylphora," "Company," "we," "our," or "us"),
              we are committed to ensuring the protection of personal data in accordance with the
              General Data Protection Regulation (GDPR) (EU) 2016/679. This statement outlines our
              approach to data collection, processing, storage, and security for individuals within
              the European Economic Area (EEA).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Data Collection & Processing</h2>
            <p>
              We collect and process personal data lawfully, fairly, and transparently under GDPR
              principles. We only collect data that is:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>✅ Necessary for providing our services (contractual necessity)</li>
              <li>✅ Collected with explicit user consent</li>
              <li>✅ Required for legal obligations</li>
              <li>✅ Processed for legitimate business interests</li>
            </ul>
            <p className="mt-4">Types of data we may collect:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Name, email address, contact details</li>
              <li>IP addresses, device information</li>
              <li>Payment and transaction details (if applicable)</li>
              <li>Communication records</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Rights Under GDPR</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>🔹 Right to Access</strong>
                <p className="mt-1">Request a copy of your personal data.</p>
              </li>
              <li>
                <strong>🔹 Right to Rectification</strong>
                <p className="mt-1">Request corrections to inaccurate or incomplete data.</p>
              </li>
              <li>
                <strong>🔹 Right to Erasure</strong>
                <p className="mt-1">Request deletion of personal data under certain conditions.</p>
              </li>
              <li>
                <strong>🔹 Right to Data Portability</strong>
                <p className="mt-1">Receive your data in a structured, commonly used format.</p>
              </li>
              <li>
                <strong>🔹 Right to Object</strong>
                <p className="mt-1">Object to data processing for marketing or legitimate interests.</p>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Security & Protection</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>🔒 Encryption & Secure Storage</strong>
                <p className="mt-1">All personal data is encrypted and securely stored.</p>
              </li>
              <li>
                <strong>🔒 Access Control</strong>
                <p className="mt-1">Only authorized personnel have access to sensitive data.</p>
              </li>
              <li>
                <strong>🔒 Regular Security Audits</strong>
                <p className="mt-1">We conduct regular security assessments and risk evaluations.</p>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. International Data Transfers</h2>
            <p>When transferring data outside the EEA, we ensure:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Adequate level of protection as per GDPR requirements</li>
              <li>Implementation of Standard Contractual Clauses (SCCs)</li>
              <li>Third-party processor compliance with GDPR standards</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Data Breach Procedures</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Notify affected individuals within 72 hours of breach discovery</li>
              <li>Document all breaches and remedial actions taken</li>
              <li>Implement measures to prevent future breaches</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Contact Our DPO</h2>
            <p>
              For GDPR-related concerns or to exercise your rights, contact our Data Protection
              Officer:
            </p>
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

export default GDPR;
