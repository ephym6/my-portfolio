import { Section, Table } from "../../components/Prose.jsx";

export default function LoginFormDetectorCaseStudy() {
    return (
        <>
            <Section heading="The problem">
                <p>
                    Phishing pages copy the logos, wording and colours of real login pages, and
                    often hide their text behind images or scripts, so checks based on text or
                    screenshots are easy to fool. What a phishing page can't easily change is
                    its skeleton: to steal credentials it still needs a form, input fields and
                    a submit button arranged in a recognisable way.
                </p>
                <p>
                    Our question: can a model tell login-form pages apart from other pages using
                    only the HTML tag structure? That's the first stage of a phishing pipeline:
                    find the pages that ask for credentials, then decide whether they're
                    malicious.
                </p>
            </Section>

            <Section heading="My role">
                <ul>
                    <li>
                        <strong>Data cleaning.</strong> Missing values, duplicate and
                        label-consistency checks, and mapping five raw labels into two classes so
                        the training and validation data share one schema.
                    </li>
                    <li>
                        <strong>Preparing the data for training.</strong> Structural features,
                        tag n-grams and scaling, in a pipeline that fits every step on training
                        data only. I packaged it as a module so the whole team used the same
                        preparation.
                    </li>
                    <li>
                        <strong>Two of the four models.</strong> I trained and evaluated the
                        Random Forest and the Linear SVM.
                    </li>
                    <li>
                        <strong>Team enablement.</strong> I wrote the README and tutorial
                        notebooks so teammates could run the models and explain the results, and
                        made the most commits on the team (14 of 48).
                    </li>
                </ul>
            </Section>

            <Section heading="What the model sees">
                <p>
                    Each page is reduced to an HTML signature: a nested string of tag names with
                    all text, attributes and styling removed, such as{" "}
                    <code className="rounded bg-accent-soft px-1.5 py-0.5 text-[0.9em]">(body(div(form(input)(input)(button))))</code>.
                    From it we built two kinds of features:
                </p>
                <ul>
                    <li>
                        <strong>Topology metrics:</strong> maximum nesting depth, counts of forms,
                        inputs, buttons and labels, whether inputs follow a form, and the ratio of
                        inputs to <code className="text-[0.9em]">div</code>s.
                    </li>
                    <li>
                        <strong>Tag n-grams</strong> of one to three tokens. The tokeniser keeps
                        closing brackets, so n-grams describe nesting (an input directly inside a
                        div), not just which tags appear next to each other.
                    </li>
                </ul>
            </Section>

            <Section heading="Results">
                <p>
                    On 208 held-out pages from a separate source, both tree models ranked login
                    pages well. At the default threshold the Random Forest was cautious, so
                    lowering the threshold traded a little precision for many more login forms
                    caught, which is the right trade when a missed phishing page costs more than
                    a false alarm.
                </p>
                <Table
                    caption="Held-out validation set (208 pages)"
                    columns={["Model", "Threshold", "ROC-AUC", "Login forms caught", "Precision"]}
                    rows={[
                        ["Random Forest (mine)", "0.50", "0.941", "60.0%", "96.9%"],
                        ["Random Forest (mine), tuned", "0.25", "0.941", "85.7%", "84.9%"],
                        ["XGBoost (teammate)", "0.20", "0.935", "70.9%", "93.6%"],
                    ]}
                />
                <p>
                    My Linear SVM reached 95% accuracy and caught 97% of phishing forms (98 of
                    101), but on a random split of the training pages rather than the held-out
                    set. That gap became the project's main lesson: pages from a different source
                    are structurally different, and evaluation has to reflect it.
                </p>
            </Section>

            <Section heading="What I learned">
                <ul>
                    <li><strong>Good scores on familiar data don't transfer automatically.</strong> A fair test uses pages from a source the model never trained on.</li>
                    <li><strong>The default threshold isn't a law.</strong> Choosing one is a security decision about which mistake is worse.</li>
                    <li><strong>Data leakage is easy to introduce.</strong> Fitting a vectoriser before splitting lets test vocabulary into training.</li>
                    <li><strong>Duplicates need thought.</strong> Identical signatures from different pages are real examples of common login templates, not noise.</li>
                </ul>
            </Section>

            <Section heading="Limitations">
                <ul>
                    <li>It detects login forms, not malice directly: the training login forms all come from phishing sites, and the other pages have no forms.</li>
                    <li>A small dataset of 1,391 pages, without cross-validation.</li>
                    <li>The tuned thresholds were chosen on the validation set itself, so those figures are optimistic.</li>
                    <li>A research prototype, not a deployed service or browser extension.</li>
                </ul>
            </Section>
        </>
    );
}
