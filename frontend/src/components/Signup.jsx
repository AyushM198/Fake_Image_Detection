// // // import React, { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // const images = ["/img/ss.jpeg", "/img/signup.jpg", "/img/pp.jpeg"];

// // // const SignupPage = () => {
// // //   const [currentSlide, setCurrentSlide] = useState(0);
// // //   const [firstName, setFirstName] = useState("");
// // //   const [lastName, setLastName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [success, setSuccess] = useState("");
// // //   const [error, setError] = useState("");
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setCurrentSlide((prev) => (prev + 1) % images.length);
// // //     }, 4000);
// // //     return () => clearInterval(interval);
// // //   }, []);

// // //   const handleDotClick = (index) => setCurrentSlide(index);

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setError("");
// // //     setSuccess("");

// // //     try {
// // //       const response = await fetch("http://localhost:5000/register", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ firstName, lastName, email, password }),
// // //       });

// // //       if (response.ok) {
// // //         setSuccess("Account created successfully! Redirecting to login...");
// // //         setTimeout(() => navigate("/login"), 2000);
// // //       } else {
// // //         const data = await response.json();
// // //         setError(data.message || "User not created. Please try again.");
// // //       }
// // //     } catch (err) {
// // //       setError("Something went wrong. Please try again later.");
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex min-h-screen items-center justify-center bg-[#191724] px-4">
// // //       <div className="flex w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">

// // //         {/* Left Side Carousel */}
// // //         <div className="hidden md:flex md:w-1/2 relative overflow-hidden bg-black text-white">
// // //           {images.map((img, index) => (
// // //             <img
// // //               key={index}
// // //               src={img}
// // //               alt=""
// // //               className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
// // //                 index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
// // //               }`}
// // //             />
// // //           ))}

// // //           {/* Top Bar with Logo and Button */}
// // //           <div className="absolute top-6 left-0 w-full flex justify-between items-center px-6 z-20">
// // //             <div className="flex items-center gap-2">
// // //               <img src="/img/logo.png" alt="Logo" className="w-6 h-6" />
// // //               <span className="font-semibold text-lg tracking-wide">Queen Shruti</span>
// // //             </div>
// // //             <a
// // //               href="/"
// // //               className="text-sm border border-white text-white px-4 py-1.5 rounded-full font-medium hover:bg-white hover:text-black transition"
// // //             >
// // //               Back to website →
// // //             </a>
// // //           </div>

// // //           {/* Bottom Tagline & Dashes */}
// // //           <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center z-20">
// // //             <p className="text-white text-lg font-medium leading-tight mb-3">
// // //               Capturing Moments,<br />Creating Memories
// // //             </p>
// // //             <div className="flex justify-center gap-2">
// // //               {images.map((_, index) => (
// // //                 <button
// // //                   key={index}
// // //                   onClick={() => handleDotClick(index)}
// // //                   className={`h-0.5 w-6 rounded-full transition-all ${
// // //                     index === currentSlide ? "bg-white" : "bg-white/40"
// // //                   }`}
// // //                 />
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Right Side Form */}
// // //         <div className="w-full md:w-1/2 p-10 bg-white text-black">
// // //           <h2 className="text-3xl font-bold mb-2">Create your account</h2>
// // //           <p className="text-sm text-gray-600 mb-6">
// // //             Already have an account?{" "}
// // //             <a href="/login" className="text-purple-600 font-medium hover:underline">
// // //               Log in
// // //             </a>
// // //           </p>

// // //           <form onSubmit={handleSubmit} className="space-y-5">
// // //             <div className="flex gap-4">
// // //               <input
// // //                 type="text"
// // //                 placeholder="First name"
// // //                 value={firstName}
// // //                 onChange={(e) => setFirstName(e.target.value)}
// // //                 className="w-1/2 rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-300 focus:outline-none"
// // //                 required
// // //               />
// // //               <input
// // //                 type="text"
// // //                 placeholder="Last name"
// // //                 value={lastName}
// // //                 onChange={(e) => setLastName(e.target.value)}
// // //                 className="w-1/2 rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-300 focus:outline-none"
// // //                 required
// // //               />
// // //             </div>

// // //             <input
// // //               type="email"
// // //               placeholder="Email address"
// // //               value={email}
// // //               onChange={(e) => setEmail(e.target.value)}
// // //               className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-300 focus:outline-none"
// // //               required
// // //             />

