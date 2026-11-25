import { Section, Table } from "../../components/Prose.jsx";

export default function BetterCoopCaseStudy() {
    return (
        <>
            <Section heading="The problem">
                <p>
                    Small agricultural cooperatives in Kenya pool their members' milk, coffee,
                    tea or maize, sell it, and pay each farmer a dividend based on what they
                    delivered. Most still record deliveries in handwritten ledgers and work out
                    dividends in spreadsheets. That leads to errors, disputes and late payouts,
                    and farmers can't see their own records, so trust suffers.
                </p>
            </Section>

            <Section heading="My role">
                <p>
                    A pair project, built from a formal proposal under an academic supervisor
                    and delivered in three agile increments.
                </p>
                <ul>
                    <li>
                        <strong>Architecture.</strong> I set up the client and server structure,
                        conventions and feature-branch workflow.
                    </li>
                    <li>
                        <strong>Back end.</strong> I built the REST API (authentication, members,
                        deliveries, dividends, statements, dashboard and SMS logs), all seven data
                        models, and the middleware for authentication, roles, audit logging and
                        errors.
                    </li>
                    <li>
                        <strong>Front end.</strong> I built the React app: layouts, protected
                        routes, the design system and every clerk and farmer page.
                    </li>
                    <li>
                        <strong>SMS.</strong> I integrated Africa's Talking, including fixing why
                        the sandbox rejected our messages.
                    </li>
                </ul>
                <p>
                    My partner reworked the pricing model into the final per-season version,
                    wrote the migration for existing delivery records, and fixed statement
                    printing.
                </p>
            </Section>

            <Section heading="Two portals">
                <ul>
                    <li>
                        <strong>Clerks</strong> get a live dashboard, a searchable member registry
                        (each farmer gets an ID such as BC-2026-042 and a login), delivery
                        recording by weight, seasonal dividend sessions, printable statements and
                        a log of every SMS sent.
                    </li>
                    <li>
                        <strong>Farmers</strong> log in with their phone number, must set their
                        own password on first login, and can only see their own deliveries,
                        dividends and statements. The server checks ownership on every request.
                    </li>
                </ul>
            </Section>

            <Section heading="The dividend engine">
                <p>
                    The final selling price is usually only known at the end of a season, so
                    deliveries record weight only. At season end the clerk opens a dividend
                    session, sets a price per kilogram for each produce type, previews every
                    member's payout, and publishes. The farmer receives 90% of their delivery
                    value and the cooperative keeps 10% for operations.
                </p>
                <Table
                    caption="Worked example: one farmer's season"
                    columns={["Step", "Calculation", "Amount"]}
                    rows={[
                        ["Delivery value", "50 kg of milk × KSh 45/kg", "KSh 2,250"],
                        ["Farmer's dividend", "90% of the delivery value", "KSh 2,025"],
                        ["Cooperative's share", "10% for operations", "KSh 225"],
                    ]}
                />
                <p>
                    Publishing creates one payout record per member, locks the session and
                    texts every farmer their amount. A unique index stops duplicate payouts, a
                    published session can't be published again or deleted, and confirmation
                    dialogs guard every irreversible step.
                </p>
            </Section>

            <Section heading="Security and reliability">
                <ul>
                    <li>JWT authentication, passwords hashed with bcrypt, and role checks on every clerk route.</li>
                    <li>A write-once audit log of logins, registrations, deliveries, dividend sessions and SMS sends.</li>
                    <li>Validation in the schemas and controllers, including Kenyan phone numbers normalised to +254 format.</li>
                    <li>
                        SMS sends run in the background after the response, so texting every member
                        doesn't slow the app down. A failed send never crashes a request; every
                        attempt is logged with its status.
                    </li>
                </ul>
            </Section>

            <Section heading="Designing for clerks and farmers">
                <p>
                    Many users have limited digital experience, so the interface follows HCI
                    principles: plain labels such as "Register New Member", summaries first with
                    details one click away, clear feedback, large touch targets, a mobile-first
                    layout and accessible confirmation dialogs. Statements have a print view that
                    hides the app around them.
                </p>
            </Section>

            <Section heading="What I learned">
                <ul>
                    <li><strong>Turning business rules into an algorithm.</strong> Separating weight from price made dividends simpler and easier to verify.</li>
                    <li><strong>Building a secure API.</strong> Role checks alone aren't enough; each controller also has to check who owns the data.</li>
                    <li><strong>Third-party APIs shouldn't block users.</strong> Background sends and logging kept the app fast and the failures visible.</li>
                </ul>
            </Section>

            <Section heading="Next steps">
                <ul>
                    <li>Pay dividends directly through M-Pesa (Daraja API).</li>
                    <li>Automated tests and CI, and an atomic publish step using MongoDB transactions.</li>
                    <li>Deploy it, and add Swahili and a USSD channel for farmers with feature phones.</li>
                </ul>
            </Section>
        </>
    );
}
