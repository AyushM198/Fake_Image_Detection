// // GOOGLE AUTH
// import React, { useEffect, useRef, useState } from "react";
// import { FaFileImage, FaFileAlt, FaBrain, FaRocket, FaShieldAlt } from "react-icons/fa";
// import { useNavigate, useOutletContext, useLocation } from "react-router-dom";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import AuthPopup from "./AuthFloat"; // ✅ Ensure path is correct

// gsap.registerPlugin(ScrollTrigger);

// const LandingPage = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const fileInputRef = useRef();
//     const documentInputRef = useRef();
//     const { heroRef } = useOutletContext();
//     const featuresHeadingRef = useRef(null);

//     const [modelResult, setModelResult] = useState(null);
//     const [showAuthPopup, setShowAuthPopup] = useState(false);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     // ✅ On first load: extract token from URL if present and store it
//     useEffect(() => {
//         const query = new URLSearchParams(location.search);
//         const tokenFromURL = query.get("token");
//         if (tokenFromURL) {
//             localStorage.setItem("token", tokenFromURL);
//             setIsLoggedIn(true);
//             // Optionally clear token from URL after saving
//             window.history.replaceState({}, document.title, window.location.pathname);
//         } else {
//             const existingToken = localStorage.getItem("token");
//             setIsLoggedIn(!!existingToken);
//         }
//     }, [location.search]);

//     // 🔄 Animate feature section on scroll
//     useEffect(() => {
//         gsap.fromTo(
//             featuresHeadingRef.current,
//             { opacity: 0, y: 100 },
//             {
//                 opacity: 1,
//                 y: 0,
//                 duration: 1.2,
//                 ease: "power3.out",
//                 scrollTrigger: {
//                     trigger: featuresHeadingRef.current,
//                     start: "top 80%",
//                     end: "bottom 20%",
//                     toggleActions: "play reverse play reverse",
//                 },
//             }
//         );
//     }, []);

//     const handleProtectedAction = (callback) => {
//         if (!isLoggedIn) {
//             setShowAuthPopup(true);
//         } else {
//             callback();
//         }
//     };

//     const handleImageUpload = async (event) => {
//         const file = event.target.files[0];
//         if (!file) return;

//         const formData = new FormData();
//         formData.append("file", file);

//         try {
//             const response = await fetch("http://127.0.0.1:5000/upload", {
//                 method: "POST",
//                 body: formData,
//             });

//             const data = await response.json();
//             localStorage.setItem("modelResult", JSON.stringify(data));
//             navigate("/Result", { state: { modelResult: data } });
//         } catch (err) {
//             console.error("Upload failed", err);
//         }
//     };

//     const handleDocumentUpload = async (event) => {
//         const file = event.target.files[0];
//         if (!file) return;

//         const formData = new FormData();
//         formData.append("file", file);

//         try {
//             const response = await fetch("http://localhost:5000/upload", {
//                 method: "POST",
//                 body: formData,
//             });

//             const data = await response.json();
//             setModelResult(data);
//         } catch (error) {
//             console.error("Document upload failed", error);
//         }
//     };

//     return (
//         <div className="bg-black max-h-full mt-0">
//             {/* Hero Section */}
//             <section ref={heroRef} className="relative h-[100vh] w-full overflow-hidden bg-black">
//                 <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/img/image 1.png')" }}></div>
//                 <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

//                 <div className="relative w-full h-screen overflow-hidden text-[#f7d9fc]">
//                     {/* Title and Description */}
//                     <div className="absolute top-77 left-1/2 transform -translate-x-1/2 text-center px-4 z-10">
//                         <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg mb-4">
//                             Detect And Protect
//                         </h1>
//                         <p className="text-lg md:text-2xl text-gray-300 drop-shadow-md max-w-3xl mx-auto">
//                             A powerful AI-based system for verifying the authenticity of images and documents in real-time.
//                         </p>
//                     </div>

//                     {/* Upload Buttons */}
//                     <div className="absolute bottom-48 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-6 z-10">
//                         <button
//                             onClick={() => handleProtectedAction(() => fileInputRef.current.click())}
//                             className="group flex items-center gap-3 text-lg bg-[#0B0B0B] text-white px-8 py-4 rounded-xl shadow-xl border border-white hover:scale-110 transition-all bg-gradient-to-r hover:from-purple-600 hover:to-black hover:border-black"
//                         >
//                             <FaFileImage className="text-2xl group-hover:text-black group-hover:scale-110 text-purple-600" />
//                             Upload Image
//                         </button>
//                         <input
//                             type="file"
//                             accept="image/*"
//                             style={{ display: "none" }}
//                             ref={fileInputRef}
//                             onChange={handleImageUpload}
//                         />

