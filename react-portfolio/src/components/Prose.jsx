// Building blocks for case-study pages.

export function Section({ heading, children }) {
    return (
        <section className="grid gap-4 border-t border-line py-10 md:grid-cols-[14rem_1fr] md:gap-10 md:py-14">
            <h2 className="text-xl font-bold leading-snug tracking-[-0.01em]">{heading}</h2>
            <div className="max-w-[68ch] space-y-4 text-ink/90 [&_li]:relative [&_li]:pl-5 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.7em] [&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:rounded-full [&_li]:before:bg-accent [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:space-y-2.5">
                {children}
            </div>
        </section>
    );
}

// numeric: right-align every column after the first (for tables of figures).
export function Table({ caption, columns, rows, highlightLast = false, numeric = true }) {
    const align = numeric ? "text-right" : "text-left";
    return (
        <div className="-mx-4 overflow-x-auto px-4 py-2 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[34rem] border-collapse text-left text-[0.95rem]">
                <caption className="pb-3 text-left text-sm text-muted">{caption}</caption>
                <thead>
                    <tr className="border-b border-ink/70">
                        {columns.map((c, i) => (
                            <th key={c} scope="col" className={`py-2 pr-4 font-semibold ${i > 0 ? align : "pl-2"}`}>
                                {c}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, r) => {
                        const isHighlight = highlightLast && r === rows.length - 1;
                        return (
                            <tr
                                key={row[0]}
                                className={`border-b border-line ${isHighlight ? "bg-accent-soft font-semibold" : ""}`}
                            >
                                {row.map((cell, i) => (
                                    <td key={i} className={`py-2.5 pr-4 ${i === 0 ? "pl-2" : align}`}>
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
