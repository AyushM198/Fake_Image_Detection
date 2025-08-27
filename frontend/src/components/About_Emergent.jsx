import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TamperDetectAbout = () => {
    const heroRef = useRef(null);
    const missionRef = useRef(null);
    const statsRef = useRef(null);
    const whyChooseRef = useRef(null);
    const visionRef = useRef(null);
    const teamRef = useRef(null);

    useEffect(() => {
        // Hero section animation
        gsap.fromTo(heroRef.current.querySelector('.hero-title'), {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top 80%",
            }
        });

        gsap.fromTo(heroRef.current.querySelector('.hero-subtitle'), {
            opacity: 0,
            y: 30
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.3,
            ease: "power3.out",
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top 80%",
            }
        });

        gsap.fromTo(heroRef.current.querySelector('.hero-image'), {
            opacity: 0,
            scale: 0.8
        }, {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            delay: 0.6,
            ease: "power3.out",
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top 80%",
            }
        });

        // Mission section animation
        gsap.fromTo(missionRef.current.querySelector('.mission-title'), {
            opacity: 0,
            x: -50
        }, {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: missionRef.current,
                start: "top 70%",
            }
        });

        gsap.fromTo(missionRef.current.querySelector('.mission-content'), {
            opacity: 0,
            x: 50
        }, {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: missionRef.current,
                start: "top 70%",
            }
        });

        // Stats animation
        gsap.fromTo(statsRef.current.querySelectorAll('.stat-item'), {
            opacity: 0,
            y: 30
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: statsRef.current,
                start: "top 80%",
            }
        });

        // Why Choose Us animation
        gsap.fromTo(whyChooseRef.current.querySelector('.why-choose-title'), {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: whyChooseRef.current,
                start: "top 70%",
            }
        });

        gsap.fromTo(whyChooseRef.current.querySelector('.why-choose-content'), {
            opacity: 0,
            y: 30
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.3,
            ease: "power3.out",
            scrollTrigger: {
                trigger: whyChooseRef.current,
                start: "top 70%",
            }
        });

        // Vision section animation
        gsap.fromTo(visionRef.current.querySelector('.vision-content'), {
            opacity: 0,
            x: -50
        }, {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: visionRef.current,
                start: "top 70%",
            }
        });

        gsap.fromTo(visionRef.current.querySelector('.vision-image'), {
            opacity: 0,
            scale: 0.8
        }, {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            delay: 0.3,
            ease: "power3.out",
            scrollTrigger: {
                trigger: visionRef.current,
                start: "top 70%",
            }
        });

        // Team section animation
        gsap.fromTo(teamRef.current.querySelector('.team-title'), {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: teamRef.current,
                start: "top 70%",
            }
        });

        gsap.fromTo(teamRef.current.querySelectorAll('.team-member'), {
            opacity: 0,
            y: 30
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            delay: 0.4,
            ease: "power3.out",
            scrollTrigger: {
                trigger: teamRef.current,
                start: "top 70%",
            }
        });

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="text-2xl font-bold text-slate-900">
                                Tamper Detect
                            </div>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <a href="#" className="text-slate-700 hover:text-slate-900 transition-colors">Plan & Pricing</a>
                            <a href="#" className="text-slate-700 hover:text-slate-900 transition-colors">How it works</a>
                            <a href="#" className="text-slate-700 hover:text-slate-900 transition-colors">About Us</a>
                            <a href="#" className="text-slate-700 hover:text-slate-900 transition-colors">Use cases</a>
                            <a href="#" className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">Login</a>
                            <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Sign Up</a>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section ref={heroRef} className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="hero-title text-6xl font-bold text-slate-900 mb-4">
                            About
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="hero-subtitle text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                We build trust between technology and truth.
                            </h2>
                            <p className="hero-subtitle text-lg text-slate-600 leading-relaxed">
                                We are all in a rapidly-changing world where the authenticity of digital content is vital. Our mission is to empower individuals and organizations to safeguard their digital future.
                            </p>
                        </div>
                        <div className="hero-image">
                            <img
                                src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691"
                                alt="Team collaboration"
                                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section ref={missionRef} className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="mission-content">
                            <h2 className="mission-title text-4xl font-bold text-white mb-6 leading-tight">
                                Our Mission is the future where everyone can be safe from digital digital deception
                            </h2>
                            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                Through innovation and dedication, we are creating a foundation that protects the integrity of digital information. Our commitment is to build technologies that ensure every piece of content can be verified, trusted, and protected from manipulation.
                            </p>
                            <div className="text-lg text-slate-300 leading-relaxed">
                                Join us in our mission to make truth easier to trust.
                            </div>
                        </div>
                        <div className="mission-content">
                            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 shadow-2xl">
                                <div className="text-center text-white">
                                    <div className="text-6xl font-bold mb-4">🎯</div>
                                    <h3 className="text-2xl font-bold mb-4">Our Focus</h3>
                                    <p className="text-lg opacity-90">
                                        Building robust detection systems that identify manipulation and ensure content authenticity across all digital platforms.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section ref={statsRef} className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="stat-item text-center bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                            <div className="text-5xl font-bold text-slate-900 mb-2">95%</div>
                            <div className="text-lg text-slate-600">Accuracy</div>
                        </div>
                        <div className="stat-item text-center bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                            <div className="text-5xl font-bold text-slate-900 mb-2">10 Sec</div>
                            <div className="text-lg text-slate-600">Analysis Time</div>
                        </div>
                        <div className="stat-item text-center bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                            <div className="text-5xl font-bold text-slate-900 mb-2">Secured</div>
                            <div className="text-lg text-slate-600">100% Protected</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section ref={whyChooseRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="why-choose-title text-4xl font-bold text-slate-900 mb-8">
                        Why Choose Us
                    </h2>
                    <div className="why-choose-content">
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            Our algorithms are built to be defensible, reliable, and accurate. We deploy tamper detection on trusted and secure infrastructure. Our team combines cutting-edge technology with decades of experience to deliver solutions that truly protect your digital assets and maintain trust.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Advanced Detection</h3>
                                <p className="text-slate-700">State-of-the-art algorithms that identify even the most sophisticated tampering attempts.</p>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Secure Infrastructure</h3>
                                <p className="text-slate-700">Enterprise-grade security ensuring your data remains protected at all times.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section ref={visionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="vision-content">
                            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                                Our Vision is a future where truth is trusted in every pixel and sound
                            </h2>
                            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                We envision a digital world where authenticity is guaranteed, where every image, video, and audio file can be verified with confidence. Our technology creates a foundation of trust that enables innovation while protecting against deception.
                            </p>
                            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 border border-blue-500">
                                <h3 className="text-xl font-bold text-white mb-3">Built on Trust</h3>
                                <p className="text-blue-100">Every solution we create is designed to strengthen the bond between technology and truth, ensuring a more secure digital future for everyone.</p>
                            </div>
                        </div>
                        <div className="vision-image">
                            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-12 shadow-2xl">
                                <div className="text-center text-white">
                                    <div className="text-8xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                                        See the
                                    </div>
                                    <div className="text-6xl font-bold italic bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                                        future
                                    </div>
                                    <div className="mt-8 text-lg opacity-90">
                                        Where authenticity meets innovation
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section ref={teamRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="team-title text-4xl font-bold text-slate-900 mb-4">
                            Meet Our Team
                        </h2>
                        <p className="text-lg text-slate-600">
                            Meet the Team of Professionals Making Us Every Day Safe — One Click at a Time
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="team-member text-center bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-lg border border-slate-200">
                            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                                    alt="Member 1"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Member 1</h3>
                            <p className="text-slate-600">CEO & Founder</p>
                        </div>

                        <div className="team-member text-center bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-lg border border-slate-200">
                            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
                                    alt="Member 2"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Member 2</h3>
                            <p className="text-slate-600">CTO</p>
                        </div>

                        <div className="team-member text-center bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-lg border border-slate-200">
                            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1629425733761-caae3b5f2e50"
                                    alt="Member 3"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Member 3</h3>
                            <p className="text-slate-600">Lead Developer</p>
                        </div>

                        <div className="team-member text-center bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-lg border border-slate-200">
                            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                                <img
                                    src="https://images.pexels.com/photos/32892534/pexels-photo-32892534.jpeg"
                                    alt="Member 4"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Member 4</h3>
                            <p className="text-slate-600">Head of Security</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="text-2xl font-bold mb-4">Tamper Detect</div>
                        <p className="text-slate-400">
                            Building trust between technology and truth.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default TamperDetectAbout;