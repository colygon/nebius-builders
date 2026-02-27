"use client";

import { useState } from "react";

const inPersonSchedule = [
  { time: "2:30 PM – 3:00 PM", title: "Introduction & Architecture Overview", desc: "Why this approach matters, core concepts, and what we're building today." },
  { time: "3:00 PM – 3:45 PM", title: "Hands-On Setup", desc: "Guided installation and configuration. Mentors at every table." },
  { time: "3:45 PM – 4:30 PM", title: "Build Your Workflow / Use Case", desc: "Choose a real business problem and build the solution live." },
  { time: "4:30 PM – 5:00 PM", title: "Optimization, Q&A & Breakout Groups", desc: "Cost analysis, advanced patterns, and industry-specific discussion." },
];

const onlineSchedule = [
  { time: "12:00 PM – 12:10 PM", title: "Welcome & Setup Check", desc: "Quick intro, verify everyone's environment is ready, and share links." },
  { time: "12:10 PM – 12:25 PM", title: "Live Demo: OpenClaw + Nebius Token Factory", desc: "Watch the full setup in real time. Follow along or just observe." },
  { time: "12:25 PM – 12:45 PM", title: "Build Along: Your First Workflow", desc: "Guided walkthrough to deploy your first agent workflow. Chat support from mentors." },
  { time: "12:45 PM – 1:00 PM", title: "Q&A & Next Steps", desc: "Open questions, advanced use cases, and how to continue after the session." },
];

export default function ScheduleTabs() {
  const [tab, setTab] = useState<"in-person" | "online">("in-person");

  const schedule = tab === "in-person" ? inPersonSchedule : onlineSchedule;

  return (
    <div>
      <div className="flex gap-2 mb-8">
        <button
          onClick={() => setTab("in-person")}
          className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-colors ${
            tab === "in-person"
              ? "bg-nebius-lime text-nebius-navy"
              : "bg-nebius-card border border-nebius-border text-nebius-text-muted hover:text-white"
          }`}
        >
          In Person
        </button>
        <button
          onClick={() => setTab("online")}
          className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-colors ${
            tab === "online"
              ? "bg-nebius-lime text-nebius-navy"
              : "bg-nebius-card border border-nebius-border text-nebius-text-muted hover:text-white"
          }`}
        >
          Online
        </button>
      </div>

      {tab === "in-person" && (
        <p className="text-sm text-nebius-text-muted mb-6">
          2.5 hours. Hands-on with mentors at every table. RSVP required.
        </p>
      )}
      {tab === "online" && (
        <p className="text-sm text-nebius-text-muted mb-6">
          1 hour. Follow along from anywhere. Live chat support from mentors.
        </p>
      )}

      <div className="max-w-3xl space-y-4">
        {schedule.map((slot, i) => (
          <div
            key={`${tab}-${i}`}
            className="flex flex-col md:flex-row md:items-center gap-4 p-6 rounded-2xl border border-nebius-border bg-nebius-card"
          >
            <span className="text-sm font-mono text-nebius-lime font-medium shrink-0 w-44">
              {slot.time}
            </span>
            <div>
              <h3 className="text-white font-semibold">{slot.title}</h3>
              <p className="text-sm text-nebius-text-muted">{slot.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
