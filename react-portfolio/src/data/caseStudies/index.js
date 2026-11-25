// Case-study content, keyed by project slug (see projects.js).
// meta fills the summary panel at the top of the page; Content is the body.
import PlantId from "./plantid.jsx";
import BizPulse from "./bizpulse-ai.jsx";
import LoginFormDetector from "./html-login-form-detector.jsx";
import BetterCoop from "./bettercoop.jsx";

export const caseStudies = {
    plantid: {
        Content: PlantId,
        meta: [
            { label: "My role", value: "Model training, Android development, GitHub coordination" },
            { label: "Team", value: "Three students, academic research project" },
            { label: "Year", value: "2026" },
            { label: "Platform", value: "Android 8.0 and later, works offline" },
            { label: "Status", value: "Model final; app tested as a signed release build. User evaluation planned." },
        ],
    },
    "bizpulse-ai": {
        Content: BizPulse,
        meta: [
            { label: "My role", value: "Repository and integration, analytics engine, Gemini recommendations" },
            { label: "Team", value: "Five people" },
            { label: "Event", value: "GOMYCODE × NVIDIA “Come Build with AI” hackathon, built for the Artefact Data & AI Award" },
            { label: "Built", value: "27 September 2026, in one day" },
            { label: "Platform", value: "Web dashboard (Streamlit)" },
            { label: "Status", value: "Working hackathon prototype; not deployed" },
        ],
    },
    bettercoop: {
        Content: BetterCoop,
        meta: [
            { label: "My role", value: "Full-stack developer: architecture, API, data models, React front end, SMS" },
            { label: "Team", value: "Pair project under an academic supervisor" },
            { label: "Year", value: "2026" },
            { label: "Users", value: "Cooperative clerks and farmers" },
            { label: "Status", value: "Feature-complete across three increments; not deployed" },
        ],
    },
    "html-login-form-detector": {
        Content: LoginFormDetector,
        meta: [
            { label: "My role", value: "Data cleaning and preparation, Random Forest and Linear SVM models" },
            { label: "Team", value: "International team of five" },
            { label: "Programme", value: "BISSIT 2026, Brno University of Technology, Czech Republic" },
            { label: "When", value: "August 2026" },
            { label: "Status", value: "Completed research prototype; notebooks run in Google Colab" },
        ],
    },
};
