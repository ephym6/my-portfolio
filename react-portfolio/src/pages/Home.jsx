import { useEffect } from "react";
import Hero from "../sections/Hero.jsx";
import Work from "../sections/Work.jsx";
import Experience from "../sections/Experience.jsx";
import { About, Contact } from "../sections/About.jsx";

export default function Home() {
    useEffect(() => {
        document.title = "Ephy Macharia | Software Engineer";
    }, []);

    return (
        <>
            <Hero />
            <Work />
            <Experience />
            <About />
            <Contact />
        </>
    );
}
