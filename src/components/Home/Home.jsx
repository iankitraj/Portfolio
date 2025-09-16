import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";

export default function Home() {
    const [repos, setRepos] = useState([]);
    const username = "iankitraj";

    useEffect(() => {
        fetch(
            `https://api.github.com/users/${username}/repos?per_page=100&sort=pushed&direction=desc`
        )
            .then((res) => res.json())
            .then((data) => {
                const filtered = data
                    .filter((repo) => !repo.fork)
                    .sort(
                        (a, b) => new Date(b.pushed_at) - new Date(a.pushed_at)
                    )
                    .slice(0, 3);
                setRepos(filtered);
            })
            .catch((err) => console.error(err));
    }, []);

    const buttonClass =
        "inline-block min-w-[220px] px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:from-orange-600 hover:to-red-700 transition-all duration-300";

    const iconClass =
        "text-2xl sm:text-3xl text-gray-800 hover:text-orange-600 transition-transform transform hover:scale-110 duration-300";

    const skills = [
        { name: "React.js", level: 90 },
        { name: "Java", level: 85 },
        { name: "Tailwind CSS", level: 80 },
        { name: "JSP/Servlets", level: 75 },
        { name: "MySQL", level: 80 },
    ];

    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <div className="font-sans text-gray-900 relative">
            {/* Particles Background */}
            <Particles
                options={{
                    background: { color: { value: "#ffffff" } },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onHover: { enable: true, mode: "repulse" },
                            resize: true,
                        },
                        modes: { repulse: { distance: 100, duration: 0.4 } },
                    },
                    particles: {
                        color: { value: "#FFA500" },
                        links: { enable: true, color: "#FFA500", distance: 120 },
                        collisions: { enable: false },
                        move: { direction: "none", enable: true, outModes: { default: "bounce" }, speed: 1 },
                        number: { density: { enable: true, area: 800 }, value: 50 },
                        opacity: { value: 0.4 },
                        shape: { type: "circle" },
                        size: { value: { min: 1, max: 4 } },
                    },
                    detectRetina: true,
                }}
                className="absolute inset-0 -z-10"
            />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-orange-50 via-white to-orange-50 py-28 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse sm:flex-row items-center gap-12">
                    <motion.div
                        className="sm:w-1/2 text-center sm:text-left space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
                            Hi, I'm <span className="text-orange-600">Ankit Raj</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-500">
                            A passionate Full-Stack Developer and Computer Engineering professional focused on creating high-quality web applications and innovative solutions.
                        </p>
                        <p className="text-gray-600">
                            Skilled in modern web technologies including React.js, Tailwind CSS, Java, JSP/Servlets, and MySQL. I build clean, responsive, and interactive applications that deliver value.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mt-5">
                            <Link to="/contact" className={buttonClass}>
                                Get Connect →
                            </Link>
                            <div className="flex gap-5 mt-4 sm:mt-0">
                                <a
                                    href={`https://github.com/${username}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={iconClass}
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/ankit-raj-20282a297/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={iconClass}
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href="mailto:iankitraj18@gmail.com"
                                    className={iconClass}
                                >
                                    <FaEnvelope />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="sm:w-1/2 flex justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="group relative w-72 sm:w-96 aspect-square rounded-full overflow-hidden shadow-xl ring-4 ring-white/60 transition-all duration-500 hover:ring-orange-400/80">
                            <img
                                src="/images/ankit-profile.jpg"
                                alt="Ankit Raj"
                                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <motion.section
                className="py-24 bg-white/90 backdrop-blur-md relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
            >
                <div className="max-w-3xl mx-auto text-center space-y-6 px-6">
                    <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
                    <p className="text-lg sm:text-xl text-gray-700">
                        I'm Ankit Raj, a technology enthusiast and Full-Stack Developer with a strong foundation in web development and software engineering principles.
                    </p>
                    <p className="text-gray-600">
                        I enjoy building projects that are not only functional but also visually appealing, scalable, and maintainable. I continuously explore modern technologies to stay ahead in the fast-evolving tech field.
                    </p>
                    <Link to="/about" className={buttonClass}>
                        Learn More About Me
                    </Link>
                </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section
                className="py-24 bg-gray-50 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
            >
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                    Skills
                </h2>
                <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {skills.map((skill) => (
                        <div key={skill.name} className="group">
                            <div className="flex justify-between mb-2">
                                <span className="text-lg font-semibold">{skill.name}</span>
                                <span className="text-sm font-medium text-gray-600">
                                    {skill.level}%
                                </span>
                            </div>
                            <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                                <motion.div
                                    className="bg-gradient-to-r from-orange-500 to-red-600 h-4 rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-10">
                    <Link to="/skills" className={buttonClass}>
                        View All Skills
                    </Link>
                </div>
            </motion.section>

            {/* Projects Section */}
            <motion.section
                className="py-24 max-w-7xl mx-auto px-6 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.2 },
                    },
                }}
            >
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                    Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {repos.length === 0 ? (
                        <p className="text-center col-span-full">Loading repositories...</p>
                    ) : (
                        repos.map((repo) => (
                            <motion.a
                                key={repo.id}
                                href={repo.html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="p-6 bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 border border-gray-200"
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                                }}
                            >
                                <h3 className="text-xl font-bold text-orange-600 mb-2">
                                    {repo.name}
                                </h3>
                                <p className="text-gray-700 mb-3 line-clamp-2">
                                    {repo.description || "No description available"}
                                </p>
                                <p className="text-sm text-gray-500">
                                    ⭐ {repo.stargazers_count} • Last Updated:{" "}
                                    {new Date(repo.pushed_at).toLocaleDateString()}
                                </p>
                            </motion.a>
                        ))
                    )}
                </div>
                <div className="text-center mt-10">
                    <Link to="/skills" className={buttonClass}>
                        See All Projects
                    </Link>
                </div>
            </motion.section>

            {/* Contact Section */}
            <motion.section
                className="py-24 bg-gradient-to-r from-orange-100 via-orange-50 to-orange-100 text-center relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
            >
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Let's Connect!</h2>
                <p className="text-gray-700 mb-4">
                    Interested in collaborating on web development projects, internships, or freelance work? Reach out!
                </p>
                <p className="text-gray-600 mb-6">
                    I am focused on delivering high-quality and scalable solutions using modern technologies.
                </p>
                <div className="flex justify-center gap-8 mb-8 text-3xl text-gray-800">
                    <a
                        href={`https://github.com/${username}`}
                        target="_blank"
                        rel="noreferrer"
                        className={iconClass}
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ankit-raj-20282a297/"
                        target="_blank"
                        rel="noreferrer"
                        className={iconClass}
                    >
                        <FaLinkedin />
                    </a>
                    <a href="mailto:iankitraj18@gmail.com" className={iconClass}>
                        <FaEnvelope />
                    </a>
                </div>
                <Link to="/contact" className={buttonClass}>
                    Contact Me
                </Link>
            </motion.section>
        </div>
    );
}
