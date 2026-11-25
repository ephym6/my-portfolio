import { profile } from "../data/profile.js";
import { Container } from "./ui.jsx";

export default function Footer() {
    return (
        <footer className="border-t border-line py-8 text-sm text-muted">
            <Container className="flex flex-col justify-between gap-2 sm:flex-row">
                <p>© {new Date().getFullYear()} {profile.name}</p>
                <p>
                    Built with React and Tailwind CSS.{" "}
                    <a
                        href="https://github.com/ephym6/my-portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-ink"
                    >
                        View the source
                    </a>
                </p>
            </Container>
        </footer>
    );
}
