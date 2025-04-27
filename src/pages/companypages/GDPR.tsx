import React from "react";

const GDPR = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">GDPR Compliance</h1>
      <h1>GDPR Compliance Statement</h1>

      <h2>1. Introduction</h2>

      <p>
        At Sylphora Technologies Private Limited ("Sylphora," "Company," "we," "our," or "us"), we
        are committed to ensuring the protection of personal data in accordance with the General
        Data Protection Regulation (GDPR) (EU) 2016/679. This statement outlines our approach to
        data collection, processing, storage, and security, ensuring compliance with EU data
        protection laws when handling personal data of individuals within the European Economic Area
        (EEA).
      </p>

      <h2>2. Data Collection & Processing</h2>
      <p>
        We collect and process personal data lawfully, fairly, and transparently under GDPR
        principles. We only collect data that is:
        <ul>
          <li>✅ Necessary for providing our services (contractual necessity)</li>
          <li>✅ Collected with explicit user consent</li>
          <li>✅ Required for legal obligations</li>
          <li>✅ Processed for legitimate business interests, without compromising user rights</li>
        </ul>
        Types of data we may collect:
        <ul>
          <li>Name, email address, contact details</li>
          <li>IP addresses, device information</li>
          <li>Payment and transaction details (if applicable)</li>
          <li>Communication records</li>
        </ul>
      </p>

      <h2>3. User Rights Under GDPR</h2>
      <ul>
        <li>🔹 Right to Access – Users can request a copy of their personal data.</li>
        <li>
          🔹 Right to Rectification – Users can request corrections to inaccurate or incomplete
          data.
        </li>
        <li>
          🔹 Right to Erasure – Users can request the deletion of personal data under certain
          conditions.
        </li>
        <li>
          🔹 Right to Restriction of Processing – Users can request limitations on how their data is
          processed.
        </li>
        <li>
          🔹 Right to Data Portability – Users can receive their personal data in a structured
          format.
        </li>
        <li>
          🔹 Right to Object – Users can object to data processing for marketing or legitimate
          interests.
        </li>
        <li>
          🔹 Right to Withdraw Consent – Users can withdraw their consent for data processing at any
          time.
        </li>
      </ul>

      <h2>4. Data Security & Protection</h2>
      <ul>
        <li>
          🔒 Encryption & Secure Storage – All personal data is encrypted and securely stored.
        </li>
        <li>🔒 Access Control – Only authorized personnel have access to sensitive data.</li>
        <li>🔒 Regular Security Audits – We conduct security assessments and risk evaluations.</li>
        <li>🔒 Data Minimization – We collect only the necessary data for service delivery.</li>
      </ul>

      <h2>5. Data Transfers & Third-Party Processing</h2>
      <p>
        If we transfer data outside the EEA, we ensure that:
        <ul>
          <li>The recipient country provides an adequate level of protection as per GDPR.</li>
          <li>
            Standard Contractual Clauses (SCCs) or other GDPR-compliant mechanisms are in place.
          </li>
          <li>Third-party processors comply with GDPR data protection standards.</li>
        </ul>
      </p>

      <h2>6. Data Retention Policy</h2>
      <p>
        We retain personal data only for as long as necessary to fulfill the purposes for which it
        was collected or as required by law. Once data is no longer needed, it is securely deleted
        or anonymized.
      </p>

      <h2>7. Cookies & Tracking Technologies</h2>
      <p>
        Our website and services may use cookies to enhance user experience. Users are provided with
        options to manage cookie preferences and opt-out of tracking as per GDPR requirements.
      </p>

      <h2>8. Data Breach Notification</h2>
      <ul>
        <li>
          🚨 Notify the affected individuals and relevant authorities within 72 hours if required
          under GDPR.
        </li>
        <li>🚨 Take immediate action to mitigate risks and secure compromised data.</li>
      </ul>

      <h2>9. Contact Information & Data Protection Officer (DPO)</h2>
      <p>
        If you have any GDPR-related concerns, data access requests, or complaints, you can contact
        our Data Protection Officer (DPO): 📧{" "}
        <a href="mailto:Sylphora.pvt@gmail.com">Sylphora.pvt@gmail.com</a>
      </p>

      <h2>10. Changes to This GDPR Statement</h2>
      <p>
        We reserve the right to update this GDPR Compliance Statement as needed to reflect changes
        in data protection laws and company policies. Users will be notified of any significant
        updates.
      </p>
    </div>
  );
};

export default GDPR;
