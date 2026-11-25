// Every project on the site lives here.
//
//   featured: true   shows the project in the large "featured" block (one at a time)
//   group: "main"    shows it in the Selected work list with its screenshot
//   group: "other"   shows it in the shorter Other projects list
//   caseStudy: true  gives it a page at /projects/<slug> (content in src/data/caseStudies/)
import {
    SiAndroid, SiExpress, SiGooglecolab, SiGooglegemini, SiGooglesheets,
    SiJetpackcompose, SiJupyter, SiJsonwebtokens, SiKeras, SiKotlin, SiMongodb,
    SiNodedotjs, SiNumpy, SiPandas, SiPytest, SiPython, SiReact, SiScikitlearn,
    SiSpringboot, SiSqlite, SiStreamlit, SiTailwindcss, SiTensorflow,
} from "react-icons/si";

import PlantHome from "../assets/images/projects/plant-id/home.webp";
import PlantResult from "../assets/images/projects/plant-id/result-identified.webp";
import PlantCare from "../assets/images/projects/plant-id/care-guide.webp";
import PlantNotSure from "../assets/images/projects/plant-id/result-not-sure.webp";
import PlantHistory from "../assets/images/projects/plant-id/history.webp";
import PlantAbout from "../assets/images/projects/plant-id/about.webp";
import BizPulse from "../assets/images/projects/bizpulse-ai/dashboard.webp";
import CoopLanding from "../assets/images/projects/better-coop/landing.webp";
import CoopDashboard from "../assets/images/projects/better-coop/clerk-dashboard.webp";
import CoopMembers from "../assets/images/projects/better-coop/members.webp";
import CoopDeliveries from "../assets/images/projects/better-coop/deliveries.webp";
import CoopDividends from "../assets/images/projects/better-coop/dividends.webp";
import CoopSms from "../assets/images/projects/better-coop/sms-logs.webp";
import CoopMemberDividends from "../assets/images/projects/better-coop/member-dividends.webp";
import CoopStatement from "../assets/images/projects/better-coop/member-statement.webp";
import YouthMerch from "../assets/images/projects/youth-merch.webp";

