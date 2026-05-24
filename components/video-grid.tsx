'use client';

import Link from 'next/link';
import { VideoCard } from './video-card';

interface VideoGridProps {
  shorts?: Array<{
    id: number;
    title: string;
    category: string;
    description: string;
    tag?: string;
    url: string;
  }>;
  videos?: Array<{
    id: number;
    title: string;
    category: string;
    description: string;
    tag?: string;
    url: string;
  }>;
}

export function VideoGrid({ shorts = [], videos = [] }: VideoGridProps) {
  const hasContent = shorts.length > 0 || videos.length > 0;

  return (
    <div className="w-full h-full">
      <div className={`p-4 sm:p-5 md:p-6 ${hasContent ? 'space-y-10' : 'flex items-center justify-center h-full'}`}>
        {hasContent ? (
          <>
            {/* Shorts Section */}
            {shorts.length > 0 && (
              <div>
                <div className="mb-5 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  Reels & Shorts
                </div>
                <div className="grid auto-rows-max gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
                  {shorts.map((short) => (
                    <VideoCard key={short.id} {...short} isShort={true} />
                  ))}
                </div>
              </div>
            )}

            {/* Videos Section */}
            {videos.length > 0 && (
              <div>
                <div className="mb-5 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  Videos
                </div>
                <div className="grid auto-rows-max gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                  {videos.map((video) => (
                    <VideoCard key={video.id} {...video} isShort={false} />
                  ))}
                </div>
              </div>
            )}

            {/* Footer spacing */}
            <div className="h-8" />
          </>
        ) : (
          <div className="text-center">
            <p className="text-sm text-zinc-500">No content yet</p>
          </div>
        )}
      </div>
      <section className="block lg:hidden mt-auto space-y-3 sm:col-span-2 xl:col-span-1 p-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
          Let&apos;s Connect
        </h2>
        <p className="text-sm leading-relaxed text-zinc-300 sm:text-[0.95rem]">
          Have a project in mind? Let&apos;s create something amazing together.
        </p>
        <p className="pt-1 text-xs text-zinc-600">© 2026 Gagan Kapoor, Made by <Link href="https://dub.sh/shoto" target="_blank" className="text-blue-400 hover:text-blue-300">999shotoo</Link></p>
      </section>
    </div>
  );
}
