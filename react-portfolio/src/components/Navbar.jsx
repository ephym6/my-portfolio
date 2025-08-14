import { FaUser } from "react-icons/fa";

export default function Navbar() {
    return (
        <div className="navbar bg-navy text-paleBlue shadow-sm">
            {/* Left dropdown menu */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-paleBlue">
                        {/* Hamburger Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="h-5 w-5"
                             fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-blue text-paleBlue rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a href="#home">Homepage</a></li>
                        <li><a href="#projects">Portfolio</a></li>
                        <li><a href="#about-contact">About</a></li>
                    </ul>
                </div>
            </div>

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

            {/* Center logo */}
            <div className="navbar-center">
                <a href="#home" className="btn btn-ghost normal-case text-xl text-cyan">ephym6</a>
            </div>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-primary"
            >
                <text x="2" y="20" fontSize="20" fontFamily="monospace">{'/>'}</text>
            </svg>

            {/* Right profile dropdown */}
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <FaUser className="text-3xl text-cyan" />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue text-paleBlue rounded-box w-52">
                        <li className="menu-title">Profile</li>
                        <li className="flex flex-col items-start p-2">
                            <span className="font-semibold">Ephy Macharia</span>
                            <span className="text-sm text-lightBlue">Software Developer</span>
                        </li>
                        <div className="divider my-1"></div>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}