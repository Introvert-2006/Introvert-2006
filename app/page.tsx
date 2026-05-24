import { PortfolioLayout } from '@/components/portfolio-layout';
import { portfolioData } from '@/lib/portfolio-data';

export default function Page() {
  return (
    <main className="w-full bg-black">
      <PortfolioLayout portfolioData={portfolioData} />
    </main>
  );
}
