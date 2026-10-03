import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { StudentsHired } from "@/components/sections/StudentsHired";
import { Locations } from "@/components/sections/Locations";
import { Programs } from "@/components/sections/Programs";
import { Founders } from "@/components/sections/Founders";
import { Testimonials } from "@/components/sections/Testimonials";
import { CampusLife } from "@/components/sections/CampusLife";
import { Results } from "@/components/sections/Results";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoStrip />
        <StudentsHired />
        <Locations />
        <Programs />
        <Founders />
        <Testimonials />
        <CampusLife />
        <Results />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
