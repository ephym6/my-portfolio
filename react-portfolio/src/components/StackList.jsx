import { techColors } from "../data/techColors.js";

// The technologies behind a project. Logos are greyscale and take their brand
// colour on hover, so the page stays calm until someone looks closer.
export default function StackList({ stack, className = "" }) {
    return (
        <ul className={`flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted ${className}`} aria-label="Built with">
            {stack.map(({ icon: Icon, name }) => (
                <li
                    key={name}
                    className="group inline-flex items-center gap-1.5"
                    style={{ "--brand": techColors[name] ?? "currentColor" }}
                >
                    {Icon && (
                        <Icon
                            aria-hidden="true"
                            className="h-4 w-4 shrink-0 transition-colors group-hover:text-(--brand)"
                        />
                    )}
                    {name}
                </li>
            ))}
        </ul>
    );
}
