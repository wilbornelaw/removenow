import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-cyan-100/70 bg-white/85 backdrop-blur">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/RM_logo.png"
              alt="RemoveNow logo"
              width={148}
              height={44}
              className="h-9 w-auto"
            />
            <span className="text-base font-semibold tracking-tight">RemoveNow</span>
          </Link>
          <p className="mt-3 text-sm text-slate-600">Powered by Shieldify IP</p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-slate-600">
          <Link href="/privacy-policy" className="hover:text-cyan-700">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-cyan-700">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:text-cyan-700">
            Contact
          </Link>
          <Link href="/documentation" className="hover:text-cyan-700">
            Documentation
          </Link>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        (c) 2026 Shieldify IP Co., Ltd. (dba. RemoveNow). All rights reserved.
      </div>
    </footer>
  );
}

