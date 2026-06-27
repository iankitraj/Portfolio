// src/components/Skills/Skills.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Static skill list with percentages
const skill = [
    { name: "React.js", level: 80 },
    { name: "Java", level: 75 },
    { name: "JSP / Servlets", level: 70 },
    { name: "MySQL", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Git & GitHub", level: 80 },
];

export default function Skills() {
    const [repos, setRepos] = useState([]);

    // Fetch GitHub repos
    useEffect(() => {
        fetch("https://api.github.com/users/iankitraj/repos")
            .then((res) => res.json())
            .then((data) => {
                // Filter non-forks and sort by last push
                const filtered = data
                    .filter((repo) => !repo.fork)
                    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
                    .slice(0, 6); // show top 6 recent repos

                setRepos(filtered);
            })
            .catch((err) => console.error("Error fetching repos:", err));
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center py-16 px-6">
            <h2 className="text-4xl font-bold mb-10">My Skills</h2>

            {/* Skills with progress bars */}
            <div className="w-full max-w-3xl space-y-6 mb-16">
                {skill.map((skill, index) => (
                    <div key={index}>
                        <div className="flex justify-between mb-1">
                            <span className="font-semibold">{skill.name}</span>
                            <span>{skill.level}%</span>
                        </div>
                        <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                                className="h-4 bg-gradient-to-r from-blue-500 to-green-400"
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Resume Buttons */}
            <div className="flex gap-4 mb-16">
                <a
                    href="https://drive.google.com/file/d/1R_JiLzyw17ipQQKvDiKEC9UttzgKEbPQ/view?usp=sharing"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition transform hover:scale-105"
                >
                    🔽 Download Resume
                </a>

                <a
                    href="https://drive.google.com/file/d/1R_JiLzyw17ipQQKvDiKEC9UttzgKEbPQ/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition transform hover:scale-105"
                >
                    🔗 View Resume Online
                </a>
            </div>

            {/* GitHub Repos Section */}
            <h2 className="text-3xl font-bold mb-8">Recent GitHub Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
                {repos.map((repo) => (
                    <motion.div
                        key={repo.id}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-800 p-5 rounded-xl shadow-lg"
                    >
                        <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
                        <p className="text-gray-300 text-sm mb-3">
                            {repo.description || "No description available"}
                        </p>
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            🔗 View on GitHub
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