//                         <button
//                             onClick={() => handleProtectedAction(() => documentInputRef.current.click())}
//                             className="group flex items-center gap-3 text-lg bg-[#0B0B0B] text-white px-8 py-4 rounded-xl shadow-xl border border-white hover:scale-110 transition-all bg-gradient-to-r hover:from-blue-700 hover:to-black hover:border-black"
//                         >
//                             <FaFileAlt className="text-2xl group-hover:text-black group-hover:scale-110 text-blue-500" />
//                             Upload Document
//                         </button>
//                         <input
//                             type="file"
//                             accept=".pdf,.doc,.docx,.txt"
//                             style={{ display: "none" }}
//                             ref={documentInputRef}
//                             onChange={handleDocumentUpload}
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* Features Section */}
//             <section id="features" className="py-16 bg-black text-white pb-30">
//                 <div className="max-w-6xl mx-auto px-1">
//                     <h2
//                         ref={featuresHeadingRef}
//                         className="text-6xl font-bold text-center mt-10 mb-40 text-transparent bg-gradient-to-b from-purple-400 to-purple-800 bg-clip-text drop-shadow-[0_5px_5px_rgba(0,0,0,0.6)]"
//                     >
//                         Key Features
//                     </h2>

//                     <div className="grid md:grid-cols-3 gap-10">
//                         {/* Feature Cards */}
//                         <div className="group w-full h-80 p-6 bg-gray-900 rounded-lg shadow-lg hover:scale-105 hover:bg-gray-700 hover:shadow-2xl hover:shadow-purple-400">
//                             <div className="flex items-center gap-4 mb-14">
//                                 <FaBrain className="text-purple-400 text-5xl group-hover:text-black" />
//                                 <h3 className="text-3xl font-semibold">AI-Powered Detection</h3>
//                             </div>
//                             <p className="text-gray-300 text-xl">
//                                 Our advanced AI models analyze images and documents, detecting even the most sophisticated forgeries and manipulations.
//                             </p>
//                         </div>

//                         <div className="group p-6 bg-gray-900 rounded-lg shadow-lg hover:scale-105 hover:bg-gray-700 hover:shadow-2xl hover:shadow-blue-400">
//                             <div className="flex items-center gap-4 mb-14">
//                                 <FaRocket className="text-blue-400 text-5xl group-hover:text-black" />
//                                 <h3 className="text-3xl font-semibold">Real-Time Processing</h3>
//                             </div>
//                             <p className="text-gray-300 text-xl">
//                                 Get instant verification results, allowing you to quickly determine the authenticity of your files without long waits.
//                             </p>
//                         </div>

//                         <div className="group p-6 bg-gray-900 rounded-lg shadow-lg hover:scale-105 hover:bg-gray-700 hover:shadow-2xl hover:shadow-green-400">
//                             <div className="flex items-center gap-4 mb-14">
//                                 <FaShieldAlt className="text-green-400 text-4xl group-hover:text-black" />
//                                 <h3 className="text-3xl font-semibold ml-16">Secure &<br />Reliable</h3>
//                             </div>
//                             <p className="text-gray-300 text-xl">
//                                 Your privacy matters. Our encryption ensures your data remains protected while undergoing verification.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Auth Popup */}
//             {!isLoggedIn && (
//                 <AuthPopup show={showAuthPopup} onClose={() => setShowAuthPopup(false)} />
//             )}
//         </div>
//     );
// };

// export default LandingPage;








//pop

// import React, { useEffect, useRef, useState } from "react";
// import {
//     FaFileImage,
//     FaFileAlt,
//     FaBrain,
//     FaRocket,
//     FaShieldAlt,
// } from "react-icons/fa";
// import { useNavigate, useOutletContext, useLocation } from "react-router-dom";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import AuthPopup from "./AuthFloat";

// gsap.registerPlugin(ScrollTrigger);

// const LandingPage = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const fileInputRef = useRef();
//     const documentInputRef = useRef();
//     const { heroRef } = useOutletContext();
//     const featuresHeadingRef = useRef(null);