// // //             <input
// // //               type="password"
// // //               placeholder="Password"
// // //               value={password}
// // //               onChange={(e) => setPassword(e.target.value)}
// // //               className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-300 focus:outline-none"
// // //               required
// // //             />

// // //             <div className="flex items-start text-sm mt-1">
// // //               <input
// // //                 type="checkbox"
// // //                 className="mt-1 mr-2 accent-purple-600 focus:ring-2 focus:ring-purple-400"
// // //                 required
// // //               />
// // //               <span>
// // //                 I agree to the{" "}
// // //                 <a href="/Terms" className="text-purple-600 hover:underline font-medium">
// // //                   Terms & Conditions
// // //                 </a>
// // //               </span>
// // //             </div>

// // //             <button
// // //               type="submit"
// // //               className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 rounded-xl shadow-md transition"
// // //             >
// // //               Create account
// // //             </button>

// // //             {success && <p className="text-green-600 text-sm text-center">{success}</p>}
// // //             {error && <p className="text-red-600 text-sm text-center">{error}</p>}
// // //           </form>

// // //           {/* Divider */}
// // //           <div className="flex items-center my-6">
// // //             <hr className="flex-grow border-gray-200" />
// // //             <span className="px-4 text-gray-400 text-sm">or</span>
// // //             <hr className="flex-grow border-gray-200" />
// // //           </div>

// // //           {/* Google Button (Updated) */}
// // //           <button
// // //             type="button"
// // //             onClick={() => {
// // //               window.location.href = "http://localhost:5000/auth/google";
// // //             }}
// // //             className="w-full bg-white border border-gray-300 text-black py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition shadow-sm"
// // //           >
// // //             <img src="/img/google.png" alt="Google" className="w-5 h-5" />
// // //             Continue with Google
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SignupPage;



// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";

// // const slides = ["/img/ss.jpeg", "/img/signup.jpg", "/img/pp.jpeg"];

// // const SignupPage = () => {
// //   const [isLogin, setIsLogin] = useState(true);
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const [firstName, setFirstName] = useState("");
// //   const [lastName, setLastName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [success, setSuccess] = useState("");
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % slides.length);
// //     }, 4000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError("");
// //     setSuccess("");

// //     if (!validateEmail(email)) {
// //       setError("Invalid email");
// //       return;
// //     }
// //     if (!password) {
// //       setError("Password cannot be empty");
// //       return;
// //     }

// //     if (isLogin) {
// //       try {
// //         const response = await fetch("http://localhost:5000/login", {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify({ email, password }),
// //         });

// //         const data = await response.json();

// //         if (response.ok) {
// //           localStorage.setItem("userEmail", email);
// //           localStorage.setItem("token", data.token);
// //           setSuccess("Login successful!");
// //           navigate("/");
// //         } else {
// //           setError(data.message || "Login failed");
// //         }
// //       } catch (err) {
// //         setError("An error occurred. Please try again.");
// //       }
// //     } else {
// //       try {
// //         const response = await fetch("http://localhost:5000/register", {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify({ firstName, lastName, email, password }),
// //         });

// //         if (response.ok) {
// //           setSuccess("Account created successfully! Redirecting to login...");
// //           setTimeout(() => setIsLogin(true), 2000);
// //         } else {
// //           const data = await response.json();
// //           setError(data.message || "User not created. Please try again.");
// //         }
// //       } catch (err) {
// //         setError("Something went wrong. Please try again later.");
// //       }
// //     }
// //   };

// //   return (
// //     <div className="flex min-h-screen items-center justify-center bg-[#191724] px-4">
// //       <div className="flex w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">
// //         {/* Left Image Section */}
// //         <div className="hidden md:flex md:w-1/2 relative overflow-hidden bg-black text-white">
// //           {slides.map((img, index) => (
// //             <img
// //               key={index}
// //               src={img}
// //               alt=""
// //               className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
// //                 index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
// //               }`}
// //             />
// //           ))}

// //           <div className="absolute top-6 left-0 w-full flex justify-between items-center px-6 z-20">
// //             <div className="flex items-center gap-2">
// //               <img src="/img/go.png" alt="Logo" className="w-6 h-6" />
// //               <span className="font-semibold text-lg tracking-wide">Temper Detect</span>
// //             </div>
// //             <a
// //               href="/"
// //               className="text-sm border border-white text-white px-4 py-1.5 rounded-full font-medium hover:bg-white hover:text-black transition"
// //             >
// //               Back to website →
// //             </a>
// //           </div>

