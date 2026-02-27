import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScheduleTabs from "@/components/ScheduleTabs";
import { workshops } from "@/data/workshops";

const REGISTER_URL = "https://cerebralvalley.ai/e/nebius-build-sf";

const badgeIcons: Record<string, React.ReactNode> = {
  shield: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  gpu: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5M4.5 15.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  kubernetes: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  ),
  robot: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L3.07 12.9a1.5 1.5 0 001.06 2.56h1.5m-1.5-2.56l6.36-6.36m5.1 5.1l5.1-5.1m0 0L17.93 7.1a1.5 1.5 0 00-1.06 2.56h-1.5m1.5-2.56l-6.36 6.36M12 21a9 9 0 110-18 9 9 0 010 18z" />
    </svg>
  ),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-nebius-dark">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 hero-gradient overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 text-xs font-medium text-nebius-lime bg-nebius-lime/10 border border-nebius-lime/20 rounded-full">
                OpenClaw + Nebius AI Cloud
              </span>
              <span className="px-3 py-1 text-xs font-medium text-nebius-green bg-nebius-green/10 border border-nebius-green/20 rounded-full">
                Hands-On Workshops
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
              Build Real AI Agents.
              <br />
              <span className="gradient-text">Ship Them Today.</span>
            </h1>

            <p className="text-xl text-nebius-text-muted max-w-2xl mb-10 leading-relaxed">
              Four hands-on workshops designed for builders who want agents that actually run —
              not just sound impressive. From local-first open-model setups to dedicated GPUs,
              Kubernetes at scale, and robotics.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#workshops"
                className="px-8 py-4 bg-nebius-lime hover:bg-nebius-lime-hover text-nebius-navy font-semibold rounded-xl transition-colors text-lg"
              >
                Explore Workshops
              </a>
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-nebius-border hover:border-nebius-text-dim text-white font-semibold rounded-xl transition-colors text-lg"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>

        {/* Decorative grid */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(186,255,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(186,255,0,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-nebius-border bg-nebius-darker py-8">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">4</div>
            <div className="text-sm text-nebius-text-muted mt-1">Workshops</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">4,000+</div>
            <div className="text-sm text-nebius-text-muted mt-1">Past Attendees</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">85K+</div>
            <div className="text-sm text-nebius-text-muted mt-1">Dev Community</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">5</div>
            <div className="text-sm text-nebius-text-muted mt-1">Mentors On-Site</div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 border-b border-nebius-border">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What to Expect</h2>
          <p className="text-lg text-nebius-text-muted max-w-2xl mb-12">
            These aren&apos;t demo days. You&apos;ll leave each session with something working — not just ideas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Guided Setup",
                desc: "Step-by-step installation and configuration with mentors walking every table.",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1M6.32 10.07L3.07 12.9a1.5 1.5 0 001.06 2.56h1.5m-1.5-2.56l6.36-6.36" />
                  </svg>
                ),
              },
              {
                title: "Real Workflows",
                desc: "Content generation, lead scoring, market research, data analysis — choose your use case.",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
              },
              {
                title: "Small Group Breakouts",
                desc: "Brainstorm with others in your industry. Get direct support while building.",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
              },
              {
                title: "One-Click Deploy",
                desc: "ClawdBody lets you deploy agents to cloud machines. No terminal, no DevOps, no laptop awake.",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                ),
              },
              {
                title: "Agent Marketplace",
                desc: "Publish your workflows and get paid when others use them. Skills as commodities.",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                ),
              },
              {
                title: "Mac Mini Giveaway",
                desc: "We're giving away a Mac mini to a lucky participant. RSVP required to enter.",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-nebius-border bg-nebius-card hover:bg-nebius-card-hover transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-nebius-lime/10 text-nebius-lime flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-nebius-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Cards */}
      <section className="py-20 border-b border-nebius-border" id="workshops">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Workshops</h2>
          <p className="text-lg text-nebius-text-muted max-w-2xl mb-12">
            Four tracks covering the full spectrum — from beginner-friendly local setups to
            production Kubernetes and physical robotics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshops.map((w) => (
              <Link
                key={w.slug}
                href={`/workshops/${w.slug}`}
                className="group p-8 rounded-2xl border border-nebius-border bg-nebius-card hover:bg-nebius-card-hover card-glow transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 text-xs font-medium text-white rounded-full ${w.badgeColor}`}>
                    {w.badge}
                  </span>
                  <span className={`text-sm font-medium ${w.levelColor}`}>{w.level}</span>
                </div>

                <div className="w-12 h-12 rounded-xl bg-nebius-lime/10 text-nebius-lime flex items-center justify-center mb-4">
                  {badgeIcons[w.icon]}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-nebius-lime transition-colors">
                  {w.title}
                </h3>
                <p className="text-nebius-text-muted mb-4">{w.subtitle}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {w.whatYouBuild.slice(0, 2).map((item, i) => (
                    <span key={i} className="px-3 py-1 text-xs text-nebius-text-dim bg-nebius-darker rounded-full border border-nebius-border">
                      {item.length > 60 ? item.substring(0, 57) + "..." : item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-nebius-lime font-medium">
                  View workshop & guide
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 border-b border-nebius-border" id="schedule">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Track</h2>
          <p className="text-lg text-nebius-text-muted max-w-2xl mb-12">
            Pick the workshop that matches your experience level and goals.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-nebius-border">
                  <th className="py-4 px-4 text-sm font-semibold text-nebius-text-muted"></th>
                  {workshops.map((w) => (
                    <th key={w.slug} className="py-4 px-4 text-sm font-semibold text-white">
                      <Link href={`/workshops/${w.slug}`} className="hover:text-nebius-lime transition-colors">
                        {w.slug === "robotics" ? "Robotics + SO-ARM100" : w.title.split("+")[0].trim()}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Audience", key: "audience" as const },
                  { label: "Level", key: "level" as const },
                  { label: "Key Value", key: "keyValue" as const },
                  { label: "You'll Say", key: "wowFactor" as const },
                ].map((row) => (
                  <tr key={row.label} className="border-b border-nebius-border">
                    <td className="py-4 px-4 text-sm font-medium text-nebius-text-muted">{row.label}</td>
                    {workshops.map((w) => (
                      <td key={w.slug} className="py-4 px-4 text-sm text-nebius-text">
                        {row.key === "level" ? (
                          <span className={w.levelColor}>{w[row.key]}</span>
                        ) : row.key === "wowFactor" ? (
                          <em className="text-nebius-text-muted">{w[row.key]}</em>
                        ) : (
                          w[row.key]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 border-b border-nebius-border">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Schedule</h2>
          <p className="text-lg text-nebius-text-muted max-w-2xl mb-12">
            Choose one track and go deep. Both formats include live mentor support.
          </p>

          <ScheduleTabs />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 hero-gradient" id="register">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build?
          </h2>
          <p className="text-xl text-nebius-text-muted max-w-xl mx-auto mb-4">
            RSVP required. Spots are limited since we provide hands-on support for every attendee.
          </p>
          <p className="text-sm text-nebius-text-dim mb-10">
            Mac mini giveaway for one lucky registered participant.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-nebius-lime hover:bg-nebius-lime-hover text-nebius-navy font-semibold rounded-xl transition-colors text-lg"
            >
              Register Now
            </a>
            <a
              href="#workshops"
              className="px-10 py-4 border border-nebius-border hover:border-nebius-text-dim text-white font-semibold rounded-xl transition-colors text-lg"
            >
              View Workshop Details
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
