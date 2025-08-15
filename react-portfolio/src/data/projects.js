// My projects
import {
    SiJavascript,
    SiSpringboot,
    SiHtml5,
    SiCss3,
    SiReact,
    SiVite,
    SiTailwindcss,
    SiPython,
    SiMysql, SiNpm, SiGooglesheets, SiVercel, SiIntellijidea
} from "react-icons/si";
import MyPortfolio from "../assets/images/projects/my-portfolio.png";
import VCN from "../assets/images/projects/vcn.png";
import F4 from "../assets/images/projects/f4.png";
import HBS from "../assets/images/projects/hbs.png";
import TweepyBot from "../assets/images/projects/twitter-bot.png";
import YouthMerch from "../assets/images/projects/youth-merch.png";

export const projects = [
    {
        title: "My Portfolio Website",
        description: "My personal portfolio website to showcase my projects and skills.",
        tech: [
            { icon: SiReact, name: "React", libraries: ["react-icons"] },
            { icon: SiVite, name: "Vite" },
            { icon: SiTailwindcss, name: "Tailwind CSS", libraries: ["daisyui"]},
            { icon: SiJavascript, name: "JavaScript" },
            { icon: SiIntellijidea, name: "IntelliJ IDEA"},
            { icon: SiNpm, name: "NPM"},
            { icon: SiVercel, name: "Vercel"},
        ],
        image: MyPortfolio,
        link: "",
        github: ""
    },
    {
        title: "Youth Merch Shop",
        description: "A youth Merch Shop for showcasing and selling youth-oriented merchandise, featuring a modern design and user-friendly interface.",
        tech: [
            { icon: SiSpringboot, name: "Spring Boot" },
            { icon: SiGooglesheets, name: "Google Sheets" },
            { icon: SiReact, name: "React", },
            { icon: SiVite, name: "Vite" },
            { icon: SiTailwindcss, name: "Tailwind CSS" },
            { icon: SiJavascript, name: "JavaScript" },
            { icon: SiIntellijidea, name: "IntelliJ IDEA"},
            { icon: SiNpm, name: "NPM" },
        ],
        image: YouthMerch,
        link: "",
        github: ""
    },
    {
        title: "Hostel Booking System",
        description: "A modern and robust hostel booking and management system built with Spring Boot for students",
        tech: [
            { icon: SiSpringboot, name: "Spring Boot" },
            { icon: SiMysql, name: "MySQL"},
            { icon: SiJavascript, name: "JavaScript" },
            { icon: SiHtml5, name: "HTML5" },
            { icon: SiCss3, name: "CSS3" },
            { icon: SiIntellijidea, name: "IntelliJ IDEA"}
        ],
        image: HBS,
        link: "N/A",
        github: "https://github.com/ephym6/hostel-booking-system.git"
    },
    {
        title: "Vibe Culture Nation (E-commerce Website)",
        description: "An e-commerce website for Vibe Culture Nation, featuring a modern design and user-friendly interface, for showing events, products, and more.",
        tech: [
            { icon: SiReact, name: "React", libraries: ["heroui"] },
            { icon: SiVite, name: "Vite" },
            { icon: SiTailwindcss, name: "Tailwind CSS" },
            { icon: SiIntellijidea, name: "IntelliJ IDEA"},
            { icon: SiNpm, name: "NPM"},
            { icon: SiVercel, name: "Vercel"},
        ],
        image: VCN,
        link: "https://vibe-culture-tau.vercel.app/",
        github: ""
    },
    {
        title: "Twitter Bot",
        description: "A Twitter bot that automates posting and interacting with tweets based on specific keywords",
        tech: [
            { icon: SiPython, name: "Python", libraries: ["tweepy", "tkinter", "dotenv", "os"] },
            { icon: SiIntellijidea, name: "IntelliJ IDEA"}
        ],
        image: TweepyBot,
        link: "",
        github: "https://github.com/ephym6/twitter-bot.git"
    },
    {
        title: "Fantastic Four",
        description: "A dynamic fan-made web app created in anticipation of Marvel Studios' The Fantastic Four: First Steps ",
        tech: [
            { icon: SiReact, name: "React" },
            { icon: SiVite, name: "Vite" },
            { icon: SiTailwindcss, name: "Tailwind CSS" },
            { icon: SiHtml5, name: "HTML5", libraries: ["html5 audio api"] },
            { icon: SiIntellijidea, name: "IntelliJ IDEA"},
            { icon: SiNpm, name: "NPM"},
            { icon: SiVercel, name: "Vercel"}
        ],
        image: F4,
        link: "https://fantastic-four.vercel.app/",
        github: "https://github.com/ephym6/fantastic-four.git"
    }
];