// //           <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center z-20">
// //             <p className="text-white text-lg font-medium leading-tight mb-3">
// //               Capturing Moments,<br />Creating Memories
// //             </p>
// //             <div className="flex justify-center gap-2">
// //               {slides.map((_, index) => (
// //                 <span
// //                   key={index}
// //                   className={`h-0.5 w-6 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/40"}`}
// //                 />
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right Form Section */}
// //         <div className="w-full md:w-1/2 p-10 bg-white text-black">
// //           <h2 className="text-3xl font-bold mb-2">
// //             {isLogin ? "Welcome Back" : "Create your account"}
// //           </h2>
// //           <p className="text-sm text-gray-600 mb-6">
// //             {isLogin ? (
// //               <>
// //                 Don’t have an account?{' '}
// //                 <button className="text-purple-600 font-medium hover:underline" onClick={() => setIsLogin(false)}>
// //                   Sign up here
// //                 </button>
// //               </>
// //             ) : (
// //               <>
// //                 Already have an account?{' '}
// //                 <button className="text-purple-600 font-medium hover:underline" onClick={() => setIsLogin(true)}>
// //                   Log in
// //                 </button>
// //               </>
// //             )}
// //           </p>

// //           <form onSubmit={handleSubmit} className="space-y-5">
// //             {!isLogin && (
// //               <div className="flex gap-4">
// //                 <input
// //                   type="text"
// //                   placeholder="First name"
// //                   value={firstName}
// //                   onChange={(e) => setFirstName(e.target.value)}
// //                   className="w-1/2 rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-purple-300 focus:outline-none"
// //                   required
// //                 />
// //                 <input
// //                   type="text"
// //                   placeholder="Last name"
// //                   value={lastName}
// //                   onChange={(e) => setLastName(e.target.value)}
// //                   className="w-1/2 rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-purple-300 focus:outline-none"
// //                   required
// //                 />
// //               </div>
// //             )}

// //             <input
// //               type="email"
// //               placeholder="Email address"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-purple-300 focus:outline-none"
// //               required
// //             />

// //             <input
// //               type="password"
// //               placeholder="Password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-purple-300 focus:outline-none"
// //               required
// //             />

// //             {!isLogin && (
// //               <div className="flex items-start text-sm mt-1">
// //                 <input
// //                   type="checkbox"
// //                   className="mt-1 mr-2 accent-purple-600 focus:ring-2 focus:ring-purple-400"
// //                   required
// //                 />
// //                 <span>
// //                   I agree to the{' '}
// //                   <a href="/Terms" className="text-purple-600 hover:underline font-medium">
// //                     Terms & Conditions
// //                   </a>
// //                 </span>
// //               </div>
// //             )}

// //             <button
// //               type="submit"
// //               className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 rounded-xl shadow-md transition"
// //             >
// //               {isLogin ? "Login" : "Create account"}
// //             </button>

// //             {success && <p className="text-green-600 text-sm text-center">{success}</p>}
// //             {error && <p className="text-red-600 text-sm text-center">{error}</p>}
// //           </form>

// //           <div className="flex items-center my-6">
// //             <hr className="flex-grow border-gray-200" />
// //             <span className="px-4 text-gray-400 text-sm">or</span>
// //             <hr className="flex-grow border-gray-200" />
// //           </div>

// //           <button
// //             type="button"
// //             onClick={() => {
// //               window.location.href = "http://localhost:5000/auth/google";
// //             }}
// //             className="w-full bg-white border border-gray-300 text-black py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition shadow-sm"
// //           >
// //             <img src="/img/google.png" alt="Google" className="w-5 h-5" />
// //             {isLogin ? "Login with Google" : "Continue with Google"}
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SignupPage;



// import React, { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const SignupPage = ({ show, onClose, initialMode = "login" }) => {
//   const popupRef = useRef();
//   const navigate = useNavigate();
//   const [mode, setMode] = useState(initialMode);

//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const [loginError, setLoginError] = useState("");
//   const [loginSuccess, setLoginSuccess] = useState("");

//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [signupEmail, setSignupEmail] = useState("");
//   const [signupPassword, setSignupPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [signupError, setSignupError] = useState({});
//   const [signupSuccess, setSignupSuccess] = useState("");

