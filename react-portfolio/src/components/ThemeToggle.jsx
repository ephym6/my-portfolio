import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

// index.html sets data-theme before first paint; this button flips it and remembers the choice.
export default function ThemeToggle() {
    const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "light");
    const next = theme === "dark" ? "light" : "dark";

    const toggle = () => {
        document.documentElement.dataset.theme = next;
        try {
            localStorage.setItem("theme", next);
        } catch {
            // Storage can be blocked; the theme still changes for this visit.
        }
        setTheme(next);
    };

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${next} theme`}
            title={`Switch to ${next} theme`}
            className="grid h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:bg-accent-soft hover:text-ink"
        >
            {theme === "dark" ? <FiSun className="h-[1.1rem] w-[1.1rem]" /> : <FiMoon className="h-[1.1rem] w-[1.1rem]" />}
        </button>
    );
}
