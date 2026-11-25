import { Link } from "react-router";

const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[0.95rem] font-semibold leading-none transition-colors";

const variants = {
    primary: "bg-accent text-accent-ink hover:bg-ink hover:text-paper",
    secondary: "border border-line text-ink hover:border-ink",
};

// A button-styled link. Internal paths use the router; everything else is a plain <a>.
export function ButtonLink({ to, href, variant = "primary", className = "", children, ...rest }) {
    const cls = `${base} ${variants[variant]} ${className}`;
    if (to) {
        return (
            <Link to={to} className={cls} {...rest}>
                {children}
            </Link>
        );
    }
    const external = href?.startsWith("http");
    return (
        <a
            href={href}
            className={cls}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            {...rest}
        >
            {children}
        </a>
    );
}

// An inline text link with an underline that strengthens on hover.
export function TextLink({ href, to, className = "", children, ...rest }) {
    const cls = `font-semibold text-ink underline decoration-line decoration-2 underline-offset-4 transition-colors hover:decoration-accent ${className}`;
    if (to) {
        return (
            <Link to={to} className={cls} {...rest}>
                {children}
            </Link>
        );
    }
    const external = href?.startsWith("http");
    return (
        <a
            href={href}
            className={cls}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            {...rest}
        >
            {children}
        </a>
    );
}

export function SectionHeading({ id, children, aside }) {
    return (
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-14">
            <h2 id={id} className="text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                {children}
            </h2>
            {aside}
        </div>
    );
}

export function Container({ className = "", children }) {
    return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}
