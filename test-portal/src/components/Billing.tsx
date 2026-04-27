// Sub-route container for /billing/*. The pipeline detects the wildcard
// parent in MainComponents.tsx and walks this file's tabOptions array to
// emit each sub-route as a separate registry entry.

import type { ReactNode } from "react";

interface TabOptions {
    id: number;
    label: string;
    component: ReactNode;
    route: string;
}

function Statements() {
    return <div>Statements</div>;
}
function Payments() {
    return <div>Payments</div>;
}
function PaymentMethods() {
    return <div>Payment Methods</div>;
}

export function Billing() {
    const tabOptions: Array<TabOptions> = [
        { id: 1, label: "Statements", component: <Statements />, route: "/billing/statements" },
        { id: 2, label: "Payments", component: <Payments />, route: "/billing/payments" },
        { id: 3, label: "Payment Methods", component: <PaymentMethods />, route: "/billing/paymentMethods" },
    ];
    return <div>{tabOptions[0].label}</div>;
}
