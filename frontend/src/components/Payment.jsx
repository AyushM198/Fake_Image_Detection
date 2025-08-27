// import React, { useState } from "react";

// const PaymentPage = () => {
//     const [paymentMethod, setPaymentMethod] = useState("Credit/Debit Card");
//     const [selectedBank, setSelectedBank] = useState("");

//     return (
//         <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-black px-4 py-8">
//             {/* Left Section */}
//             <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6 md:mb-0 md:mr-6">
//                 <div className="mb-6 text-center">
//                     <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700">
//                         FraudDetect AI Pro
//                     </h1>
//                     <p className="text-sm text-gray-500">
//                         AI-powered fraud detection for documents and images
//                     </p>
//                 </div>
//                 <p className="text-3xl font-extrabold text-gray-900 mb-2">
//                     $199.00 <span className="text-lg font-normal">per year</span>
//                 </p>
//                 <p className="text-sm text-gray-600 mb-6">
//                     Pro <br /> Access advanced fraud detection features, real-time scanning, and secure verification.
//                 </p>
//                 <div className="flex justify-between items-center text-gray-700 text-sm mb-4">
//                     <span>Qty 1</span>
//                     <span>Billed annually</span>
//                 </div>
//                 <hr className="my-4" />
//                 <div className="flex justify-between items-center text-gray-700 text-sm">
//                     <span>Subtotal</span>
//                     <span>$199.00</span>
//                 </div>
//                 <p className="text-sm text-blue-600 mt-4 cursor-pointer hover:underline">Add promotion code</p>
//                 <div className="flex justify-between items-center text-gray-700 text-sm mt-6">
//                     <span>Tax</span>
//                     <span>Enter address to calculate</span>
//                 </div>
//                 <hr className="my-4" />
//                 <div className="flex justify-between items-center text-lg font-bold">
//                     <span>Total due today</span>
//                     <span>$199.00</span>
//                 </div>
//             </div>

//             {/* Right Section */}
//             <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6 md:p-8">
//                 <div className="mb-6">
//                     <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
//                         Pay with Card or Other Methods - FraudDetect AI
//                     </h2>
//                 </div>
//                 <form>
//                     <label className="block mb-4">
//                         <span className="text-sm font-medium text-gray-600">Email</span>
//                         <input
//                             type="email"
//                             className="w-full mt-2 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//                             placeholder="your.email@example.com"
//                         />
//                     </label>

//                     <label className="block mb-4">
//                         <span className="text-sm font-medium text-gray-600">Mobile Number</span>
//                         <input
//                             type="tel"
//                             className="w-full mt-2 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//                             placeholder="Enter your mobile number"
//                         />
//                     </label>

//                     <label className="block mb-4">
//                         <span className="text-sm font-medium text-gray-600">Payment Method</span>
//                         <select
//                             className="w-full mt-2 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//                             onChange={(e) => setPaymentMethod(e.target.value)}
//                             value={paymentMethod}
//                         >
//                             <option>Credit/Debit Card</option>
//                             <option>Net Banking</option>
//                             <option>Google Pay</option>
//                             <option>PhonePe</option>
//                             <option>Apple Pay</option>
//                             <option>UPI (India)</option>
//                             <option>Bank Transfer</option>
//                         </select>
//                     </label>

//                     {/* Credit/Debit Card Fields */}
// {paymentMethod === "Credit/Debit Card" && (
//     <>
//         <label className="block mb-4">
//             <span className="text-sm font-medium text-gray-600">Card Information</span>
//             <div className="relative">
//                 <input
//                     type="text"
//                     className="w-full mt-2 p-3 pl-10 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//                     placeholder="1234 1234 1234 1234"
//                 />
//                 <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
//                     💳
//                 </span>
//             </div>
//             <div className="flex space-x-2 mt-2">
//                 <div className="relative w-1/2">
//                     <input
//                         type="text"
//                         className="w-full p-3 pl-10 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//                         placeholder="MM / YY"
//                     />
//                     <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
//                         📅
//                     </span>
//                 </div>
//                 <div className="relative w-1/2">
//                     <input
//                         type="text"
//                         className="w-full p-3 pl-10 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//                         placeholder="CVC"
//                     />
//                     <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
//                         🔒
//                     </span>
//                 </div>
//             </div>
//         </label>
//     </>
// )}


//                     {/* UPI Payment Fields */}
//                     {paymentMethod === "UPI (India)" && (
//                         <label className="block mb-4">
//                             <span className="text-sm font-medium text-gray-600">Enter UPI ID</span>
//                             <input
//                                 type="text"
//                                 className="w-full mt-2 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//                                 placeholder="example@upi"
//                             />
//                         </label>
//                     )}

