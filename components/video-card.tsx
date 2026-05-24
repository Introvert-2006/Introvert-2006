'use client';

import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoCardProps {
  id: number;
  title: string;
  category: string;
  description: string;
  tag?: string;
  url: string;
  videoUrl?: string;
  embedUrl?: string;
  thumbnailUrl?: string;
  isShort?: boolean;
}

export function VideoCard({
  id,
  title,
  category,
  description,
  tag,
  url,
  videoUrl,
  embedUrl,
  thumbnailUrl,
  isShort = false,
}: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [thumbnailFailed, setThumbnailFailed] = useState(false);

  const proxifyImageUrl = (sourceUrl: string) => {
    return `https://images.weserv.nl/?url=${encodeURIComponent(sourceUrl)}`;
  };

  const resolvedVideoUrl = videoUrl || url;
  const fileId = url.match(/\/d\/([^\/]+)/)?.[1];
  const resolvedThumbnailUrl = thumbnailUrl
    ? proxifyImageUrl(thumbnailUrl)
    : fileId
      ? proxifyImageUrl(`https://drive.google.com/thumbnail?id=${fileId}&sz=w800`)
      : '';
  const resolvedEmbedUrl = embedUrl || (fileId ? `https://drive.google.com/file/d/${fileId}/preview?usp=sharing` : '');
  const isDirectVideoFile = /\.(mp4|webm|ogg)(\?|$)/i.test(resolvedVideoUrl);
  const modalPanelStyle = isShort
    ? {
        width: 'min(calc(100vw - 1rem), 48rem)',
        maxHeight: 'calc(100dvh - 1rem)',
      }
    : {
        width: 'min(calc(100vw - 1rem), 80rem)',
        maxHeight: 'calc(100dvh - 1rem)',
      };
  const playerShellClassName = isShort
    ? 'mx-auto h-[min(72dvh,44rem)] w-full max-w-[32rem] sm:max-w-[36rem]'
    : 'mx-auto w-full max-w-[72rem]';
  const playerFrameClassName = isShort
    ? 'aspect-[9/16] h-full w-full'
    : 'aspect-video w-full';

  return (
    <>
      <motion.button
        onClick={() => setShowVideo(true)}
        className="group relative w-full overflow-hidden rounded-2xl border border-zinc-800/80 bg-black text-left shadow-lg shadow-black/20"
        whileHover={!isShort ? { scale: 1.05 } : { scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        transition={{ duration: 0.2 }}
      >
        {/* Thumbnail Area */}
        <div className={`relative w-full overflow-hidden bg-black ${isShort ? 'aspect-9/16' : 'aspect-video'}`}>
          {resolvedThumbnailUrl && !thumbnailFailed ? (
            <>
              <img
                src={resolvedThumbnailUrl}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                onError={() => setThumbnailFailed(true)}
              />
              <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/40" />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-linear-to-b from-zinc-900 to-black">
              <div className="flex flex-col items-center gap-3">
                <div className="rounded-full bg-zinc-800 p-4">
                  <Play className="h-6 w-6 fill-white text-white" />
                </div>
              </div>
            </div>
          )}

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="rounded-full bg-white/20 p-5 backdrop-blur-sm"
              animate={{ scale: isHovered ? 1.15 : 1, backgroundColor: isHovered ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)' }}
              transition={{ duration: 0.3 }}
            >
              <Play className="h-8 w-8 fill-white text-white" />
            </motion.div>
          </div>
        </div>

        {/* Content */}
        {isShort ? (
          <div className="space-y-1.5 px-1.5 py-2.5">
            <h3 className="text-xs font-semibold text-white line-clamp-2 leading-tight">
              {title}
            </h3>
            <p className="text-[11px] leading-relaxed text-zinc-400 line-clamp-2">
              {description}
            </p>
          </div>
        ) : (
          <div className="relative space-y-3 border-t border-zinc-800 bg-linear-to-t from-black via-black/80 to-black/0 px-4 py-5 backdrop-blur-sm">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 space-y-1">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  {category}
                </p>
                <h3 className="text-sm font-semibold text-white leading-tight group-hover:text-zinc-100 transition-colors">
                  {title}
                </h3>
              </div>
              {tag && (
                <span className="whitespace-nowrap rounded-full bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-300">
                  {tag}
                </span>
              )}
            </div>
            <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
              {description}
            </p>
          </div>
        )}
      </motion.button>

      {/* Full-Screen Video Modal */}
      <AnimatePresence>
        {showVideo && (resolvedEmbedUrl || resolvedVideoUrl) && (
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center overflow-hidden bg-black/95 p-2 backdrop-blur-lg sm:items-center sm:p-4"
            onClick={() => setShowVideo(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
          <motion.div
            className="relative flex w-full flex-col gap-4 overflow-hidden rounded-2xl bg-black shadow-2xl sm:gap-6"
            style={modalPanelStyle}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Close Button */}
            <motion.button
              onClick={() => setShowVideo(false)}
              className="fixed right-3 top-3 z-60 rounded-full bg-black/70 p-2 text-white/70 backdrop-blur-sm sm:right-4 sm:top-4"
              whileHover={{ scale: 1.15, color: '#ffffff', backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              aria-label="Close video"
            >
              <X className="h-6 w-6" />
            </motion.button>

            {/* Video Player */}
            <div className="flex-none px-3 pt-3 sm:px-6 sm:pt-6">
              <div className={playerShellClassName}>
                <div className={`overflow-hidden rounded-xl shadow-2xl ${playerFrameClassName}`}>
                {resolvedEmbedUrl ? (
                  <iframe
                    src={resolvedEmbedUrl}
                    allow="autoplay; fullscreen"
                    className="h-full w-full"
                    title={title}
                    allowFullScreen
                  />
                ) : isDirectVideoFile ? (
                  <video
                    src={resolvedVideoUrl}
                    controls
                    autoPlay
                    className="h-full w-full bg-black object-contain"
                  />
                ) : (
                  <iframe
                    src={resolvedVideoUrl}
                    allow="autoplay; fullscreen"
                    className="h-full w-full"
                    title={title}
                    allowFullScreen
                  />
                )}
                  </div>
              </div>
            </div>

            {/* Video Info */}
              <div className="shrink-0 overflow-y-auto px-5 pb-7 text-center sm:px-8 sm:pb-10">
                <h2 className="text-lg font-bold text-white sm:text-xl">{title}</h2>
                <p className="mt-3 max-h-[26dvh] overflow-y-auto text-sm leading-relaxed text-zinc-400 sm:max-h-none sm:overflow-visible">
                  {description}
                </p>
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
