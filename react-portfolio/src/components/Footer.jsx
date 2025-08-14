export default function Footer() {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-6 items-center justify-between">
            {/* Brand */}
            <aside className="flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-primary"
                >
                    <text x="2" y="20" fontSize="20" fontFamily="monospace">{'<'}</text>
                </svg>
                <p>Ephy's Portfolio © {new Date().getFullYear()}</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-primary"
                >
                    <text x="2" y="20" fontSize="20" fontFamily="monospace">{'>'}</text>
                </svg>
            </aside>

            {/* Social */}
            <nav className="flex gap-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-primary"
                >
                    <text x="2" y="20" fontSize="20" fontFamily="monospace">{'</'}</text>
                </svg>
                {/* Email */}
                <a
                    href="mailto:your.email@example.com"
                    className="hover:text-primary"
                    aria-label="Email"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z" />
                    </svg>
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                    aria-label="GitHub"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 .5C5.648.5.5 5.648.5 12c0 5.088 3.292 9.388 7.865 10.912.575.106.785-.25.785-.556 0-.275-.01-1.006-.015-1.975-3.2.696-3.878-1.544-3.878-1.544-.523-1.327-1.278-1.68-1.278-1.68-1.045-.715.08-.7.08-.7 1.156.081 1.763 1.187 1.763 1.187 1.028 1.762 2.695 1.253 3.352.958.103-.745.402-1.254.73-1.543-2.554-.29-5.238-1.277-5.238-5.682 0-1.255.45-2.28 1.188-3.083-.12-.29-.515-1.454.113-3.033 0 0 .966-.31 3.168 1.177a11.012 11.012 0 015.762 0c2.2-1.487 3.165-1.177 3.165-1.177.63 1.579.235 2.743.115 3.033.74.803 1.187 1.828 1.187 3.083 0 4.416-2.688 5.388-5.25 5.673.413.355.78 1.056.78 2.129 0 1.538-.014 2.777-.014 3.154 0 .31.207.668.79.555C20.713 21.385 24 17.085 24 12c0-6.352-5.148-11.5-12-11.5z" />
                    </svg>
                </a>

                {/* LinkedIn */}
                <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                    aria-label="LinkedIn"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.758 0 5-2.24 5-5V5c0-2.76-2.242-5-5-5zM7 19H4V9h3v10zM5.5 7.5C4.67 7.5 4 6.83 4 6s.67-1.5 1.5-1.5S7 5.17 7 6s-.67 1.5-1.5 1.5zM20 19h-3v-5.5c0-1.07-.43-1.5-1.25-1.5S14.5 12.43 14.5 13.5V19h-3V9h3v1.08c.4-.58 1.15-1.08 2.25-1.08 1.97 0 3.25 1.28 3.25 3.5V19z" />
                    </svg>
                </a>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-primary"
                >
                    <text x="2" y="20" fontSize="20" fontFamily="monospace">{'>'}</text>
                </svg>
            </nav>
        </footer>
    )
}