//                     {/* Net Banking Fields */}
// {paymentMethod === "Net Banking" && (
//     <label className="block mb-4">
//         <span className="text-sm font-medium text-gray-600">Select Bank</span>
//         <select
//             className="w-full mt-2 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//             onChange={(e) => setSelectedBank(e.target.value)}
//             value={selectedBank}
//         >
//             <option value="">Select a bank</option>
//     <option value="SBI">State Bank of India (SBI)</option>
//     <option value="HDFC">HDFC Bank</option>
//     <option value="ICICI">ICICI Bank</option>
//     <option value="Axis Bank">Axis Bank</option>
//     <option value="Kotak Bank">Kotak Mahindra Bank</option>
//     <option value="PNB">Punjab National Bank (PNB)</option>
//     <option value="BOB">Bank of Baroda (BOB)</option>
//     <option value="Canara Bank">Canara Bank</option>
//     <option value="Union Bank">Union Bank of India</option>
//     <option value="IDBI">IDBI Bank</option>
//     <option value="Yes Bank">Yes Bank</option>
//     <option value="IndusInd Bank">IndusInd Bank</option>
//     <option value="Bandhan Bank">Bandhan Bank</option>
//     <option value="Federal Bank">Federal Bank</option>
//     <option value="RBL Bank">RBL Bank</option>
//     <option value="South Indian Bank">South Indian Bank</option>
//     <option value="UCO Bank">UCO Bank</option>
//     <option value="Indian Bank">Indian Bank</option>
//     <option value="Central Bank of India">Central Bank of India</option>
//     <option value="IDFC First Bank">IDFC First Bank</option>
//     <option value="Bank of India">Bank of India</option>
//     <option value="Karur Vysya Bank">Karur Vysya Bank</option>
//     <option value="DCB Bank">DCB Bank</option>
//     <option value="J&K Bank">Jammu & Kashmir Bank</option>
//         </select>
//     </label>
// )}

// {/* Additional Fields Based on Selected Bank */}
// {selectedBank && (
//     <div className="mb-4">
//         <label className="block mb-2 text-sm font-medium text-gray-600">
//             {selectedBank} Net Banking Login ID
//         </label>
//         <input
//             type="text"
//             className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter your Net Banking Login ID"
//         />
//     </div>
// )}


//                     {/* Google Pay, PhonePe, Apple Pay Fields */}
//                     {(paymentMethod === "Google Pay" || paymentMethod === "PhonePe" || paymentMethod === "Apple Pay") && (
//                         <p className="text-sm text-gray-600 mb-4">
//                             Please proceed with {paymentMethod} on your mobile device.
//                         </p>
//                     )}

//                     {/* Bank Transfer Fields */}
//                     {paymentMethod === "Bank Transfer" && (
//                         <p className="text-sm text-gray-600 mb-4">
//                             Bank transfer details will be provided after checkout.
//                         </p>
//                     )}

