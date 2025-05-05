// Code assistance: OpenAI's ChatGPT (2025)

"use client";

import EasyConnectLogo from "@/components/EasyConnectLogo";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function UserDashboard() {
  const { data: session } = useSession();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    connections: 0,
    connectionDetails: [], // Connections made by the user
    event: {
      title: "Tech Networking 2025",
      description:
        "Connect with top industry professionals, employers, and startups at the annual networking event.",
    },
    vendors: [],
  });

  useEffect(() => {
    if (session?.user) {
      // Replace with actual API fetch later
      setUserData({
        name: session.user.name || "Unnamed User",
        email: session.user.email || "No email provided",
        phone: "123-456-7890", 
        linkedin: "https://www.linkedin.com/in/johndoe", 
        connections: 12, 
        connectionDetails: [
          {
            name: "Jane Smith",
            company: "XYZ Corp",
            sharedContact: "(987) 654-3210",
          },
          {
            name: "John Doe",
            company: "ABC Inc.",
            sharedContact: "(123) 456-7890",
          },
        ], 
        event: {
          title: "Tech Networking 2025",
          description:
            "Connect with top industry professionals, employers, and startups at the annual networking event.",
        },
        vendors: [
          { name: "OpenAI", description: "AI Research & Deployment" },
          { name: "Vercel", description: "Frontend Platform for Next.js" },
        ],
      });
    }
  }, [session]);

  return (
    <main className="p-6 sm:p-10">
      {/* User Info Section */}
      <section className="mb-8">
        <h1 className="text-2xl font-bold mb-2">
          Welcome, {userData.name || "Guest"}
        </h1>
        <p className="text-gray-500"> Your profile dashboard</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow mt-4">
          <h3 className="font-medium">Your Information</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Email:</strong> {userData.email}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Phone:</strong> {userData.phone}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>LinkedIn:</strong> <a href={userData.linkedin} target="_blank" rel="noopener noreferrer">{userData.linkedin}</a>
          </p>
        </div>
      </section>

      {/* Event Info Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Event name</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow">
          <h3 className="text-lg font-medium">{userData.event.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{userData.event.description}</p>
        </div>
      </section>

      {/* Connections Info Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Your Connections</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow">
          <p className="text-lg font-medium">Total Connections: {userData.connections}</p>
          <ul className="space-y-4 mt-4">
            {userData.connectionDetails.map((contact, idx) => (
              <li key={idx} className="border border-gray-200 dark:border-gray-700 p-4 rounded-md">
                <h4 className="font-medium">{contact.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Company:</strong> {contact.company}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Shared Contact Info:</strong> {contact.sharedContact}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Vendor Info Section */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Vendors You Met:</h2>
        <ul className="space-y-3">
          {userData.vendors.map((vendor, idx) => (
            <li
              key={idx}
              className="border border-gray-200 dark:border-gray-700 p-4 rounded-md"
            >
              <h4 className="font-medium">{vendor.name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{vendor.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
