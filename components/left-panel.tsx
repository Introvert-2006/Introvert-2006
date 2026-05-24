'use client';

import { Mail, Github, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.317 4.369a19.8 19.8 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.447.864-.606 1.249a18.3 18.3 0 0 0-5.443 0c-.16-.385-.397-.874-.61-1.249a.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.07.07 0 0 0-.032.027C.533 9.045-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.084.084 0 0 0 .092-.028 13.14 13.14 0 0 0 1.135-1.845.077.077 0 0 0-.041-.108 13 13 0 0 1-1.78-.85.077.077 0 0 1-.008-.128c.12-.09.24-.183.356-.278a.074.074 0 0 1 .077-.01c3.733 1.706 7.765 1.706 11.453 0a.074.074 0 0 1 .078.01c.116.095.236.188.357.278a.077.077 0 0 1-.007.128 12.3 12.3 0 0 1-1.782.85.077.077 0 0 0-.04.108c.33.64.714 1.225 1.138 1.845a.083.083 0 0 0 .092.028 19.88 19.88 0 0 0 6.002-3.03.082.082 0 0 0 .03-.056c.5-5.177-.838-9.67-3.548-13.661a.061.061 0 0 0-.031-.028ZM8.02 15.331c-1.183 0-2.15-1.086-2.15-2.422 0-1.336.95-2.423 2.15-2.423 1.21 0 2.17 1.096 2.15 2.423 0 1.336-.95 2.422-2.15 2.422Zm7.98 0c-1.183 0-2.15-1.086-2.15-2.422 0-1.336.95-2.423 2.15-2.423 1.21 0 2.17 1.096 2.15 2.423 0 1.336-.94 2.422-2.15 2.422Z" />
    </svg>
  );
}

interface LeftPanelProps {
  name: string;
  title: string;
  email: string;
  instagram?: string;
  discord?: string;
  tag: string;
  bio: string;
  philosophy: string;
  stats: {
    projects_completed: number;
    clients: number;
    dedication_level: string;
  };
}

export function LeftPanel({
  name,
  title,
  email,
  instagram,
  discord,
  tag,
  bio,
  philosophy,
  stats,
}: LeftPanelProps) {
  return (
    <div className="flex h-full min-h-0 flex-col bg-black">
      {/* Header */}
      <div className="shrink-0 space-y-4 border-b border-zinc-800 px-5 py-5 sm:px-6 sm:py-6">
        {/* Status Tag and Social Icons */}
        <div className="flex items-center justify-between gap-2">
          <div className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-zinc-900 px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-pulse"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-zinc-300 whitespace-nowrap">{tag}</span>
          </div>

          {/* Social Icons */}
          <div className="flex shrink-0 gap-1.5">
            <motion.a
              href={instagram || '#'}
              className="rounded-lg bg-zinc-900 p-2 text-zinc-400"
              aria-label="Instagram"
              whileHover={{ scale: 1.1, backgroundColor: '#27272a', color: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Instagram className="h-3.5 w-3.5" />
            </motion.a>
            <motion.a
              href={discord || '#'}
              className="rounded-lg bg-zinc-900 p-2 text-zinc-400"
              aria-label="Discord"
              whileHover={{ scale: 1.1, backgroundColor: '#27272a', color: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <DiscordIcon className="h-3.5 w-3.5" />
            </motion.a>
            <motion.a
              href={`mailto:${email}`}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-1 text-sm font-semibold text-black hover:bg-zinc-100"
              whileHover={{ scale: 1.02, boxShadow: '0 10px 25px rgba(255,255,255,0.15)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Mail className="h-4 w-4" />
              Hire Me
            </motion.a>
          </div>
        </div>

        {/* Name and Title */}
        <div className="space-y-0.5">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-[2rem] xl:text-[2.15rem]">{name}</h1>
          <p className="text-sm font-medium text-zinc-400 sm:text-[0.95rem]">{title}</p>
        </div>
      </div>

      <div className="grid flex-1 min-h-0 gap-4 px-5 py-5 sm:grid-cols-2 sm:gap-5 sm:px-6 sm:py-6 xl:grid-cols-1">
        <section className="space-y-2.5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
            About
          </h2>
          <p className="text-sm leading-relaxed text-zinc-300 sm:text-[0.95rem]">{bio}</p>
        </section>

        <section className="space-y-2.5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
            Philosophy
          </h2>
          <p className="text-xs leading-relaxed text-zinc-400 italic sm:text-[0.85rem]">
            &ldquo;{philosophy}&rdquo;
          </p>
        </section>

        <section className="space-y-3 sm:col-span-2 xl:col-span-1">
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
            Track Record
          </h2>
          <div className="grid grid-cols-3 gap-2.5">
            <div className="rounded-lg border border-zinc-800/50 bg-zinc-900/60 p-3 text-center">
              <p className="text-lg font-bold text-white">{stats.projects_completed}</p>
              <p className="mt-1.5 text-xs text-zinc-500">Projects</p>
            </div>
            <div className="rounded-lg border border-zinc-800/50 bg-zinc-900/60 p-3 text-center">
              <p className="text-lg font-bold text-white">{stats.clients}</p>
              <p className="mt-1.5 text-xs text-zinc-500">Clients</p>
            </div>
            <div className="rounded-lg border border-zinc-800/50 bg-zinc-900/60 p-3 text-center">
              <p className="text-base font-bold text-white">{stats.dedication_level}</p>
              <p className="mt-1.5 text-xs text-zinc-500">Dedication</p>
            </div>
          </div>
        </section>

        <section className="hidden lg:block mt-auto space-y-3 sm:col-span-2 xl:col-span-1 ">
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
            Let&apos;s Connect
          </h2>
          <p className="text-sm leading-relaxed text-zinc-300 sm:text-[0.95rem]">
            Have a project in mind? Let&apos;s create something amazing together.
          </p>
          <p className="pt-1 text-xs text-zinc-600">© 2026 Gagan Kapoor, Made by <Link href="https://dub.sh/shoto" target="_blank" className="text-blue-400 hover:text-blue-300">999shotoo</Link></p>
        </section>
      </div>
    </div>
  );
}
