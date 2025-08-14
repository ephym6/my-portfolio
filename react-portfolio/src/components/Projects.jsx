import { useState } from "react";
import { projects } from "../data/projects.js";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
    const [activeTech, setActiveTech] = useState(null); // stores index for clicked tech icon

    const handleTechClick = (projectIndex, techIndex) => {
        const id = `${projectIndex}-${techIndex}`;
        setActiveTech(activeTech === id ? null : id); // toggle if same icon clicked again
    };

    return (
        <section id="projects" className="py-12 bg-lightBlue">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-navy mb-8 text-center">
                    My Projects
                </h2>

                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, projectIndex) => (
                        <div
                            key={projectIndex}
                            className="card bg-base-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Image */}
                            <figure>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-48"
                                />
                            </figure>

                            {/* Card body */}
                            <div className="card-body">
                                <h2 className="card-title text-cyan">{project.title}</h2>
                                <p className="text-gray-600">{project.description}</p>

                                {/* Tech icons */}
                                <div className="flex flex-wrap gap-3 mt-3">
                                    {Array.isArray(project.tech) &&
                                        project.tech.map((t, techIndex) => {
                                            // For entries with only a string, skip icon tooltip
                                            if (typeof t === "string") {
                                                return (
                                                    <span
                                                        key={techIndex}
                                                        className="bg-blue text-paleBlue px-2 py-1 rounded text-xs"
                                                    >
                            {t}
                          </span>
                                                );
                                            }
                                            const Icon = t.icon;
                                            const id = `${projectIndex}-${techIndex}`;
                                            const isActive = activeTech === id;

                                            return (
                                                <div key={techIndex}
                                                     className="relative group"
                                                        onClick={() => handleTechClick(projectIndex, techIndex)}
                                                >
                                                    {Icon && (
                                                        <Icon className="w-6 h-6 text-cyan cursor-pointer hover:text-blue transition-colors duration-200" />
                                                    )}
                                                    {/* Tooltip */}
                                                    <span
                                                        className={`absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-navy text-paleBlue text-xs rounded py-1 px-2 whitespace-nowrap z-10 transition-opacity duration-200 
                                                        ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100" }`}>
                            {t.name}
                                                        {t.libraries &&
                                                            ` (${t.libraries.join(", ")})`}
                          </span>
                                                </div>
                                            );
                                        })}
                                </div>

                                {/* Buttons */}
                                <div className="card-actions justify-between items-center mt-4">
                                    {project.link && project.link !== "N/A" && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn bg-blue text-paleBlue hover:bg-cyan"
                                        >
                                            View Project
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-navy hover:text-cyan text-2xl"
                                        >
                                            <FaGithub />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}