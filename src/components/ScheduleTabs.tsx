const schedule = [
  { time: "12:00 PM – 12:30 PM", title: "Introduction & Architecture Overview", desc: "Why this approach matters, core concepts, and what we're building today." },
  { time: "12:30 PM – 1:15 PM", title: "Hands-On Setup", desc: "Guided installation and configuration. Live chat support from mentors." },
  { time: "1:15 PM – 2:00 PM", title: "Build Your Workflow / Use Case", desc: "Choose a real business problem and build the solution live." },
  { time: "2:00 PM – 2:30 PM", title: "Optimization, Q&A & Breakout Groups", desc: "Cost analysis, advanced patterns, and industry-specific discussion." },
];

export default function ScheduleTabs() {
  return (
    <div>
      <p className="text-sm text-nebius-text-muted mb-6">
        2.5 hours. Follow along from anywhere. Live chat support from mentors.
      </p>

      <div className="max-w-3xl space-y-4">
        {schedule.map((slot, i) => (
          <div
            key={i}
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
