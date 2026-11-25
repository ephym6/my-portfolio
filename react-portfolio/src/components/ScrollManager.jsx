import { useEffect } from "react";
import { useLocation } from "react-router";

// Scrolls to #section links (including ones followed from another page) and
// back to the top when moving to a new page.
export default function ScrollManager() {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        if (hash) {
            const el = document.getElementById(hash.slice(1));
            if (el) {
                el.scrollIntoView({ block: "start" });
                return;
            }
        }
        window.scrollTo(0, 0);
    }, [pathname, hash, key]); // key changes when the same link is followed again

    return null;
}
