import { Section, Table } from "../../components/Prose.jsx";

export default function PlantIdCaseStudy() {
    return (
        <>
            <Section heading="The problem">
                <p>
                    People often own plants without knowing what they are, so they don't know how
                    to care for them. Most plant-identification apps need an account and an
                    internet connection, and they send your photos to a server.
                </p>
                <p>
                    PlantID tests a narrower, privacy-first alternative: a small model that runs
                    entirely on the phone, a limited set of plants common in Kenyan homes and
                    gardens, honest answers that admit uncertainty, and care advice where every
                    value comes from a named source.
                </p>
            </Section>

            <Section heading="My role">
                <ul>
                    <li>
                        <strong>Trained the model.</strong> I trained our MobileNetV2 classifier on
                        the 30 species with two-phase transfer learning from ImageNet.
                    </li>
                    <li>
                        <strong>Built Android features in sprints.</strong> The app was built over
                        nine sprints, each on its own feature branch: plan, implement, test
                        automatically and on a phone, review, merge.
                    </li>
                    <li>
                        <strong>Coordinated the team's GitHub workflow,</strong> including feature
                        branches, pull requests and resolving merge conflicts.
                    </li>
                </ul>
            </Section>

            <Section heading="Building an honest dataset">
                <p>
                    An early 7-species model scored 100% on its test set. That score was false:
                    most source folders were shot in one session, so test photos were near-copies
                    of training photos, and one folder was mislabelled. We rebuilt the data from
                    scratch.
                </p>
                <ul>
                    <li>28,969 images across 30 species plus an "other plant" class, drawn from 46,215 candidates, mostly from iNaturalist.</li>
                    <li>619 near-duplicates removed with 64-bit perceptual hashing, and the mislabelled folder fixed.</li>
                    <li>A 70/15/15 split by photographer, so nobody's photos appear in both training and test.</li>
                    <li>A separate set of 1,109 photos of 33 species the model never trained on, to test how it handles unfamiliar plants.</li>
                </ul>
            </Section>

            <Section heading="Training and choosing the model">
                <p>
                    We compared five approaches on the same data and split, and picked the final
                    model on validation data only, with a rule fixed in advance. Better training
                    beat a bigger model: the improved recipe lifted MobileNetV2 from 0.72 to 0.88
                    macro-F1, ahead of the newer MobileNetV3-Large.
                </p>
                <Table
                    caption="Results on 4,179 test photos from photographers not seen in training"
                    columns={["Model", "Accuracy", "Macro-F1", "Top-3"]}
                    rows={[
                        ["Small CNN from scratch", "48.6%", "0.473", "70.8%"],
                        ["Logistic regression on MobileNetV2 features", "66.7%", "0.673", "84.6%"],
                        ["MobileNetV2, original recipe", "72.0%", "0.720", "87.4%"],
                        ["MobileNetV3-Large, improved recipe", "86.7%", "0.862", "94.5%"],
                        ["MobileNetV2, improved recipe (final)", "87.9%", "0.877", "96.0%"],
                    ]}
                    highlightLast
                />
                <p>
                    The recipe used strong augmentation, label smoothing, AdamW, a cosine
                    learning-rate schedule with warm-up, class weights and early stopping. We
                    checked it with 5-fold cross-validation grouped by photographer, and used
                    Grad-CAM heat maps to confirm the model looks at the plant, not the pot.
                </p>
            </Section>

            <Section heading="Knowing when it doesn't know">
                <p>
                    A classifier always picks something. Temperature scaling makes the confidence
                    percentages mean what they say, and a tuned confidence threshold plus the
                    "other plant" class decide when to answer "not sure".
                </p>
                <ul>
                    <li>It answers 86.5% of photos of supported plants, and is right 97.4% of the time when it does.</li>
                    <li>It says "not sure" for 78.5% of species it has never seen, up from 21.8% without the threshold.</li>
                </ul>
            </Section>

            <Section heading="Running on the phone">
                <p>
                    The model ships as a 4.6 MB float16 TensorFlow Lite file that agrees with the
                    original on 99.8% of test photos. A written model contract (input format,
                    labels, temperature, threshold and decision rule) keeps the app's
                    preprocessing identical to training.
                </p>
                <p>
                    The app is Kotlin and Jetpack Compose with an MVVM architecture. The UI
                    depends only on an identification interface, so it was built and tested
                    against a demo identifier before the real model existed, and an architecture
                    test fails the build if that boundary is broken. Results are saved locally in
                    Room and can be exported as CSV for the research evaluation.
                </p>
            </Section>

            <Section heading="Privacy and quality">
                <ul>
                    <li>No account, no analytics, no internet permission and no runtime permissions.</li>
                    <li>Photos never leave the phone; saved copies are downscaled with location data removed.</li>
                    <li>93 unit tests and 90 device tests, 0 lint errors, and WCAG 2.1 AA contrast on every colour pair.</li>
                </ul>
            </Section>

            <Section heading="What I learned">
                <ul>
                    <li><strong>A perfect score can be a red flag.</strong> Splitting by photographer gave a lower, but honest, 87.9%.</li>
                    <li><strong>Better data and training beat a bigger model.</strong></li>
                    <li><strong>The app and the model must agree exactly.</strong> A written contract and an independent check made that verifiable.</li>
                    <li><strong>Phones aren't notebooks.</strong> Inference took about 8 ms on a laptop CPU but 2.6–8.8 s end to end on a phone, a gap we're still investigating.</li>
                </ul>
            </Section>

            <Section heading="Limitations">
                <ul>
                    <li>Accuracy is measured on iNaturalist photos; few come from Kenya, and a study with real users hasn't run yet.</li>
                    <li>Look-alike plants cause most errors, such as weeping fig and rubber plant, or basil and mint.</li>
                    <li>Care values are general guidance, and pet safety isn't veterinary advice.</li>
                    <li>Not on the Play Store; testers install the APK directly.</li>
                </ul>
            </Section>
        </>
    );
}
