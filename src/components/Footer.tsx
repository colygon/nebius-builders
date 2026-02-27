import Link from "next/link";

function NebiusLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="20" fill="#BAFF00" />
      <path
        d="M30 75V40C30 33.4 35.4 28 42 28C48.6 28 54 33.4 54 40V60C54 66.6 59.4 72 66 72C72.6 72 78 66.6 78 60V25"
        stroke="#0A1628"
        strokeWidth="12"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-nebius-border bg-nebius-darker">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <NebiusLogo className="w-8 h-8" />
              <span className="text-lg font-semibold text-white">
                nebius<span className="text-nebius-lime">.builders</span>
              </span>
            </div>
            <p className="text-sm text-nebius-text-muted leading-relaxed">
              Deploy real AI agents with one click. Powered by Nebius AI Cloud infrastructure.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Workshops</h4>
            <ul className="space-y-3">
              <li><Link href="/workshops/local-first" className="text-sm text-nebius-text-muted hover:text-white transition-colors">Local-First + Token Factory</Link></li>
              <li><Link href="/workshops/h200-gpu" className="text-sm text-nebius-text-muted hover:text-white transition-colors">Dedicated H200 GPU</Link></li>
              <li><Link href="/workshops/kubernetes" className="text-sm text-nebius-text-muted hover:text-white transition-colors">Kubernetes</Link></li>
              <li><Link href="/workshops/robotics" className="text-sm text-nebius-text-muted hover:text-white transition-colors">Robotics + SO-ARM100</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="https://nebius.com" target="_blank" rel="noopener noreferrer" className="text-sm text-nebius-text-muted hover:text-white transition-colors">Nebius AI Cloud</a></li>
              <li><a href="https://nebius.com/token-factory" target="_blank" rel="noopener noreferrer" className="text-sm text-nebius-text-muted hover:text-white transition-colors">Token Factory</a></li>
              <li><a href="#" className="text-sm text-nebius-text-muted hover:text-white transition-colors">OpenClaw Docs</a></li>
              <li><a href="#" className="text-sm text-nebius-text-muted hover:text-white transition-colors">ClawdBody</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Community</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-nebius-text-muted hover:text-white transition-colors">Discord</a></li>
              <li><a href="#" className="text-sm text-nebius-text-muted hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="text-sm text-nebius-text-muted hover:text-white transition-colors">Twitter / X</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-nebius-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-nebius-text-dim">&copy; 2026 nebius.builders &mdash; Powered by Nebius AI Cloud. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-nebius-text-dim hover:text-nebius-text-muted transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-nebius-text-dim hover:text-nebius-text-muted transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
