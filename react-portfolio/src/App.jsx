import './App.css'
import './index.css'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-navy via-blue to-cyan text-paleBlue">
            <Navbar />
            <Hero />
        </div>
    )
}

export default App
