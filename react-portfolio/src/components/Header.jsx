import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";
import { profile } from "../data/profile.js";
import { ButtonLink, Container } from "./ui.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

const nav = [
    { label: "Work", hash: "work" },
    { label: "Experience", hash: "experience" },
    { label: "About", hash: "about" },
    { label: "Contact", hash: "contact" },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Close the mobile menu whenever the route or section changes.
    useEffect(() => setOpen(false), [location.pathname, location.hash]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-40 border-b bg-paper/85 backdrop-blur-md transition-colors ${
                scrolled || open ? "border-line" : "border-transparent"
            }`}
        >
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
            >
                Skip to content
            </a>
            <Container className="flex h-16 items-center justify-between gap-4">
                <Link to="/" className="text-[1.05rem] font-bold tracking-[-0.02em]">
                    {profile.name}
                </Link>

                <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
                    {nav.map((item) => (
                        <Link
                            key={item.hash}
                            to={{ pathname: "/", hash: item.hash }}
                            className="rounded-full px-3 py-2 text-[0.95rem] text-muted transition-colors hover:text-ink"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <ThemeToggle />
                    <ButtonLink href={profile.cv} className="ml-2" download>
                        Download CV
                    </ButtonLink>
                </nav>

                <div className="flex items-center gap-1 md:hidden">
                    <ThemeToggle />
                    <button
                        type="button"
                        onClick={() => setOpen((o) => !o)}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        aria-label={open ? "Close menu" : "Open menu"}
                        className="grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-accent-soft"
                    >
                        {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
                    </button>
                </div>
            </Container>

            {open && (
                <nav id="mobile-menu" aria-label="Main" className="border-t border-line md:hidden">
                    <Container className="flex flex-col py-3">
                        {nav.map((item) => (
                            <Link
                                key={item.hash}
                                to={{ pathname: "/", hash: item.hash }}
                                className="py-3 text-lg font-semibold"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <ButtonLink href={profile.cv} className="mt-3 mb-2 self-start" download>
                            Download CV
                        </ButtonLink>
                    </Container>
                </nav>
            )}
        </header>
    );
}