//   useEffect(() => {
//     if (show && popupRef.current) {
//       popupRef.current.style.opacity = 0;
//       setTimeout(() => {
//         if (popupRef.current) popupRef.current.style.opacity = 1;
//       }, 50);
//     }
//   }, [show, mode]);

//   useEffect(() => {
//     function handleClick(e) {
//       if (popupRef.current && !popupRef.current.contains(e.target)) onClose();
//     }
//     if (show) document.addEventListener("mousedown", handleClick);
//     return () => document.removeEventListener("mousedown", handleClick);
//   }, [show, onClose]);

//   useEffect(() => {
//     setLoginError("");
//     setLoginSuccess("");
//     setSignupError({});
//     setSignupSuccess("");
//   }, [mode, show]);

//   const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   const validateName = (name) => /^[a-zA-Z\s]+$/.test(name);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoginError("");
//     setLoginSuccess("");

//     if (!validateEmail(loginEmail)) {
//       setLoginError("Invalid email address.");
//       return;
//     }
//     if (!loginPassword.trim()) {
//       setLoginError("Password cannot be empty.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email: loginEmail, password: loginPassword })
//       });
//       const data = await response.json();
//       if (response.ok) {
//         localStorage.setItem("userEmail", loginEmail);
//         localStorage.setItem("token", data.token);
//         setLoginSuccess("Login successful!");
//         setTimeout(() => {
//           onClose();
//           navigate("/");
//           window.location.reload();
//         }, 1000);
//       } else {
//         setLoginError(data.message || "Login failed.");
//       }
//     } catch (err) {
//       setLoginError("An error occurred. Please try again later.");
//     }
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setSignupError({});
//     setSignupSuccess("");

//     let errors = {};
//     if (!validateName(firstName)) errors.firstName = "First name must contain only letters and spaces.";
//     if (!validateName(lastName)) errors.lastName = "Last name must contain only letters and spaces.";
//     if (!validateEmail(signupEmail)) errors.email = "Invalid email address.";
//     if (signupPassword.length < 6) errors.password = "Password must be at least 6 characters.";
//     if (signupPassword !== confirmPassword) errors.confirm = "Passwords do not match.";
//     if (Object.keys(errors).length) {
//       setSignupError(errors);
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           firstName,
//           lastName,
//           email: signupEmail,
//           password: signupPassword
//         })
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setSignupSuccess("Account created! Redirecting to login...");
//         setTimeout(() => setMode("login"), 1200);
//       } else {
//         setSignupError({ email: data.message || "Signup failed." });
//       }
//     } catch (err) {
//       setSignupError({ email: "Server error. Try again." });
//     }
//   };

//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs bg-opacity-30">
//       <div
//         ref={popupRef}
//         className="relative bg-white rounded-2xl shadow-xl w-full max-w-4xl h-[600px] min-h-[80vw] md:min-h-[600px] overflow-hidden flex"
//         style={{ transition: "opacity 0.3s" }}
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-black text-xl font-bold hover:text-red-600 z-10"
//         >
//           &times;
//         </button>

//         <div className="hidden md:block md:w-1/2">
//           <img
//             src={mode === "login" ? "/img/signup.jpg" : "/img/signup.jpg"}
//             alt={mode === "login" ? "login" : "signup"}
//             className="object-cover h-full w-full"
//           />
//         </div>