//     const [modelResult, setModelResult] = useState(null);
//     const [showAuthPopup, setShowAuthPopup] = useState(false);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     const [userStatus, setUserStatus] = useState({
//         hasSubscription: false,
//         usedImageTrial: false,
//         usedDocTrial: false,
//     });

//     useEffect(() => {
//         const query = new URLSearchParams(location.search);
//         const tokenFromURL = query.get("token");
//         if (tokenFromURL) {
//             localStorage.setItem("token", tokenFromURL);
//             setIsLoggedIn(true);
//             window.history.replaceState({}, document.title, window.location.pathname);
//         } else {
//             const existingToken = localStorage.getItem("token");
//             setIsLoggedIn(!!existingToken);
//         }
//     }, [location.search]);

//     useEffect(() => {
//         gsap.fromTo(
//             featuresHeadingRef.current,
//             { opacity: 0, y: 100 },
//             {
//                 opacity: 1,
//                 y: 0,
//                 duration: 1.2,
//                 ease: "power3.out",
//                 scrollTrigger: {
//                     trigger: featuresHeadingRef.current,
//                     start: "top 80%",
//                     end: "bottom 20%",
//                     toggleActions: "play reverse play reverse",
//                 },
//             }
//         );
//     }, []);

//     useEffect(() => {
//         const token = localStorage.getItem("token");
//         if (token) {
//             fetch("http://localhost:5000/api/user/status", {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             })
//                 .then((res) => res.json())
//                 .then((data) => setUserStatus(data))
//                 .catch((err) => console.error("User status fetch failed", err));
//         }
//     }, [isLoggedIn]);

//     const handleProtectedAction = (type) => {
//         if (!isLoggedIn) {
//             setShowAuthPopup(true);
//             return;
//         }

//         const { hasSubscription, usedImageTrial, usedDocTrial } = userStatus;

//         if (hasSubscription) {
//             triggerUpload(type);
//         } else {
//             if (type === "image" && !usedImageTrial) {
//                 triggerUpload(type);
//                 updateTrialUsage("image");
//             } else if (type === "document" && !usedDocTrial) {
//                 triggerUpload(type);
//                 updateTrialUsage("document");
//             } else {
//                 alert("Free trial ended. Please purchase a subscription.");
//             }
//         }
//     };

//     const triggerUpload = (type) => {
//         if (type === "image") fileInputRef.current.click();
//         else if (type === "document") documentInputRef.current.click();
//     };

//     const updateTrialUsage = (type) => {
//         const token = localStorage.getItem("token");
//         fetch("http://localhost:5000/api/user/use-trial", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}`,
//             },
//             body: JSON.stringify({ type }),
//         })
//             .then((res) => res.json())
//             .then((data) => setUserStatus(data))
//             .catch((err) => console.error("Trial update failed", err));
//     };

//     const handleImageUpload = async (event) => {
//         const file = event.target.files[0];
//         if (!file) return;

//         const formData = new FormData();
//         formData.append("file", file);

//         try {
//             const response = await fetch("http://127.0.0.1:5000/upload", {
//                 method: "POST",
//                 body: formData,
//             });

//             const data = await response.json();
//             localStorage.setItem("modelResult", JSON.stringify(data));
//             navigate("/Result", { state: { modelResult: data } });
//         } catch (err) {
//             console.error("Upload failed", err);
//         }
//     };

//     const handleDocumentUpload = async (event) => {
//         const file = event.target.files[0];
//         if (!file) return;

//         const formData = new FormData();
//         formData.append("file", file);

//         try {
//             const response = await fetch("http://localhost:5000/upload", {
//                 method: "POST",
//                 body: formData,
//             });

//             const data = await response.json();
//             setModelResult(data);
//         } catch (error) {
//             console.error("Document upload failed", error);
//         }
//     };

//     return (
//         <div className="bg-black max-h-full mt-0">
//             {/* Hero Section */}
//             <section
//                 ref={heroRef}
//                 className="relative h-[100vh] w-full overflow-hidden bg-black"
//             >
//                 <div
//                     className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
//                     style={{ backgroundImage: "url('/img/image 1.png')" }}
//                 ></div>
//                 <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

