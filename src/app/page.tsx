import { About } from "@/components/About";
import { CareerJourney } from "@/components/CareerJourney";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <div className="site-main">
        <main>
          <Hero />
          <About />
          <CareerJourney />
          <TechStack />
          <Portfolio />
          <Contact />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
