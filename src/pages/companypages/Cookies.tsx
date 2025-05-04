// src/pages/companypages/Cookies.tsx
import React from "react";

const Cookies = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Cookies Policy</h1>
      <p className="text-xl font-medium mb-4">Effective Date: March 10, 2025</p>
      <p className="text-xl font-medium mb-6">Last Updated: March 10, 2025</p>
      <p className="mb-6">
        This Cookies Policy explains how Sylphora Technologies Private Limited
        uses cookies and similar technologies to recognize you when you visit our
        website or use our services.
      </p>

      <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies?</h2>
      <p className="mb-6">
        Cookies are small text files stored on your device when you visit a
        website. They help improve website functionality, performance, and user
        experience.
      </p>

      <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
      <ul className="list-inside list-disc mb-6">
        <li>Enhance website performance and security.</li>
        <li>Analyze website traffic and user behavior.</li>
        <li>Personalize content and advertisements.</li>
        <li>Store your preferences and settings.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
      <ul className="list-inside list-disc mb-6">
        <li>
          <strong>Essential Cookies:</strong> Necessary for website
          functionality.
        </li>
        <li>
          <strong>Analytical Cookies:</strong> Help us understand how visitors
          interact with our website.
        </li>
        <li>
          <strong>Marketing Cookies:</strong> Used for personalized advertising.
        </li>
        <li>
          <strong>Functional Cookies:</strong> Improve user experience by
          remembering preferences.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
      <p className="mb-6">
        You can control and delete cookies through your browser settings.
        However, disabling cookies may affect the functionality of our services.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Updates to This Policy</h2>
      <p className="mb-6">
        We may update this Cookies Policy periodically. Changes will be posted on
        this page.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
      <p className="mb-6">
        For any questions regarding this policy, contact us at:
        <br />
        Email:{" "}
        <a href="mailto:Sylphora.pvt@gmail.com" className="text-blue-600">
          Sylphora.pvt@gmail.com
        </a>
      </p>
    </div>
  );
};

export default Cookies;