import { useEffect } from "react";
import { ButtonLink, Container } from "../components/ui.jsx";

export default function NotFound() {
    useEffect(() => {
        document.title = "Page not found | Ephy Macharia";
    }, []);

    return (
        <Container className="py-28 md:py-40">
            <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-extrabold leading-none tracking-[-0.04em]">
                This page doesn't exist
            </h1>
            <p className="mt-5 max-w-[46ch] text-lg text-muted">
                The link may be out of date. Go back to the home page to see my projects.
            </p>
            <ButtonLink to="/" className="mt-8">
                Go to the home page
            </ButtonLink>
        </Container>
    );
}
