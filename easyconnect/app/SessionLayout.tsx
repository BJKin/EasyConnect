// "use client";
// import { useSession } from "next-auth/react";

// Define types to help TypeScript understand the session shape
// type SessionWithRole = {
//   user?: {
//     name?: string;
//     email?: string;
//     role?: "admin" | "attendee" | "vendor";
//   };
// };

// export default function SessionLayout({ children }: { children: React.ReactNode }) {
//   const { data: session, status } = useSession();

//   if (status === "loading") return <div>Loading...</div>;
//   if (!session) return <div>Please sign in to access this page.</div>;

//   const user = (session as SessionWithRole)?.user;

//   return (
//     <div className={user?.role === "admin" ? "admin-dashboard" : "user-dashboard"}>
//       {children}
//     </div>
//   );
// }



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
