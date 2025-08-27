import { useState } from "react";

export default function PrivacyPolicy() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen p-8 transition-all ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Toggle Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-md shadow-md bg-green-500 text-white hover:bg-green-600 transition"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto bg-gray-800 text-gray-300 shadow-xl rounded-lg p-8 border border-green-500 transition-all">
        <h1 className="text-4xl font-bold text-center text-green-400 mb-4">
          Privacy Policy
        </h1>
        <p className="text-lg text-center mb-8">Effective Date: March 1, 2025</p>

        <div className="space-y-6">
          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-green-400">
              1. Information We Collect
            </h2>
            <p>
              We collect personal and non-personal information to enhance security and prevent fraudulent activities. The types of data we collect include:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-400">
              <li>Personal details (name, email, phone number, etc.)</li>
              <li>Device and browser information</li>
              <li>IP address and geolocation data</li>
              <li>Usage data for fraud detection</li>
            </ul>
          </section>

          {/* How We Use Your Data */}
          <section>
            <h2 className="text-2xl font-semibold text-green-400">
              2. How We Use Your Data
            </h2>
            <p>
              Your data is used for identity verification, fraud detection, and cybersecurity enhancement. We use AI-driven techniques to analyze potential risks, ensuring a secure environment.
            </p>
            <p className="mt-2">Specific uses include:</p>
            <ul className="list-disc list-inside mt-2 text-gray-400">
              <li>Detecting fraudulent activities in documents and images</li>
              <li>Enhancing account security with biometric verification</li>
              <li>Improving fraud detection algorithms using anonymized data</li>
            </ul>
          </section>

          {/* Cookies and Tracking */}
          <section>
            <h2 className="text-2xl font-semibold text-green-400">
              3. Cookies and Tracking Technologies
            </h2>
            <p>
              We use cookies and tracking technologies to enhance user experience, analyze site traffic, and prevent unauthorized access.
            </p>
            <p className="mt-2">You can manage your cookie preferences through your browser settings.</p>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-semibold text-green-400">
              4. Third-Party Services & Data Sharing
            </h2>
            <p>
              We may collaborate with third-party security services for fraud detection. These partners are required to adhere to strict data protection guidelines.
            </p>
            <p className="mt-2">
              We do not sell or share your personal data for marketing purposes.
            </p>
          </section>

          {/* Data Security & Protection */}
          <section>
            <h2 className="text-2xl font-semibold text-green-400">
              5. Data Security & Protection
            </h2>
            <p>
              We prioritize your data security and implement industry-leading measures, including:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-400">
              <li>End-to-end encryption of sensitive information</li>
              <li>Multi-factor authentication for account access</li>
              <li>Regular security audits and compliance checks</li>
            </ul>
          </section>

          {/* Your Rights & Access to Information */}
          <section>
            <h2 className="text-2xl font-semibold text-green-400">
              6. Your Rights & Access to Information
            </h2>
            <p>
              You have the right to request access to your data, make corrections, or delete your information. If you wish to exercise these rights, please contact us at:
            </p>
            <p className="mt-2 text-green-400">support@a2zlearning.com</p>
          </section>

          {/* Updates to This Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-green-400">
              7. Updates to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. Any changes will be posted on this page, and significant updates will be communicated via email.
            </p>
          </section>
        </div>

        {/* Contact Information */}
        <div className="mt-8 text-center">
          <p>
            For any inquiries, contact us at{" "}
            <a
              href="mailto:support@a2zlearning.com"
              className="text-green-400 hover:underline"
            >
              support@a2zlearning.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