//                     <label className="block mb-4">
//                         <span className="text-sm font-medium text-gray-600">Country or region</span>
//                         <select className="w-full mt-2 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500">
//                             <option value="">Select a country</option>
//                             <option value="AF">Afghanistan</option>
//                             <option value="AL">Albania</option>
//                             <option value="DZ">Algeria</option>
//                             <option value="AS">American Samoa</option>
//                             <option value="AD">Andorra</option>
//                             <option value="AO">Angola</option>
//                             <option value="AI">Anguilla</option>
//                             <option value="AQ">Antarctica</option>
//                             <option value="AG">Antigua and Barbuda</option>
//                             <option value="AR">Argentina</option>
//                             <option value="AM">Armenia</option>
//                             <option value="AW">Aruba</option>
//                             <option value="AU">Australia</option>
//                             <option value="AT">Austria</option>
//                             <option value="AZ">Azerbaijan</option>
//                             <option value="BS">Bahamas</option>
//                             <option value="BH">Bahrain</option>
//                             <option value="BD">Bangladesh</option>
//                             <option value="BB">Barbados</option>
//                             <option value="BY">Belarus</option>
//                             <option value="BE">Belgium</option>
//                             <option value="BZ">Belize</option>
//                             <option value="BJ">Benin</option>
//                             <option value="BM">Bermuda</option>
//                             <option value="BT">Bhutan</option>
//                             <option value="BO">Bolivia</option>
//                             <option value="BA">Bosnia and Herzegovina</option>
//                             <option value="BW">Botswana</option>
//                             <option value="BR">Brazil</option>
//                             <option value="IO">British Indian Ocean Territory</option>
//                             <option value="BN">Brunei Darussalam</option>
//                             <option value="BG">Bulgaria</option>
//                             <option value="BF">Burkina Faso</option>
//                             <option value="BI">Burundi</option>
//                             <option value="KH">Cambodia</option>
//                             <option value="CM">Cameroon</option>
//                             <option value="CA">Canada</option>
//                             <option value="CV">Cape Verde</option>
//                             <option value="KY">Cayman Islands</option>
//                             <option value="CF">Central African Republic</option>
//                             <option value="TD">Chad</option>
//                             <option value="CL">Chile</option>
//                             <option value="CN">China</option>
//                             <option value="CX">Christmas Island</option>
//                             <option value="CC">Cocos (Keeling) Islands</option>
//                             <option value="CO">Colombia</option>
//                             <option value="KM">Comoros</option>
//                             <option value="CG">Congo</option>
//                             <option value="CD">Congo, The Democratic Republic of The</option>
//                             <option value="CK">Cook Islands</option>
//                             <option value="CR">Costa Rica</option>
//                             <option value="CI">Cote D'ivoire</option>
//                             <option value="HR">Croatia</option>
//                             <option value="CU">Cuba</option>
//                             <option value="CY">Cyprus</option>
//                             <option value="CZ">Czech Republic</option>
//                             <option value="DK">Denmark</option>
//                             <option value="DJ">Djibouti</option>
//                             <option value="DM">Dominica</option>
//                             <option value="DO">Dominican Republic</option>
//                             <option value="EC">Ecuador</option>
//                             <option value="EG">Egypt</option>
//                             <option value="SV">El Salvador</option>
//                             <option value="GQ">Equatorial Guinea</option>
//                             <option value="ER">Eritrea</option>
//                             <option value="EE">Estonia</option>
//                             <option value="ET">Ethiopia</option>
//                             <option value="FK">Falkland Islands (Malvinas)</option>
//                             <option value="FO">Faroe Islands</option>
//                             <option value="FJ">Fiji</option>
//                             <option value="FI">Finland</option>
//                             <option value="FR">France</option>
//                             <option value="GF">French Guiana</option>
//                             <option value="PF">French Polynesia</option>
//                             <option value="TF">French Southern Territories</option>
//                             <option value="GA">Gabon</option>
//                             <option value="GM">Gambia</option>
//                             <option value="GE">Georgia</option>
//                             <option value="DE">Germany</option>
//                             <option value="GH">Ghana</option>
//                             <option value="GI">Gibraltar</option>
//                             <option value="GR">Greece</option>
//                             <option value="GL">Greenland</option>
//                             <option value="GD">Grenada</option>
//                             <option value="GP">Guadeloupe</option>
//                             <option value="GU">Guam</option>
//                             <option value="GT">Guatemala</option>
//                             <option value="GG">Guernsey</option>
//                             <option value="GN">Guinea</option>
//                             <option value="GW">Guinea-bissau</option>
//                             <option value="GY">Guyana</option>
//                             <option value="HT">Haiti</option>
//                             <option value="HM">Heard Island and Mcdonald Islands</option>
//                             <option value="VA">Holy See (Vatican City State)</option>
//                             <option value="HN">Honduras</option>
//                             <option value="HK">Hong Kong</option>
//                             <option value="HU">Hungary</option>
//                             <option value="IS">Iceland</option>
//                             <option value="IN">India</option>
//                             <option value="ID">Indonesia</option>
//                             <option value="IR">Iran, Islamic Republic of</option>
//                             <option value="IQ">Iraq</option>
//                             <option value="IE">Ireland</option>
//                             <option value="IM">Isle of Man</option>
//                             <option value="IL">Israel</option>
//                             <option value="IT">Italy</option>
//                             <option value="JM">Jamaica</option>
//                             <option value="JP">Japan</option>
//                             <option value="JE">Jersey</option>
//                             <option value="JO">Jordan</option>
//                             <option value="KZ">Kazakhstan</option>
//                             <option value="KE">Kenya</option>
//                             <option value="KI">Kiribati</option>
//                             <option value="KP">Korea, Democratic People's Republic of</option>
//                             <option value="KR">Korea, Republic of</option>
//                             <option value="KW">Kuwait</option>
//                             <option value="KG">Kyrgyzstan</option>
//                         </select>
//                     </label>

//                     <label className="flex items-center mb-6">
//                         <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
//                         <span className="ml-2 text-sm text-gray-600">
//                             Securely save my information for 1-click checkout
//                         </span>
//                     </label>

