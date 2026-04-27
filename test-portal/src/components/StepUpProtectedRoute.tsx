import type { ReactNode } from "react";

export function B2CStepUpProtectedRoute({
    children,
    fallbackUrl,
}: {
    children: ReactNode;
    fallbackUrl: string;
}) {
    void fallbackUrl;
    return <>{children}</>;
}