//                 <div className="relative w-full h-screen overflow-hidden text-[#f7d9fc]">
//                     <div className="absolute top-77 left-1/2 transform -translate-x-1/2 text-center px-4 z-10">
//                         <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg mb-4">
//                             Detect And Protect
//                         </h1>
//                         <p className="text-lg md:text-2xl text-gray-300 drop-shadow-md max-w-3xl mx-auto">
//                             A powerful AI-based system for verifying the authenticity of images and documents in real-time.
//                         </p>
//                     </div>

//                     {/* Upload Buttons */}
//                     <div className="absolute bottom-48 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-6 z-10">
//                         <button
//                             onClick={() => handleProtectedAction("image")}
//                             className="group flex items-center gap-3 text-lg bg-[#0B0B0B] text-white px-8 py-4 rounded-xl shadow-xl border border-white hover:scale-110 transition-all bg-gradient-to-r hover:from-purple-600 hover:to-black hover:border-black"
//                         >
//                             <FaFileImage className="text-2xl group-hover:text-black group-hover:scale-110 text-purple-600" />
//                             Upload Image
//                         </button>
//                         <input
//                             type="file"
//                             accept="image/*"
//                             style={{ display: "none" }}
//                             ref={fileInputRef}
//                             onChange={handleImageUpload}
//                         />

//                         <button
//                             onClick={() => handleProtectedAction("document")}
//                             className="group flex items-center gap-3 text-lg bg-[#0B0B0B] text-white px-8 py-4 rounded-xl shadow-xl border border-white hover:scale-110 transition-all bg-gradient-to-r hover:from-blue-700 hover:to-black hover:border-black"
//                         >
//                             <FaFileAlt className="text-2xl group-hover:text-black group-hover:scale-110 text-blue-500" />
//                             Upload Document
//                         </button>
//                         <input
//                             type="file"
//                             accept=".pdf,.doc,.docx,.txt"
//                             style={{ display: "none" }}
//                             ref={documentInputRef}
//                             onChange={handleDocumentUpload}
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* Features Section */}
//             <section id="features" className="py-16 bg-black text-white pb-30">
//                 <div className="max-w-6xl mx-auto px-1">
//                     <h2
//                         ref={featuresHeadingRef}
//                         className="text-6xl font-bold text-center mt-10 mb-40 text-transparent bg-gradient-to-b from-purple-400 to-purple-800 bg-clip-text drop-shadow-[0_5px_5px_rgba(0,0,0,0.6)]"
//                     >
//                         Key Features
//                     </h2>

//                     <div className="grid md:grid-cols-3 gap-10">
//                         <div className="group w-full h-80 p-6 bg-gray-900 rounded-lg shadow-lg hover:scale-105 hover:bg-gray-700 hover:shadow-2xl hover:shadow-purple-400">
//                             <div className="flex items-center gap-4 mb-14">
//                                 <FaBrain className="text-purple-400 text-5xl group-hover:text-black" />
//                                 <h3 className="text-3xl font-semibold">AI-Powered Detection</h3>
//                             </div>
//                             <p className="text-gray-300 text-xl">
//                                 Our advanced AI models analyze images and documents, detecting even the most sophisticated forgeries and manipulations.
//                             </p>
//                         </div>

//                         <div className="group p-6 bg-gray-900 rounded-lg shadow-lg hover:scale-105 hover:bg-gray-700 hover:shadow-2xl hover:shadow-blue-400">
//                             <div className="flex items-center gap-4 mb-14">
//                                 <FaRocket className="text-blue-400 text-5xl group-hover:text-black" />
//                                 <h3 className="text-3xl font-semibold">Real-Time Processing</h3>
//                             </div>
//                             <p className="text-gray-300 text-xl">
//                                 Get instant verification results, allowing you to quickly determine the authenticity of your files without long waits.
//                             </p>
//                         </div>

//                         <div className="group p-6 bg-gray-900 rounded-lg shadow-lg hover:scale-105 hover:bg-gray-700 hover:shadow-2xl hover:shadow-green-400">
//                             <div className="flex items-center gap-4 mb-14">
//                                 <FaShieldAlt className="text-green-400 text-4xl group-hover:text-black" />
//                                 <h3 className="text-3xl font-semibold ml-16">
//                                     Secure &<br />
//                                     Reliable
//                                 </h3>
//                             </div>
//                             <p className="text-gray-300 text-xl">
//                                 Your privacy matters. Our encryption ensures your data remains protected while undergoing verification.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {!isLoggedIn && (
//                 <AuthPopup show={showAuthPopup} onClose={() => setShowAuthPopup(false)} />
//             )}
//         </div>
//     );
// };

