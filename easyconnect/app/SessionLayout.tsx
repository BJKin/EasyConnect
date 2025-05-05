// Code assistance: OpenAI's ChatGPT (2025)

"use client";

import { useSession } from "next-auth/react";

export default function SessionLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>Loading...</div>;

  if (!session) {
    return <div>Please sign in to access this page.</div>; // Redirect or message for unauthenticated users
  }

  return (
    <div className={session.user.role === "admin" ? "admin-dashboard" : "user-dashboard"}>
      {/* Depending on the user's role, apply a different layout or style */}
      {children}
    </div>
  );
}
