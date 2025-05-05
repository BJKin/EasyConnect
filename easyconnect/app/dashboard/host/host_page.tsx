// Code assistance: OpenAI's ChatGPT (2025)
"use client"; 

import EasyConnectLogo from "@/components/EasyConnectLogo";
import { useState, useEffect } from "react";

export default function HostDashboard() {
  const [eventData, setEventData] = useState({
    name: "Career Fair Event",
    totalConnections: 350,
    interactionsPerAttendee: 4.2,
    checkInTime: "9:00 AM",
    checkOutTime: "5:00 PM",
    topConnectedAttendees: [
      { name: "John Doe", company: "UCSD", connections: 15 },
      { name: "Jane Smith", company: "UCSD", connections: 10 },
    ],
    events: [
      { id: 1, eventName: "Tech Networking", date: "2025-05-12" },
      { id: 2, eventName: "Startup Meetup", date: "2025-06-15" },
    ],
  });

  return (
    <div className="host-dashboard min-h-screen p-8">
      <h1 className="text-3xl font-semibold mb-8">Host Dashboard</h1>

      <div className="event-details mb-8">
        <h2 className="text-2xl font-medium">Event Details</h2>
        <p className="text-lg">Event: {eventData.name}</p>
        <p>Total Connections: {eventData.totalConnections}</p>
        <p>Interaction Rate per Attendee: {eventData.interactionsPerAttendee}</p>
        <p>Check-In Time: {eventData.checkInTime}</p>
        <p>Check-Out Time: {eventData.checkOutTime}</p>
      </div>

      <div className="top-connected-attendees mb-8">
        <h2 className="text-2xl font-medium">Top Connected Attendees</h2>
        <ul>
          {eventData.topConnectedAttendees.map((attendee, index) => (
            <li key={index} className="mb-4">
              <p>Name: {attendee.name}</p>
              <p>Company: {attendee.company}</p>
              <p>Connections: {attendee.connections}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="event-list mb-8">
        <h2 className="text-2xl font-medium">Event Listings</h2>
        <ul>
          {eventData.events.map((event) => (
            <li key={event.id} className="mb-4">
              <p className="font-bold">{event.eventName}</p>
              <p>Date: {event.date}</p>
            </li>
          ))}
        </ul>
      </div>

      <footer className="mt-16 text-center">
        <p className="text-sm text-gray-500">
          Powered by EasyConnect | All rights reserved.
        </p>
      </footer>
    </div>
  );
}
