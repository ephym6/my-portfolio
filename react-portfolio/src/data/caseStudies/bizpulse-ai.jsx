import { Section, Table } from "../../components/Prose.jsx";
import { TextLink } from "../../components/ui.jsx";

export default function BizPulseCaseStudy() {
    return (
        <>
            <Section heading="The hackathon">
                <p>
                    Our team of five built BizPulse in one day at{" "}
                    <TextLink href="https://hackathon.gomycode.com/">Come Build with AI</TextLink>, the
                    hackathon co-organised by GOMYCODE and NVIDIA on 27 September 2026. We built it
                    for the Artefact Data & AI Award, which goes to the project that best turns data
                    into actionable insights or useful AI solutions.
                </p>
            </Section>

            <Section heading="The problem">
                <p>
                    Small businesses such as mini-markets, cafés and shops record sales every
                    day, but a spreadsheet only shows what happened. It doesn't say which
                    products are slipping, which days were unusual, or what to do next.
                    Business-intelligence tools are expensive, and a general AI chatbot can
                    invent numbers.
                </p>
                <p>
                    BizPulse was designed around one rule: verified numbers first, then AI to
                    help interpret them, then a decision by the owner.
                </p>
            </Section>

            <Section heading="My role">
                <ul>
                    <li>
                        <strong>Repository and integration.</strong> I set up the project
                        structure, environment configuration and the team's branch workflow,
                        then reviewed and merged the feature branches.
                    </li>
                    <li>
                        <strong>Analytics engine.</strong> I reworked the pandas pipeline: flexible
                        column detection, converting values to numbers before comparing them,
                        and handling discounts written as either 10 or 0.10.
                    </li>
                    <li>
                        <strong>Gemini recommendations.</strong> I rewrote the module with a
                        grounded prompt, defensive JSON parsing and a deterministic fallback.
                    </li>
                    <li>
                        <strong>Documentation.</strong> I wrote the project README.
                    </li>
                </ul>
            </Section>

            <Section heading="How it works">
                <ul>
                    <li>
                        <strong>Upload and clean.</strong> The owner uploads a sales CSV (or uses
                        the sample). Dates and numbers are coerced, invalid rows are dropped, and
                        discounts are normalised.
                    </li>
                    <li>
                        <strong>Calculate.</strong> pandas computes revenue, profit, margin, units
                        sold, the top product and category, and week-over-week growth. None of
                        these figures come from the AI.
                    </li>
                    <li>
                        <strong>Score.</strong> A 0–100 Business Health Score adds four factors
                        worth 25 points each, and names the single biggest concern.
                    </li>
                    <li>
                        <strong>Flag.</strong> Days whose revenue is two or more standard
                        deviations from the average are listed as unusual, with possible causes
                        for the owner to check.
                    </li>
                    <li>
                        <strong>Recommend.</strong> Only aggregated, verified figures go to Google
                        Gemini, which returns exactly three actions as JSON.
                    </li>
                </ul>
                <Table
                    caption="The four factors behind the Business Health Score"
                    numeric={false}
                    columns={["Factor", "Measured by", "Healthy when"]}
                    rows={[
                        ["Revenue trend", "Last 7 days vs the 7 before", "Growth of 5% or more"],
                        ["Profitability", "Overall profit margin", "Margin of 20% or more"],
                        ["Sales consistency", "Variation in daily revenue", "Coefficient of variation ≤ 0.3"],
                        ["Product concentration", "Revenue share of the top two products", "40% or less"],
                    ]}
                />
            </Section>

            <Section heading="Making the AI reliable">
                <p>
                    The prompt passes verified data as JSON with ten explicit rules: use only
                    the data given, never invent figures, don't claim to know why an anomaly
                    happened, and return exactly three recommendations. The full prompt is
                    visible in the app for transparency.
                </p>
                <p>
                    Gemini sometimes wraps its JSON in Markdown or adds text around it, so the
                    response is parsed in layers: strip code fences, extract the first JSON
                    array, check the types, and require three usable items. If anything goes
                    wrong (no API key, no internet, a rate limit, an API error or malformed
                    output) the app quietly switches to rule-based recommendations built from
                    the same analytics. The dashboard never breaks because of the AI.
                </p>
            </Section>

            <Section heading="Privacy and responsible AI">
                <ul>
                    <li>Only aggregated figures reach the model: no customer names, phone numbers or payment details.</li>
                    <li>The app suggests; it never changes prices, places orders or moves money.</li>
                    <li>Recommendations and the health score are labelled as decision support that needs the owner's review.</li>
                </ul>
            </Section>

            <Section heading="What I learned">
                <ul>
                    <li><strong>Language models are poor calculators.</strong> Keeping all maths in code made every figure verifiable and gave the AI a narrower, safer job.</li>
                    <li><strong>Never trust a model's output format.</strong> Layered parsing turned inconsistent responses into reliable ones.</li>
                    <li><strong>An AI feature mustn't be a single point of failure,</strong> especially in a live demo on hackathon Wi-Fi.</li>
                    <li><strong>Integration is its own job.</strong> With five people building in parallel, small adapter functions let modules change without breaking each other.</li>
                </ul>
            </Section>

            <Section heading="Limitations">
                <ul>
                    <li>A one-day prototype: CSV upload only, no accounts or database, and not deployed.</li>
                    <li>The health score uses hand-set thresholds; it isn't a validated financial score.</li>
                    <li>Anomaly detection uses one global threshold and doesn't model weekly patterns.</li>
                    <li>Tested on synthetic sales data only.</li>
                </ul>
            </Section>
        </>
    );
}
