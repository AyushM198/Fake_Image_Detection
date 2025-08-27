import React, { useState } from "react";
import { FaGooglePay, FaCreditCard, FaMoneyBill, FaCheckCircle, FaQrcode, FaUniversity, FaMobileAlt, FaLock } from "react-icons/fa";

const Uploadingimage = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showBankLogin, setShowBankLogin] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    upiId: "",
    bankName: "",
    bankUsername: "",
    bankPassword: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const amount = 15;
  const tax = 2;
  const totalAmount = amount + tax;

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });

    if (e.target.name === "bankName") {
      setShowBankLogin(!!e.target.value); // Show bank login form when a bank is selected
    }
  };

  const handlePayment = () => {
    if (!userData.name || !userData.email || !paymentMethod) {
      alert("Please fill in all details and select a payment method!");
      return;
    }
    setTimeout(() => {
      setPaymentSuccess(true);
    }, 2000);
  };

  return (
    <section className="bg-black text-white py-24 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-3xl bg-gray-900 p-10 rounded-3xl shadow-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Secure Payment</h1>

        {/* User Details */}
        <div className="bg-gray-800 p-6 rounded-xl text-left space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={userData.name}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={userData.email}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
          />

          {/* Payment Methods */}
          <h3 className="text-lg font-semibold text-gray-300 mt-4">Choose Payment Method</h3>

          {/* UPI Payment */}
          <div className="bg-gray-700 rounded-lg p-3 cursor-pointer" onClick={() => setPaymentMethod("upi")}>
            <div className="flex items-center gap-3">
              <FaGooglePay className="text-blue-400 text-xl" />
              <span>UPI / Google Pay / PhonePe</span>
            </div>
            {paymentMethod === "upi" && (
              <div className="mt-3">
                <input
                  type="text"
                  name="upiId"
                  placeholder="Enter UPI ID"
                  value={userData.upiId}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-gray-600 text-white border border-gray-500"
                />
                <p className="text-sm text-gray-400 mt-2">or scan the QR code below</p>
                <div className="flex justify-center mt-2">
                  <FaQrcode className="text-white text-5xl" />
                </div>
              </div>
            )}
          </div>

          {/* Card Payment */}
          <div className="bg-gray-700 rounded-lg p-3 cursor-pointer mt-3" onClick={() => setPaymentMethod("card")}>
            <div className="flex items-center gap-3">
              <FaCreditCard className="text-yellow-400 text-xl" />
              <span>Debit / Credit Card</span>
            </div>
            {paymentMethod === "card" && (
              <div className="mt-3 space-y-2">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={userData.cardNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-gray-600 text-white border border-gray-500"
                />
                <div className="flex gap-3">
                  <input
                    type="text"
                    name="expiry"
                    placeholder="Expiry (MM/YY)"
                    value={userData.expiry}
                    onChange={handleInputChange}
                    className="w-1/2 p-2 rounded-lg bg-gray-600 text-white border border-gray-500"
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={userData.cvv}
                    onChange={handleInputChange}
                    className="w-1/2 p-2 rounded-lg bg-gray-600 text-white border border-gray-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Net Banking */}
          <div className="bg-gray-700 rounded-lg p-3 cursor-pointer mt-3" onClick={() => setPaymentMethod("netbanking")}>
            <div className="flex items-center gap-3">
              <FaMoneyBill className="text-green-400 text-xl" />
              <span>Net Banking</span>
            </div>
            {paymentMethod === "netbanking" && (
              <div className="mt-3">
                <label className="text-sm text-gray-400">Select Bank</label>
                <select
                  name="bankName"
                  value={userData.bankName}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-gray-600 text-white border border-gray-500"
                >
                  <option value="">Choose a Bank</option>
                  <option value="SBI">State Bank of India</option>
                  <option value="HDFC">HDFC Bank</option>
                  <option value="ICICI">ICICI Bank</option>
                  <option value="Axis">Axis Bank</option>
                  <option value="PNB">Punjab National Bank</option>
                </select>

                {showBankLogin && (
                  <div className="mt-4 p-4 bg-gray-800 rounded-lg">
                    <h4 className="text-gray-300 text-lg font-semibold">Login to {userData.bankName}</h4>
                    <input
                      type="text"
                      name="bankUsername"
                      placeholder="Enter Username"
                      value={userData.bankUsername}
                      onChange={handleInputChange}
                      className="w-full p-2 mt-2 rounded-lg bg-gray-700 text-white border border-gray-600"
                    />
                    <input
                      type="password"
                      name="bankPassword"
                      placeholder="Enter Password"
                      value={userData.bankPassword}
                      onChange={handleInputChange}
                      className="w-full p-2 mt-2 rounded-lg bg-gray-700 text-white border border-gray-600"
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Pay Now Button */}
          {!paymentSuccess ? (
            <button onClick={handlePayment} className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl">
              Pay ₹{totalAmount} Now
            </button>
          ) : (
            <div className="mt-6 flex items-center justify-center gap-2 text-green-400 font-semibold text-lg">
              <FaCheckCircle /> Payment Successful!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Uploadingimage;
