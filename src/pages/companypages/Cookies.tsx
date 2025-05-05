// src/pages/companypages/Cookies.tsx
import React from "react";
import PageTransition from "@/components/ui/PageTransition";

const Cookies = () => {
  return (
    <PageTransition>
      <div className="container mx-auto p-6 max-w-4xl">
      <header className="text-center mt-12 mb-12">
          <h1 className="text-4xl font-bold mb-4">Cookies Policy</h1>
          <p className="text-gray-600 dark:text-gray-400">
            <strong>Effective Date:</strong> March 10, 2025 |{" "}
            <strong>Last Updated:</strong> March 10, 2025
          </p>
        </header>

        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-8">
            <p>
              This Cookies Policy explains how Sylphora Technologies Private Limited uses cookies and
              similar technologies to recognize you when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help
              improve website functionality, performance, and user experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Enhance website performance and security</li>
              <li>Analyze website traffic and user behavior</li>
              <li>Personalize content and advertisements</li>
              <li>Store your preferences and settings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Essential Cookies:</strong>
                <p className="mt-1">
                  Necessary for website functionality and cannot be switched off in our systems.
                </p>
              </li>
              <li>
                <strong>Analytical Cookies:</strong>
                <p className="mt-1">
                  Help us understand how visitors interact with our website through anonymous data
                  collection.
                </p>
              </li>
              <li>
                <strong>Marketing Cookies:</strong>
                <p className="mt-1">
                  Used to track visitors across websites to enable personalized advertising.
                </p>
              </li>
              <li>
                <strong>Functional Cookies:</strong>
                <p className="mt-1">
                  Remember your preferences to provide enhanced, personalized features.
                </p>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
            <p>
              You can control and delete cookies through your browser settings. However, removing or
              disabling cookies may affect the functionality of our services. Visit{" "}
              <a
                href="https://www.aboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                www.aboutcookies.org
              </a>{" "}
              for more information about managing cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Updates to This Policy</h2>
            <p>
              We may update this Cookies Policy periodically. Changes will be posted on this page with
              an updated revision date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p>For any questions regarding this policy, contact us:</p>
            <p className="mt-2">
              Email:{" "}
              <a href="mailto:Sylphora.pvt@gmail.com" className="text-blue-600 hover:text-blue-800">
                Sylphora.pvt@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default Cookies;