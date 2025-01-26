import React, { Suspense } from "react";
import PersonalInformationClient from "./PersonalInformationClient";

// Tells Next.js not to attempt static generation or SSR
export const dynamic = "force-dynamic";
// Alternatively, you could use:
// export const revalidate = 0;

export default function Page() {
  return (
    <Suspense fallback={<div>Loading Personal Information...</div>}>
      <PersonalInformationClient />
    </Suspense>
  );
}
