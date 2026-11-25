import { education, experience } from "../data/experience.js";
import { skills } from "../data/skills.js";
import { Container, SectionHeading, TextLink } from "../components/ui.jsx";

function Timeline({ title, items }) {
    return (
        <div>
            <h3 className="text-xl font-bold tracking-[-0.01em]">{title}</h3>
            <ol className="mt-6">
                {items.map((item) => (
                    <li key={item.title} className="grid gap-1 border-t border-line py-6 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
                        <p className="text-sm text-muted tabular-nums sm:pt-1">{item.dates}</p>
                        <div>
                            <p className="text-lg font-bold leading-snug">{item.title}</p>
                            <p className="text-muted">
                                {item.org}
                                {item.place && `, ${item.place}`}
                            </p>
                            <p className="mt-2 max-w-[56ch]">{item.detail}</p>
                            {item.link && (
                                <p className="mt-3">
                                    <TextLink to={item.link.to}>{item.link.label}</TextLink>
                                </p>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default function Experience() {
    return (
        <section id="experience" aria-labelledby="experience-title" className="scroll-mt-16 border-t border-line py-20 md:py-28">
            <Container>
                <SectionHeading id="experience-title">Experience and education</SectionHeading>
                <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
                    <Timeline title="Experience" items={experience} />
                    <Timeline title="Education" items={education} />
                </div>

                <div className="mt-20">
                    <h3 className="text-xl font-bold tracking-[-0.01em]">Skills</h3>
                    <dl className="mt-6 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
                        {skills.map((s) => (
                            <div key={s.group} className="border-t border-line py-5">
                                <dt className="font-semibold">{s.group}</dt>
                                <dd className="mt-1 text-muted">{s.items.join(", ")}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </Container>
        </section>
    );
}
