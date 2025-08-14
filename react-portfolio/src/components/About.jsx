export default function About() {
    return (
        <section id="about-contact" className="py-10 bg-base-200">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8 justify-center">

                {/* About Section */}
                <div className="card bg-base-100 shadow-sm w-full lg:w-1/2">
                    <div className="card-body">
                        <h2 className="card-title text-primary">About Me</h2>
                        <p>
                            I'm a passionate software developer who enjoys building modern, functional,
                            and beautiful applications using React, Tailwind CSS, and other cutting-edge technologies.
                            I love solving problems, learning new tools, and collaborating on impactful projects.
                        </p>
                        <div className="card-actions justify-end">
                            <a href="#projects" className="btn btn-primary">
                                View My Projects
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="card bg-base-100 shadow-sm w-full lg:w-1/2">
                    <div className="card-body">
                        <h2 className="card-title text-primary">Contact Me</h2>
                        <p>For collaborations, freelance projects, or just to say hello, feel free to reach out.</p>
                        <div className="flex flex-col gap-3 mt-4">

                            {/* Email */}
                            <a href="mailto:your.email@example.com" className="flex items-center gap-3 hover:text-primary">
                                <i className="fas fa-envelope text-lg"></i>
                                your.email@example.com
                            </a>

                            {/* GitHub */}
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary">
                                <i className="fab fa-github text-lg"></i>
                                github.com/yourusername
                            </a>

                            {/* LinkedIn */}
                            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary">
                                <i className="fab fa-linkedin text-lg"></i>
                                linkedin.com/in/yourprofile
                            </a>

                            {/* WhatsApp */}
                            <a href="https://wa.me/254712345678" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary">
                                <i className="fab fa-whatsapp text-lg"></i>
                                +254 712 345 678
                            </a>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}