// export default LandingPage;









//newpopimport React, { useEffect, useRef, useState } from "react";
import {
    FaFileImage,
    FaFileAlt,
    FaBrain,
    FaRocket,
    FaShieldAlt,
} from "react-icons/fa";
import { useNavigate, useOutletContext, useLocation } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AuthPopup from "./AuthFloat";
import TrialPopup from "./TrialPopup";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const fileInputRef = useRef();
    const documentInputRef = useRef();
    const { heroRef } = useOutletContext();
    const featuresHeadingRef = useRef(null);

    const [modelResult, setModelResult] = useState(null);
    const [showAuthPopup, setShowAuthPopup] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showTrialPopup, setShowTrialPopup] = useState(false);

    const [userStatus, setUserStatus] = useState({
        hasSubscription: false,
        usedImageTrial: false,
        usedDocTrial: false,
    });

    // ✅ Helper: Check token expiry
    const isTokenExpired = (token) => {
        try {
            const { exp } = JSON.parse(atob(token.split(".")[1]));
            if (Date.now() >= exp * 1000) {
                return true;
            }
            return false;
        } catch {
            return true; // invalid token
        }
    };

    // ✅ Handle token from URL or localStorage
    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const tokenFromURL = query.get("token");

        if (tokenFromURL) {
            if (isTokenExpired(tokenFromURL)) {
                localStorage.removeItem("token");
                setIsLoggedIn(false);
            } else {
                localStorage.setItem("token", tokenFromURL);
                setIsLoggedIn(true);
            }
            window.history.replaceState({}, document.title, window.location.pathname);
        } else {
            const existingToken = localStorage.getItem("token");
            if (existingToken && !isTokenExpired(existingToken)) {
                setIsLoggedIn(true);
            } else {
                localStorage.removeItem("token");
                setIsLoggedIn(false);
            }
        }
    }, [location.search]);

    // ✅ Animate Features heading
    useEffect(() => {
        gsap.fromTo(
            featuresHeadingRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: featuresHeadingRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                },
            }
        );
    }, []);

    // ✅ Fetch user status if logged in
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token && !isTokenExpired(token)) {
            fetch("http://localhost:5000/api/user/status", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((data) => setUserStatus(data))
                .catch((err) => console.error("User status fetch failed", err));
        }
    }, [isLoggedIn]);

    // ✅ Protected actions check
    const handleProtectedAction = (type) => {
        if (!isLoggedIn) {
            setShowAuthPopup(true);
            return;
        }

        const { hasSubscription, usedImageTrial, usedDocTrial } = userStatus;

        if (hasSubscription) {
            triggerUpload(type);
        } else {
            if (type === "image" && !usedImageTrial) {
                triggerUpload(type);
                updateTrialUsage("image");
            } else if (type === "document" && !usedDocTrial) {
                triggerUpload(type);
                updateTrialUsage("document");
            } else {
                setShowTrialPopup(true);
            }
        }
    };

    const triggerUpload = (type) => {
        if (type === "image") fileInputRef.current.click();
        else if (type === "document") documentInputRef.current.click();
    };

    const updateTrialUsage = (type) => {
        const token = localStorage.getItem("token");
        if (!token || isTokenExpired(token)) {
            setIsLoggedIn(false);
            localStorage.removeItem("token");
            return;
        }

        fetch("http://localhost:5000/api/user/use-trial", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ type }),
        })
            .then((res) => res.json())
            .then((data) => setUserStatus(data))
            .catch((err) => console.error("Trial update failed", err));
    };

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch("http://127.0.0.1:5000/upload", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            localStorage.setItem("modelResult", JSON.stringify(data));
            navigate("/Result", { state: { modelResult: data } });
        } catch (err) {
            console.error("Upload failed", err);
        }
    };

    const handleDocumentUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch("http://localhost:5000/upload", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            setModelResult(data);
        } catch (error) {
            console.error("Document upload failed", error);
        }
    };

    return (
        <div className="bg-black max-h-full mt-0">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative h-[100vh] w-full overflow-hidden bg-black"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                    style={{ backgroundImage: "url('/img/image 1.png')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

                <div className="relative w-full h-screen overflow-hidden text-[#f9e3fc]">
                    <div className="absolute top-5/12 left-1/2 transform -translate-x-1/2 text-center px-4 z-10">
                        <h1 className="text-4xl md:text-6xl font-bold font-extralight leading-tight drop-shadow-lg mb-4">
                            Detect And Protect
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 drop-shadow-md max-w-3xl mx-auto">
                            A powerful AI-based system for verifying the authenticity of images and documents in real-time.
                        </p>
                    </div>

                    {/* Upload Buttons */}
                    <div className="absolute bottom-48 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-6 z-10">
                        <button
                            onClick={() => handleProtectedAction("image")}
                            className="group flex items-center gap-3 text-lg bg-gradient-to-r from-purple-600 w-68 via-purple-600 to-purple-400 text-white px-8 py-4 rounded-full shadow-xl hover:scale-110 transition-all font-light"
                        >
                            <FaFileImage className="text-2xl group-hover:text-black group-hover:scale-110 text-purple-300" />
                            Upload Image
                        </button>
                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}
                            ref={fileInputRef}
                            onChange={handleImageUpload}
                        />

                        <button
                            onClick={() => handleProtectedAction("document")}
                            className="group flex items-center gap-3 text-lg bg-gradient-to-r from-blue-700 via-blue-700 to-blue-400 w-68 text-white px-8 py-4 rounded-full shadow-xl hover:scale-110 transition-all font-light"
                        >
                            <FaFileAlt className="text-2xl group-hover:text-black group-hover:scale-110 text-blue-300" />
                            Upload Document
                        </button>
                        <input
                            type="file"
                            accept=".pdf,.doc,.docx,.txt"
                            style={{ display: "none" }}
                            ref={documentInputRef}
                            onChange={handleDocumentUpload}
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-16 bg-black text-white pb-30">
                <div className="max-w-6xl mx-auto px-1">
                    <h2
                        ref={featuresHeadingRef}
                        className="text-6xl font-bold text-center mt-10 mb-40 text-transparent bg-gradient-to-b from-purple-400 to-purple-800 bg-clip-text drop-shadow-[0_5px_5px_rgba(0,0,0,0.6)]"
                    >
                        Key Features
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="group w-full h-80 p-6 bg-gray-900 rounded-lg shadow-lg hover:scale-105 hover:bg-gray-700 hover:shadow-2xl hover:shadow-purple-400">
                            <div className="flex items-center gap-4 mb-14">
                                <FaBrain className="text-purple-400 text-5xl group-hover:text-black" />
                                <h3 className="text-3xl font-semibold">AI-Powered Detection</h3>
                            </div>
                            <p className="text-gray-300 text-xl">
                                Our advanced AI models analyze images and documents, detecting even the most sophisticated forgeries and manipulations.
                            </p>
                        </div>

                        <div className="group p-6 bg-gray-900 rounded-lg shadow-lg hover:scale-105 hover:bg-gray-700 hover:shadow-2xl hover:shadow-blue-400">
                            <div className="flex items-center gap-4 mb-14">
                                <FaRocket className="text-blue-400 text-5xl group-hover:text-black" />
                                <h3 className="text-3xl font-semibold">Real-Time Processing</h3>
                            </div>
                            <p className="text-gray-300 text-xl">
                                Get instant verification results, allowing you to quickly determine the authenticity of your files without long waits.
                            </p>
                        </div>

                        <div className="group p-6 bg-gray-900 rounded-lg shadow-lg hover:scale-105 hover:bg-gray-700 hover:shadow-2xl hover:shadow-green-400">
                            <div className="flex items-center gap-4 mb-14">
                                <FaShieldAlt className="text-green-400 text-4xl group-hover:text-black" />
                                <h3 className="text-3xl font-semibold ml-16">
                                    Secure &<br />
                                    Reliable
                                </h3>
                            </div>
                            <p className="text-gray-300 text-xl">
                                Your privacy matters. Our encryption ensures your data remains protected while undergoing verification.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {!isLoggedIn && (
                <AuthPopup show={showAuthPopup} onClose={() => setShowAuthPopup(false)} />
            )}

            <TrialPopup show={showTrialPopup} onClose={() => setShowTrialPopup(false)} />
        </div>
    );
};

export default LandingPage;
