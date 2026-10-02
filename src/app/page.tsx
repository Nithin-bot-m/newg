import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { StudentsHired } from "@/components/sections/StudentsHired";
import { Locations } from "@/components/sections/Locations";
import { Programs } from "@/components/sections/Programs";
import { Courses } from "@/components/sections/Courses";
import { WhatMakesSpecial } from "@/components/sections/WhatMakesSpecial";
import { Mentors } from "@/components/sections/Mentors";
import { Placement } from "@/components/sections/Placement";
import { Founders } from "@/components/sections/Founders";
import { Testimonials } from "@/components/sections/Testimonials";
import { Comparison } from "@/components/sections/Comparison";
import { HowToJoin } from "@/components/sections/HowToJoin";
import { CampusLife } from "@/components/sections/CampusLife";
import { Career } from "@/components/sections/Career";
import { Results } from "@/components/sections/Results";
import { StudyAbroadDestinations } from "@/components/sections/StudyAbroadDestinations";
import { StudyAbroadServices } from "@/components/sections/StudyAbroadServices";
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
        <Courses />
        <WhatMakesSpecial />
        <Mentors />
        <Placement />
        <Founders />
        <Testimonials />
        <Comparison />
        <HowToJoin />
        <CampusLife />
        <Career />
        <Results />
        <StudyAbroadDestinations />
        <StudyAbroadServices />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