export const projects = [
    {
        slug: "plantid",
        title: "PlantID",
        kind: "Android app and on-device machine learning",
        year: "2026",
        featured: true,
        caseStudy: true,
        summary:
            "An Android app that identifies 30 common Kenyan plants from one photo. The model runs entirely on the phone, says when it isn't sure instead of guessing, and shows a sourced care and pet-safety guide.",
        role:
            "Team of three. I trained our MobileNetV2 model on the 30 species, built Android features across the sprints, and coordinated the team's GitHub workflow, including merge conflicts.",
        facts: [
            { value: "87.9%", label: "test accuracy on photos from photographers the model never saw" },
            { value: "4.6 MB", label: "TensorFlow Lite model that runs offline on the phone" },
            { value: "97.4%", label: "correct when it gives an answer" },
            { value: "183", label: "automated unit and device tests" },
        ],
        screenshots: [
            { src: PlantHome, alt: "PlantID home screen with recent identifications", caption: "Home" },
            { src: PlantResult, alt: "Saved result identifying an arrowhead vine with 96% model confidence", caption: "Identified, with calibrated confidence" },
            { src: PlantCare, alt: "Care guide for aloe vera showing light, watering, temperature and humidity", caption: "Sourced care guide" },
            { src: PlantNotSure, alt: "Result screen saying the plant couldn't be confidently identified, with three possible matches", caption: "An honest “not sure”" },
            { src: PlantHistory, alt: "History list of saved identifications", caption: "History" },
            { src: PlantAbout, alt: "About screen listing the supported plants", caption: "About and supported plants" },
        ],
        stack: [
            { icon: SiKotlin, name: "Kotlin" },
            { icon: SiJetpackcompose, name: "Jetpack Compose" },
            { icon: SiAndroid, name: "Android" },
            { icon: SiTensorflow, name: "TensorFlow" },
            { icon: SiKeras, name: "Keras" },
            { icon: SiPython, name: "Python" },
            { icon: SiScikitlearn, name: "scikit-learn" },
            { icon: SiSqlite, name: "SQLite" },
            { icon: SiGooglecolab, name: "Google Colab" },
        ],
        links: { code: "https://github.com/ephym6/SemProject_MLEngine" },
    },
    {
        slug: "bizpulse-ai",
        title: "BizPulse AI",
        kind: "Data analytics and generative AI, GOMYCODE × NVIDIA Hackathon 2026",
        year: "2026",
        group: "main",
        caseStudy: true,
        summary:
            "A dashboard that turns a small business's sales spreadsheet into verified KPIs, a Business Health Score, alerts for unusual sales days and three Google Gemini recommendations. The AI only interprets numbers calculated in code, and the app falls back to rule-based advice when Gemini is unavailable.",
        role:
            "Team of five, built in one day at the GOMYCODE × NVIDIA hackathon for the Artefact Data & AI Award. I owned the repository and integration, reworked the pandas analytics engine, and rewrote the Gemini recommendation module with a grounded prompt, robust JSON parsing and an offline fallback.",
        facts: [
            { value: "1 day", label: "built by a team of five at the GOMYCODE × NVIDIA Hackathon 2026" },
            { value: "0–100", label: "explainable Business Health Score from four factors" },
            { value: "3", label: "Gemini recommendations, grounded in verified figures only" },
            { value: "6", label: "AI failure cases that fall back to rule-based advice" },
        ],
        image: BizPulse,
        imageAlt: "BizPulse AI dashboard showing revenue, profit and margin, a 70/100 health score and a revenue trend chart",
        stack: [
            { icon: SiPython, name: "Python" },
            { icon: SiStreamlit, name: "Streamlit" },
            { icon: SiPandas, name: "pandas" },
            { icon: SiNumpy, name: "NumPy" },
            { icon: SiGooglegemini, name: "Google Gemini" },
            { icon: SiPytest, name: "Pytest" },
        ],
        links: { code: "https://github.com/ephym6/bizpulse-ai" },
    },
    {
        slug: "bettercoop",
        title: "BetterCOOP",
        kind: "Full-stack web app (MERN), university project",
        year: "2026",
        group: "main",
        caseStudy: true,
        summary:
            "A platform that replaces handwritten ledgers in small Kenyan farming cooperatives. Clerks register farmers, record produce deliveries and publish seasonal dividends; farmers see their own records in a separate portal and get an SMS for every delivery and payout.",
        role:
            "Pair project under an academic supervisor. I set up the architecture and built the back-end API, the data models, the React front end and the Africa's Talking SMS integration.",
        facts: [
            { value: "25", label: "REST API endpoints, secured with JWT and role-based access" },
            { value: "7", label: "MongoDB collections, including a write-once audit log" },
            { value: "16", label: "pages across the clerk and farmer portals" },
            { value: "3", label: "agile increments, from proposal to feature-complete" },
        ],
        image: CoopDashboard,
        imageAlt: "BetterCOOP clerk dashboard showing members, deliveries this season, pending dividends and quick actions",
        screenshots: [
            { src: CoopLanding, alt: "BetterCOOP landing page: Empowering Kenya's agricultural cooperatives", caption: "Landing page", wide: true },
            { src: CoopDashboard, alt: "Clerk dashboard with member, delivery, dividend and payout totals", caption: "Clerk dashboard", wide: true },
            { src: CoopMembers, alt: "Searchable member registry with status and produce filters", caption: "Member registry", wide: true },
            { src: CoopDeliveries, alt: "Delivery records filtered by season with total weight", caption: "Delivery records", wide: true },
            { src: CoopDividends, alt: "Dividend sessions in draft and published states", caption: "Dividend sessions", wide: true },
            { src: CoopSms, alt: "Log of SMS notifications with sent and failed status", caption: "SMS log", wide: true },
            { src: CoopMemberDividends, alt: "A farmer's dividend statement showing total dividends earned", caption: "Farmer portal: dividends", wide: true },
            { src: CoopStatement, alt: "Printable member statement", caption: "Printable statement", wide: true },
        ],
        stack: [
            { icon: SiMongodb, name: "MongoDB" },
            { icon: SiExpress, name: "Express" },
            { icon: SiReact, name: "React" },
            { icon: SiNodedotjs, name: "Node.js" },
            { icon: SiTailwindcss, name: "Tailwind CSS" },
            { icon: SiJsonwebtokens, name: "JWT" },
            { name: "Africa's Talking SMS" },
        ],
        links: { code: "https://github.com/ephym6/BetterCOOP" },
    },
    {
        slug: "youth-merch-shop",
        title: "Youth Merch Shop",
        kind: "Full-stack web app",
        group: "main",
        summary:
            "A preorder shop for youth merchandise, with a Spring Boot back end that records orders through Google Sheets and a React front end.",
        image: YouthMerch,
        imageAlt: "Youth Merch shop home page",
        stack: [
            { icon: SiSpringboot, name: "Spring Boot" },
            { icon: SiGooglesheets, name: "Google Sheets" },
            { icon: SiReact, name: "React" },
            { icon: SiTailwindcss, name: "Tailwind CSS" },
        ],
        // The repo (github.com/ephym6/youth-merch-shop) is private. If it's made
        // public, replace privateRepo with links: { code: "..." }.
        privateRepo: true,
        links: {},
    },

    // Other projects
    {
        slug: "html-login-form-detector",
        title: "HTML Login Form Detector",
        kind: "Machine learning for cybersecurity",
        year: "2026",
        group: "other",
        caseStudy: true,
        summary:
            "Detects phishing login-form pages from the structure of their HTML alone. Built by an international team at Brno University of Technology; our Random Forest reached 0.94 ROC-AUC on unseen pages.",
        role:
            "International team of five at the BISSIT 2026 programme. I worked on cleaning the data and preparing it for training, trained and evaluated the Random Forest and Linear SVM models, and wrote the team's tutorials and README.",
        facts: [
            { value: "0.94", label: "ROC-AUC on held-out pages, from HTML structure alone" },
            { value: "97%", label: "of phishing forms caught by the Linear SVM on a random test split" },
            { value: "4", label: "models compared, from logistic regression to XGBoost" },
            { value: "1,391", label: "real web pages in the dataset" },
        ],
        stack: [
            { icon: SiPython, name: "Python" },
            { icon: SiScikitlearn, name: "scikit-learn" },
            { name: "XGBoost" },
            { icon: SiPandas, name: "pandas" },
            { icon: SiJupyter, name: "Jupyter" },
            { icon: SiGooglecolab, name: "Google Colab" },
        ],
        links: { code: "https://github.com/ephym6/html-login-form-detector" },
    },
    {
        slug: "hostel-booking-system",
        title: "Hostel Booking System",
        kind: "Full-stack web app",
        group: "other",
        summary: "A booking and management system for student hostels.",
        stack: [{ name: "Spring Boot" }, { name: "MySQL" }, { name: "JavaScript" }],
        links: { code: "https://github.com/ephym6/hostel-booking-system" },
    },
    {
        slug: "vibe-culture-nation",
        title: "Vibe Culture Nation",
        kind: "E-commerce website",
        group: "other",
        summary: "An e-commerce site for Vibe Culture Nation that showcases its events and products.",
        stack: [{ name: "React" }, { name: "Tailwind CSS" }, { name: "Vercel" }],
        links: { live: "https://vibe-culture-tau.vercel.app/" },
    },
    {
        slug: "flea-market",
        title: "Flea Market",
        kind: "Campus marketplace, team project",
        group: "other",
        summary:
            "A React marketplace where Strathmore students shop from campus vendors. In a team of six, I built the shopping cart, checkout and receipts, and the client-side login session that protects the user dashboard.",
        stack: [{ name: "React" }, { name: "React Router" }, { name: "localStorage" }],
        links: { code: "https://github.com/adednile/flea-market" },
    },
    {
        slug: "zumba-ticketing",
        title: "Zumba Ticketing",
        kind: "Event ticketing web app",
        group: "other",
        summary:
            "Built for a community Zumba event: attendees pay by M-Pesa, paste the confirmation SMS, and the app checks the amount and recipient before issuing a QR-code ticket. An unfinished prototype.",
        stack: [{ name: "React" }, { name: "React Router" }, { name: "Tailwind CSS" }],
        links: { code: "https://github.com/ephym6/zumba-ticketing" },
    },
    {
        slug: "fantastic-four",
        title: "Fantastic Four",
        kind: "Fan web app",
        group: "other",
        summary:
            "A fan-made site for Marvel's The Fantastic Four: First Steps, with sound through the HTML5 Audio API.",
        stack: [{ name: "React" }, { name: "Tailwind CSS" }, { name: "HTML5 Audio" }],
        links: {
            live: "https://fantastic-four.vercel.app/",
            code: "https://github.com/ephym6/fantastic-four",
        },
    },
    {
        slug: "twitter-bot",
        title: "Twitter Bot",
        kind: "Automation",
        group: "other",
        summary:
            "A Python bot that posts and interacts with tweets matching chosen keywords, with a Tkinter desktop interface.",
        stack: [{ name: "Python" }, { name: "Tweepy" }, { name: "Tkinter" }],
        links: { code: "https://github.com/ephym6/twitter-bot" },
    },
];

export const featuredProject = projects.find((p) => p.featured);
export const mainProjects = projects.filter((p) => p.group === "main");
export const otherProjects = projects.filter((p) => p.group === "other");
export const getProject = (slug) => projects.find((p) => p.slug === slug && p.caseStudy);
