// Code assistance: OpenAI's ChatGPT (2025)

"use client";

import { SessionProvider } from "next-auth/react";
import "./globals.css"; 
import EasyConnectLogo from "@/components/EasyConnectLogo";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>EasyConnect</title>
      </head>
      <body className="min-h-screen bg-gray-100">
        {/* SessionProvider for global authentication handling */}
        <SessionProvider>
          {/* Add some header, global navbar, or logo */}
          <header className="bg-blue-600 p-4">
            <EasyConnectLogo />
            <h1 className="text-white">Welcome to EasyConnect!</h1>
          </header>

          {/* Main Content Area */}
          <main>{children}</main>

          {/* Optional footer */}
          <footer className="text-center py-4 bg-blue-600 text-white">
            <p>&copy; 2025 EasyConnect. All rights reserved.</p>
          </footer>
        </SessionProvider>
      </body>
    </html>
  );
}