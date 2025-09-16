import React, { useState } from "react";
import Particles from "react-tsparticles";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        tel: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // ✅ Send mail to Admin (set admin email directly here)
            await emailjs.send(
                "service_2diacr2",
                "template_h7f6ivi",
                {
                    name: formData.name,
                    email: formData.email,
                    tel: formData.tel,
                    message: formData.message,
                    to_email: "iankitraj18@gmail.com", // ✅ Force admin email only here
                },
                "7RPrABzQ8lHe6l2Os"
            );

            // ✅ Send Auto Reply to USER
            await emailjs.send(
                "service_2diacr2",
                "template_w2bqznw",
                {
                    to_name: formData.name,
                    to_email: formData.email, // ✅ Goes only to user
                    message: formData.message,
                },
                "7RPrABzQ8lHe6l2Os"
            );

            toast.success("Message sent successfully!");
            setFormData({ name: "", email: "", tel: "", message: "" });
        } catch (error) {
            toast.error("❌ Failed to send, try again later.");
            console.error(error);
        }
    };


    return (
        <section className="relative bg-white min-h-screen flex items-center justify-center py-24 overflow-hidden">
            {/* Particle Background */}
            <Particles
                className="absolute inset-0 z-0"
                options={{
                    particles: {
                        number: { value: 40, density: { enable: true, value_area: 800 } },
                        color: { value: "#FFA500" },
                        shape: { type: "circle" },
                        opacity: { value: 0.3, random: true },
                        size: { value: 3, random: true },
                        move: { enable: true, speed: 0.8, direction: "top", out_mode: "out" },
                    },
                    interactivity: { detect_on: "canvas", events: { onhover: { enable: false } } },
                    retina_detect: true,
                }}
            />

            <div className="relative max-w-6xl w-full mx-auto px-6 lg:px-8 z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

                    {/* Contact Info */}
                    <div className="p-8 bg-gray-50 rounded-xl shadow-lg">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight">
                            Get in Touch
                        </h2>
                        <p className="mt-2 text-gray-600 text-lg sm:text-xl font-medium">
                            Fill in the form to start a conversation
                        </p>
                        <div className="mt-8 space-y-4 text-gray-600">
                            <p>📍 Muzaffarpur, Bihar – 843119, India</p>
                            <a href="tel:+919608527940" className="block hover:text-orange-500">
                                📞 +91 9608527940
                            </a>
                            <a href="mailto:iankitraj18@gmail.com" className="block hover:text-orange-500">
                                📧 iankitraj18@gmail.com
                            </a>
                            <a href="https://wa.me/919608527940" target="_blank" rel="noopener noreferrer" className="block hover:text-green-500">
                                💬 Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="p-8 bg-white rounded-xl shadow-lg flex flex-col gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full py-3 px-4 rounded-lg border border-gray-300"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full py-3 px-4 rounded-lg border border-gray-300"
                        />
                        <input
                            type="tel"
                            name="tel"
                            placeholder="Telephone Number"
                            required
                            value={formData.tel}
                            onChange={handleChange}
                            className="w-full py-3 px-4 rounded-lg border border-gray-300"
                        />
                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Your Message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full py-3 px-4 rounded-lg border border-gray-300"
                        />
                        <button type="submit" className="w-full md:w-32 mt-4 bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg transition">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        </section>
    );
}
