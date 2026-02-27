"use client";

import Link from "next/link";
import { useState } from "react";

const REGISTER_URL = "https://cerebralvalley.ai/e/nebius-build-sf";

function NebiusLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="40" fill="#BAFF00" />
      <path
        d="M56 150V82C56 65.4 69.4 52 86 52C102.6 52 116 65.4 116 82V118C116 134.6 129.4 148 146 148C162.6 148 176 134.6 176 118V50"
        stroke="#0A1628"
        strokeWidth="24"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-nebius-border bg-nebius-dark/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <NebiusLogo className="w-8 h-8" />
          <span className="text-lg font-semibold text-white">
            nebius<span className="text-nebius-lime">.builders</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/#workshops" className="text-sm text-nebius-text-muted hover:text-white transition-colors">
            Workshops
          </Link>
          <a
            href="https://docs.tokenfactory.nebius.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-nebius-text-muted hover:text-white transition-colors"
          >
            Docs
          </a>
          <a
            href="https://tokenfactory.nebius.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-nebius-text-muted hover:text-white transition-colors"
          >
            Token Factory
          </a>
          <a
            href="https://nebius.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-nebius-text-muted hover:text-white transition-colors"
          >
            AI Cloud
          </a>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-nebius-lime hover:bg-nebius-lime-hover text-nebius-navy text-sm font-semibold rounded-lg transition-colors"
          >
            Register Now
          </a>
        </div>

        <button
          className="md:hidden text-nebius-text-muted"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-nebius-border bg-nebius-dark px-6 py-4 flex flex-col gap-4">
          <Link href="/#workshops" className="text-sm text-nebius-text-muted hover:text-white" onClick={() => setMenuOpen(false)}>Workshops</Link>
          <a href="https://docs.tokenfactory.nebius.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-nebius-text-muted hover:text-white" onClick={() => setMenuOpen(false)}>Docs</a>
          <a href="https://tokenfactory.nebius.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-nebius-text-muted hover:text-white" onClick={() => setMenuOpen(false)}>Token Factory</a>
          <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-nebius-lime text-nebius-navy text-sm font-semibold rounded-lg text-center" onClick={() => setMenuOpen(false)}>Register Now</a>
        </div>
      )}
    </nav>
  );
}
