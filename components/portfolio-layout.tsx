'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { LeftPanel } from './left-panel';
import { VideoGrid } from './video-grid';

interface PortfolioLayoutProps {
  portfolioData: any;
}

export function PortfolioLayout({ portfolioData }: PortfolioLayoutProps) {
  const { portfolio_owner, shorts = [], videos = [] } = portfolioData;

  return (
    <div className="min-h-screen w-full bg-black text-white overflow-x-hidden lg:h-screen lg:overflow-hidden">
      {/* Desktop Layout: Split screen - Left 30%, Right 70% */}
      <div className="hidden lg:grid h-full grid-cols-[30%_70%] items-stretch">
        {/* Left Panel - Fixed responsive column */}
        <div className="sticky top-0 h-screen border-r border-zinc-800">
          <LeftPanel
            name={portfolio_owner.name}
            title={portfolio_owner.title}
            email={portfolio_owner.email}
            tag={portfolio_owner.about.tag}
            bio={portfolio_owner.about.bio}
            philosophy={portfolio_owner.about.philosophy}
            stats={portfolio_owner.about.stats}
            instagram={portfolio_owner.instagram}
            discord={portfolio_owner.discord}
          />
        </div>

        {/* Right Panel - Independent scroll */}
        <ScrollArea className="h-screen min-h-0">
          <VideoGrid shorts={shorts} videos={videos} />
        </ScrollArea>
      </div>

      {/* Tablet/Mobile Layout: Stacked vertically */}
      <div className="lg:hidden flex flex-col">
        {/* Left Panel - Compact top section */}
        <div className="shrink-0 border-b border-zinc-800">
          <LeftPanel
            name={portfolio_owner.name}
            title={portfolio_owner.title}
            email={portfolio_owner.email}
            tag={portfolio_owner.about.tag}
            bio={portfolio_owner.about.bio}
            philosophy={portfolio_owner.about.philosophy}
            stats={portfolio_owner.about.stats}
            instagram={portfolio_owner.instagram}
            discord={portfolio_owner.discord}
          />
        </div>

        {/* Videos Section - Flowing content on mobile */}
        <div>
          <VideoGrid shorts={shorts} videos={videos} />
        </div>
      </div>
    </div>
  );
}
