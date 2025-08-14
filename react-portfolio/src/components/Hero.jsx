export default function Hero() {
    return (
        <div
            id="home"
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1518770660439-4636190af475?fit=crop&w=1920&q=80')", // Tech background
            }}
        >
            {/* Dark overlay to make text readable */}
            <div className="hero-overlay bg-opacity-70 bg-navy"></div>

            <div className="hero-content text-center text-paleBlue">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-cyan">
                        Ephy Macharia
                    </h1>
                    <h2 className="mb-4 text-xl font-semibold text-lightBlue">
                        Software Developer
                    </h2>
                    <p className="mb-5">
                        I build clean, functional, and engaging applications using modern
                        web and mobile technologies. Explore my work below.
                    </p>
                    <a href="#projects">
                        <button className="btn bg-blue border-none text-paleBlue hover:bg-cyan">
                            View My Projects
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}