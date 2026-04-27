// Test fixture for worthy-ai-wayfinding-pipeline. Exercises the patterns
// the React Router JSX extractor handles. Not built or served — the pipeline
// reads this file with ts-morph, never executes it.

import { Routes, Route } from "react-router-dom";
import { useFlags } from "launchdarkly-react-client-sdk";
import { Dashboard } from "./Dashboard";
import { Vehicles } from "./Vehicles";
import { Billing } from "./Billing";
import { AddEditUser } from "./AddEditUser";
import { ChangeEmail } from "./ChangeEmail";
import { B2CStepUpProtectedRoute } from "./StepUpProtectedRoute";

export function MainComponents() {
    const { canChangeOwnEmail } = useFlags();

    return (
        <Routes>
            {/* Plain routes */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/vehicles" element={<Vehicles />} />

            {/* Wildcard parent — sub-routes are inside Billing.tsx via TabbedRouting */}
            <Route path="/billing/*" element={<Billing />} />

            {/* Step-up-protected: requires re-auth */}
            <Route
                path="/users/add"
                element={
                    <B2CStepUpProtectedRoute fallbackUrl="/users">
                        <AddEditUser />
                    </B2CStepUpProtectedRoute>
                }
            />

            {/* Flag-gated: only rendered when the canChangeOwnEmail LaunchDarkly flag is on */}
            {canChangeOwnEmail && (
                <Route path="/changeEmail" element={<ChangeEmail />} />
            )}
        </Routes>
    );
}
