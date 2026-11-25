import { Route, Routes } from "react-router";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollManager from "./components/ScrollManager.jsx";
import Home from "./pages/Home.jsx";
import CaseStudy from "./pages/CaseStudy.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
    return (
        <div className="flex min-h-screen flex-col">
            <ScrollManager />
            <Header />
            <main id="main" className="flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects/:slug" element={<CaseStudy />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}