//                     <button
//                         type="submit"
//                         className="w-full py-3 bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-600 hover:to-purple-800 text-white font-bold text-lg rounded-lg shadow transition duration-300"
//                     >
//                         Subscribe
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default PaymentPage;



import React, { useState } from "react";

export default function PaymentPage() {
  const [plan, setPlan] = useState("annual");

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-black"
      style={{
        backgroundImage: "url('/your-background-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-5xl bg-black bg-opacity-10 backdrop-blur-md rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Section */}
        <div
          className="p-10 flex flex-col justify-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1618022325802-7e5e732d97a1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')",
          }}
        >
          <h1 className="text-2xl font-bold text-white">Temper Detect</h1>
          <h2 className="text-3xl font-extrabold text-white mt-3">
            Upgrade to Plus
          </h2>
          <p className="text-gray-200 mt-1">Smarter, Faster, Better</p>

          <form className="mt-8 space-y-5">
            {/* Account Name */}
            <div>
              <label className="text-gray-200 text-sm">Billed To</label>
              <input
                type="text"
                placeholder="Account Name"
                className="w-full mt-1 px-4 py-3 rounded-lg 
                           bg-black bg-opacity-20 backdrop-blur-lg
                           placeholder-gray-200 text-white
                           border border-white/30
                           focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Payment Method */}
            <div>
              <label className="text-gray-200 text-sm">Payment Method</label>
              <input
                type="text"
                disabled
                value="UPI"
                className="w-full mt-1 px-4 py-3 rounded-lg 
                           bg-black bg-opacity-20 backdrop-blur-lg
                           text-gray-300 cursor-not-allowed
                           border border-white/30"
              />
            </div>

            {/* UPI ID */}
            <div>
              <input
                type="text"
                placeholder="Enter your UPI id"
                className="w-full px-4 py-3 rounded-lg 
                           bg-black bg-opacity-20 backdrop-blur-lg
                           placeholder-gray-200 text-white
                           border border-white/30
                           focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="w-1/2 py-3 rounded-lg 
                           bg-red-500 bg-opacity-20 backdrop-blur-lg 
                           border border-white/30 text-white
                           hover:bg-opacity-30 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-1/2 py-3 rounded-lg text-white font-semibold
                           bg-gradient-to-r from-purple-600 to-indigo-500
                           hover:opacity-90 transition"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Right Section */}
        <div
          className="p-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://static.vecteezy.com/system/resources/previews/001/401/677/non_2x/abstract-polygonal-shape-black-background-free-vector.jpg')",
          }}
        >
          <h3 className="text-lg font-semibold text-white mb-6">Starter Plan</h3>

          {/* Monthly Plan */}
          <div
            onClick={() => setPlan("monthly")}
            className={`cursor-pointer mb-4 rounded-xl p-5 flex items-center justify-between transition border ${
              plan === "monthly"
                ? "border-purple-500 bg-transparent shadow-lg shadow-purple-500/40"
                : "border-gray-400 bg-transparent hover:border-purple-300"
            }`}
          >
            <div>
              <p className="text-white font-semibold">Pay Monthly</p>
              <p className="text-gray-200 text-sm">₹180/Month/Member</p>
            </div>
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                plan === "monthly"
                  ? "border-purple-500"
                  : "border-gray-400"
              }`}
            >
              {plan === "monthly" && (
                <div className="w-2.5 h-2.5 bg-purple-500 rounded-full"></div>
              )}
            </div>
          </div>

          {/* Annual Plan */}
          <div
            onClick={() => setPlan("annual")}
            className={`cursor-pointer mb-4 rounded-xl p-5 flex items-center justify-between transition border ${
              plan === "annual"
                ? "border-purple-500 bg-transparent shadow-lg shadow-purple-500/40"
                : "border-gray-400 bg-transparent hover:border-purple-300"
            }`}
          >
            <div>
              <p className="text-white font-semibold">Pay Annually</p>
              <p className="text-gray-200 text-sm">₹129/Month/Member</p>
            </div>
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                plan === "annual"
                  ? "border-purple-500"
                  : "border-gray-400"
              }`}
            >
              {plan === "annual" && (
                <div className="w-2.5 h-2.5 bg-purple-500 rounded-full"></div>
              )}
            </div>
          </div>

          {/* Total */}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <p className="text-gray-200 text-lg">Total</p>
              <p className="text-white text-xl font-bold">
                ₹{plan === "annual" ? "129" : "180"}/Month
              </p>
            </div>
            <p className="text-gray-300 text-sm mt-2">
              Your transactions are encrypted and protected at every step
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}