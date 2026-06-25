import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Particles from "react-tsparticles";

export default function About() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [floatDuration, setFloatDuration] = useState(20);

    // Adjust floating duration based on screen width
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) setFloatDuration(25); // mobile slower
            else if (width < 1024) setFloatDuration(20); // tablet normal
            else setFloatDuration(15); // large faster
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (inView) controls.start({ opacity: 1, y: 0 });
    }, [controls, inView]);

    return (
        <section className="relative py-24 flex items-center justify-center overflow-hidden" ref={ref}>

            {/* Smooth Floating & Zoom Background */}
            <motion.div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: 'url("/images/ankit-profile.jpg")' }}
                animate={{
                    scale: window.innerWidth < 640
                        ? [1, 1.03, 1]        // mobile
                        : window.innerWidth < 1024
                            ? [1, 1.05, 1]        // tablet
                            : [1, 1.08, 1],       // large
                    y: ["0px", "-20px", "0px"] // smooth vertical float
                }}
                transition={{
                    duration: floatDuration,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Particle Effect */}
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <Particles
                    className="absolute inset-0"
                    options={{
                        particles: {
                            number: { value: 40, density: { enable: true, value_area: 800 } },
                            color: { value: "#FFA500" },
                            shape: { type: "circle" },
                            opacity: { value: 0.3, random: true },
                            size: { value: 3, random: true },
                            move: { enable: true, speed: 0.8, direction: "top", out_mode: "out" }
                        },
                        interactivity: { detect_on: "canvas", events: { onhover: { enable: false } } },
                        retina_detect: true
                    }}
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center gap-12 text-white">
                <div className="md:w-5/12 hidden md:block"></div>

                <motion.div className="md:w-7/12 space-y-6 text-center md:text-left">
                    <motion.h2
                        className="text-4xl font-extrabold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        About <span className="text-orange-400">Me</span>
                    </motion.h2>

                    <motion.p
                        className="text-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        I’m <span className="font-semibold text-orange-400">Ankit Raj</span>, a
                        Computer Engineering student and Full-Stack Developer with expertise in
                        <span className="font-medium text-orange-400"> React.js, Node.js, JSP/Servlets, Tailwind CSS, and MySQL</span>.
                        I focus on building modern, responsive, and efficient web applications.
                    </motion.p>

                    <motion.ul
                        className="text-lg leading-relaxed list-disc pl-5 space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <li>Strong foundation in problem-solving and software design.</li>
                        <li>Experienced in building dynamic web apps with clean, maintainable code.</li>
                        <li>Passionate about open-source contributions and continuous learning.</li>
                        <li>Focus on creating impactful and user-friendly digital experiences.</li>
                        <li>Adept at integrating modern tools & technologies for scalable solutions.</li>
                    </motion.ul>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-5 mt-6 justify-center md:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.a
                            href="https://drive.google.com/file/d/1v9g6w23BHyumaY1EiYEyf32ef-MY-CYm/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg shadow-md"
                            whileHover={{ scale: 1.05 }}
                            animate={{
                                boxShadow: [
                                    "0 0 10px rgba(255,165,0,0.5)",
                                    "0 0 25px rgba(255,165,0,0.8)",
                                    "0 0 10px rgba(255,165,0,0.5)"
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            View Resume
                        </motion.a>

                        <Link
                            to="/contact"
                            className="px-6 py-3 border border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-50 hover:scale-105 transition-all duration-300"
                        >
                            Contact Me
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
