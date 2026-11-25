import { featuredProject, mainProjects, otherProjects } from "../data/projects.js";
import { ButtonLink, Container, SectionHeading, TextLink } from "../components/ui.jsx";
import StackList from "../components/StackList.jsx";

function ProjectLinks({ project, className = "" }) {
    const { links, caseStudy, slug, privateRepo } = project;
    if (!caseStudy && !links.live && !links.code && !privateRepo) return null;
    return (
        <p className={`flex flex-wrap gap-x-6 gap-y-2 ${className}`}>
            {caseStudy && <TextLink to={`/projects/${slug}`}>Case study</TextLink>}
            {links.live && <TextLink href={links.live}>Live site</TextLink>}
            {links.code && <TextLink href={links.code}>Source code</TextLink>}
            {privateRepo && <span className="text-muted">Code in a private repository</span>}
        </p>
    );
}

function Featured({ project }) {
    const [left, middle, right] = project.screenshots;
    return (
        <article
            aria-labelledby={`${project.slug}-title`}
            className="grid gap-12 overflow-hidden rounded-[2rem] bg-accent-soft p-6 sm:p-10 lg:grid-cols-12 lg:gap-8 lg:p-14"
        >
            <div className="lg:col-span-7">
                <p className="text-sm text-muted">Featured project, {project.year}</p>
                <h3
                    id={`${project.slug}-title`}
                    className="mt-2 text-[clamp(2.4rem,5.5vw,4rem)] font-bold leading-none tracking-[-0.04em]"
                >
                    {project.title}
                </h3>
                <p className="mt-5 max-w-[48ch] text-lg leading-relaxed">{project.summary}</p>
                <p className="mt-4 max-w-[52ch] text-muted">{project.role}</p>

                <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-ink/15 pt-6">
                    {project.facts.map((f) => (
                        <div key={f.value} className="flex flex-col-reverse justify-end">
                            <dt className="mt-1 text-sm leading-snug text-muted">{f.label}</dt>
                            <dd className="text-[1.7rem] font-bold leading-none tracking-[-0.03em]">
                                {f.value}
                            </dd>
                        </div>
                    ))}
                </dl>

                <div className="mt-9 flex flex-wrap gap-3">
                    <ButtonLink to={`/projects/${project.slug}`}>Read the case study</ButtonLink>
                    <ButtonLink href={project.links.code} variant="secondary">
                        Source code
                    </ButtonLink>
                </div>
                <StackList stack={project.stack} className="mt-8" />
            </div>

            {/* Three app screens, the middle one raised */}
            <div className="flex items-center justify-center lg:col-span-5">
                <div className="flex w-full max-w-md items-end justify-center">
                    {[left, middle, right].map((shot, i) => (
                        <img
                            key={shot.caption}
                            src={shot.src}
                            alt={shot.alt}
                            loading="lazy"
                            width="640"
                            height="1330"
                            className={`w-[36%] rounded-[1.25rem] border-[5px] border-ink shadow-[0_24px_48px_-24px_rgb(0_0_0/0.45)] ${
                                i === 1 ? "relative z-10 -mx-[5%] mb-10" : "opacity-95"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </article>
    );
}

export default function Work() {
    return (
        <section id="work" aria-labelledby="work-title" className="scroll-mt-16 py-20 md:py-28">
            <Container>
                <SectionHeading id="work-title">Selected work</SectionHeading>

                {featuredProject && <Featured project={featuredProject} />}

                <ul className="mt-16 border-t border-line">
                    {mainProjects.map((p) => (
                        <li key={p.slug} className="grid gap-6 border-b border-line py-10 md:grid-cols-12 md:gap-10">
                            <div className="md:col-span-5 lg:col-span-4">
                                <img
                                    src={p.image}
                                    alt={p.imageAlt ?? `Screenshot of ${p.title}`}
                                    loading="lazy"
                                    className="aspect-[16/10] w-full rounded-xl border border-line object-cover object-top"
                                />
                            </div>
                            <div className="md:col-span-7 lg:col-span-8">
                                <p className="text-sm text-muted">{p.kind}</p>
                                <h3 className="mt-1 text-2xl font-bold tracking-[-0.02em]">{p.title}</h3>
                                <p className="mt-3 max-w-[60ch]">{p.summary}</p>
                                <StackList stack={p.stack} className="mt-5" />
                                <ProjectLinks project={p} className="mt-6" />
                            </div>
                        </li>
                    ))}
                </ul>

                {otherProjects.length > 0 && (
                    <div className="mt-20">
                        <h3 className="text-xl font-bold tracking-[-0.01em]">Other projects</h3>
                        <ul className="mt-6 grid gap-x-10 md:grid-cols-3">
                            {otherProjects.map((p) => (
                                <li key={p.slug} className="flex flex-col border-t border-line py-6">
                                    <p className="text-sm text-muted">{p.kind}</p>
                                    <h4 className="mt-1 text-lg font-bold">{p.title}</h4>
                                    <p className="mt-2 text-[0.95rem] text-ink/85">{p.summary}</p>
                                    <p className="mt-3 text-sm text-muted">{p.stack.map((s) => s.name).join(", ")}</p>
                                    <ProjectLinks project={p} className="mt-4 text-[0.95rem]" />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </Container>
        </section>
    );
}
