import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-navy via-blue to-cyan text-paleBlue">
            <Navbar />
            <Hero />
            <Projects />
            <About />
            <Footer />
        </div>
    )
}

export default App
