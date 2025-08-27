import React from "react";

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-[#f7f8fc] text-black px-6 py-12 flex flex-col items-center">
            <div className="w-full max-w-6xl bg-white p-12 rounded-3xl shadow-2xl">
                <h1 className="text-4xl font-bold mb-10 text-center text-black">
                    Terms & Conditions
                </h1>

                <div className="text-left">
                    <p className="mb-6 text-base text-gray-700 leading-relaxed">
                        Welcome to Tamper Detect! By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">1. Account Responsibility</h2>
                    <p className="text-base text-gray-700 mb-6 leading-relaxed">
                        You are responsible for maintaining the confidentiality of your account credentials and for all activities associated with your account. Tamper Detect is not liable for any loss or damage arising from unauthorized access to your account.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">2. Services Overview</h2>
                    <p className="text-base text-gray-700 mb-6 leading-relaxed">
                        Tamper Detect provides services to verify the authenticity of digital content, including image and document tamper detection. We reserve the right to modify, suspend, or discontinue any part of our services without prior notice.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">3. User Conduct</h2>
                    <p className="text-base text-gray-700 mb-6 leading-relaxed">
                        You agree not to misuse our services. You must not upload, distribute, or transmit any content that is harmful, fraudulent, deceptive, or violates any applicable laws or regulations.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">4. Data Privacy</h2>
                    <p className="text-base text-gray-700 mb-6 leading-relaxed">
                        We prioritize your privacy. Please review our{" "}
                        <a
                            href="/privacy-policy"
                            className="text-blue-600 hover:underline"
                        >
                            Privacy Policy
                        </a>{" "}
                        to understand how we collect, use, and protect your data.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">5. Limitation of Liability</h2>
                    <p className="text-base text-gray-700 mb-6 leading-relaxed">
                        Tamper Detect shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use or inability to use our services, including inaccuracies in detection results.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">6. Modifications to Terms</h2>
                    <p className="text-base text-gray-700 mb-6 leading-relaxed">
                        We may update these terms periodically. Continued use of Tamper Detect services after changes are made constitutes your acceptance of the updated terms.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">7. Contact Information</h2>
                    <p className="text-base text-gray-700 mb-6 leading-relaxed">
                        For any questions about these terms or our services, please contact us at{" "}
                        <a
                            href="mailto:support@tamperdetect.com"
                            className="text-blue-600 hover:underline"
                        >
                            support@tamperdetect.com
                        </a>.
                    </p>

                    <p className="text-sm text-gray-500 text-center mt-12">
                        ©️ {new Date().getFullYear()} Tamper Detect. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;