//         <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
//           {mode === "login" ? (
//             <>
//               <h2 className="text-3xl font-bold text-black mb-6 text-center">Welcome Back</h2>
//               <form onSubmit={handleLogin} className="space-y-4">
//                 <input
//                   type="email"
//                   placeholder="Email address"
//                   value={loginEmail}
//                   onChange={(e) => setLoginEmail(e.target.value)}
//                   className={`w-full border rounded-md p-3 text-sm ${loginError === "Invalid email address." ? "border-red-500" : "border-gray-300"}`}
//                   required
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={loginPassword}
//                   onChange={(e) => setLoginPassword(e.target.value)}
//                   className="w-full border border-gray-300 rounded-md p-3 text-sm"
//                   required
//                 />
//                 <button type="submit" className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition">Login →</button>
//               </form>
//               <div className="flex items-center my-4">
//                 <hr className="flex-grow border-gray-300" />
//                 <span className="px-2 text-sm text-gray-500">or</span>
//                 <hr className="flex-grow border-gray-300" />
//               </div>
//               <a
//                 href="http://localhost:5000/auth/google"
//                 className="w-full block bg-white text-black py-3 rounded-md border border-black flex justify-center items-center gap-2 text-sm hover:bg-gray-200 transition"
//               >
//                 <img src="/img/google.png" alt="Google" className="w-5 h-5" />
//                 Login with Google
//               </a>
//               {loginError && <p className="text-sm text-red-500 text-center mt-4">{loginError}</p>}
//               {loginSuccess && <p className="text-sm text-green-500 text-center mt-4">{loginSuccess}</p>}
//               <p className="text-sm text-gray-500 text-center mt-4">
//                 Don't have an account?{' '}
//                 <button onClick={() => setMode("signup")} className="text-blue-500 font-medium hover:underline">Sign up here</button>
//               </p>
//             </>
//           ) : (
//             <>
//               <h2 className="text-3xl font-bold text-black mb-6 text-center">Sign Up</h2>
//               <form onSubmit={handleSignup} className="space-y-4">
//                 <div className="flex gap-3 ">
//                   <div className="w-1/2">
//                     <input
//                       type="text"
//                       placeholder="First Name"
//                       value={firstName}
//                       onChange={(e) => setFirstName(e.target.value)}
//                       className={`w-full border rounded-md p-3 text-sm ${signupError.firstName ? "border-red-500" : "border-gray-300"}`}
//                       required
//                     />
//                     {signupError.firstName && (
//                       <p className="text-xs text-red-500 mt-1">{signupError.firstName}</p>
//                     )}
//                   </div>
//                   <div className="w-1/2">
//                     <input
//                       type="text"
//                       placeholder="Last Name"
//                       value={lastName}
//                       onChange={(e) => setLastName(e.target.value)}
//                       className={`w-full border rounded-md p-3 text-sm ${signupError.lastName ? "border-red-500" : "border-gray-300"}`}
//                       required
//                     />
//                     {signupError.lastName && (
//                       <p className="text-xs text-red-500 mt-1">{signupError.lastName}</p>
//                     )}
//                   </div>
//                 </div>
//                 <div>
//                   <input
//                     type="email"
//                     placeholder="Email address"
//                     value={signupEmail}
//                     onChange={(e) => setSignupEmail(e.target.value)}
//                     className={`w-full border rounded-md p-3 text-sm ${signupError.email ? "border-red-500" : "border-gray-300"}`}
//                     required
//                   />
//                   {signupError.email && <p className="text-xs text-red-500">{signupError.email}</p>}
//                 </div>
//                 <div>
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     value={signupPassword}
//                     onChange={(e) => setSignupPassword(e.target.value)}
//                     className={`w-full border border-gray-300 rounded-md p-3 text-sm ${signupError.password ? "border-red-500" : ""}`}
//                     required
//                   />
//                 </div>
//                 <input
//                   type="password"
//                   placeholder="Confirm Password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   className={`w-full border border-gray-300 rounded-md p-3 text-sm ${signupError.confirm ? "border-red-500" : ""}`}
//                   required
//                 />
//                 {signupError.confirm && <p className="text-xs text-red-500">{signupError.confirm}</p>}
//                 <button
//                   type="submit"
//                   className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800"
//                 >
//                   Join Us →
//                 </button>
//               </form>
//               {signupSuccess && <p className="text-sm text-green-500 text-center mt-4">{signupSuccess}</p>}
//               <div className="flex items-center my-4">
//                 <hr className="flex-grow border-gray-300" />
//                 <span className="px-2 text-sm text-gray-500">or</span>
//                 <hr className="flex-grow border-gray-300" />
//               </div>
//               <a
//                 href="http://localhost:5000/auth/google"
//                 className="w-full block bg-white text-black py-3 rounded-md border border-black flex justify-center items-center gap-2 text-sm hover:bg-gray-200 transition"
//               >
//                 <img src="/img/google.png" alt="Google" className="w-5 h-5" />
//                 Login with Google
//               </a>
//               <p className="text-sm text-gray-500 text-center mt-4">
//                 Already have an account?{' '}
//                 <button
//                   onClick={() => setMode("login")}
//                   className="text-blue-500 font-medium hover:underline"
//                 >
//                   Login here
//                 </button>
//               </p>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;
