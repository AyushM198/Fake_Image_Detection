import React, { useRef, useEffect } from 'react';

const TrialPopup = ({ show, onClose }) => {
    const popupRef = useRef(null);

    // Handle outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (show) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [show, onClose]);

    if (!show) return null;

    const handleSubscribe = () => {
        window.location.href = "/payment"; // Replace with actual payment URL
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <div
                ref={popupRef}
                className="bg-white p-6 rounded-xl shadow-xl w-80 text-center"
            >
                <h2 className="text-xl font-bold mb-4 text-red-600">Trial Expired</h2>
                <p className="text-gray-700 mb-6">
                    Your free trial has ended. Please subscribe to continue using the service.
                </p>
                <button
                    onClick={handleSubscribe}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                    Subscribe Now
                </button>
                <button
                    onClick={onClose}
                    className="text-sm text-gray-500 mt-4 block mx-auto hover:underline"
                >
                    Maybe Later
                </button>
            </div>
        </div>
    );
};

export default TrialPopup;
