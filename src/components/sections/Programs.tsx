"use client";

import Link from "next/link";
import { ImagePlaceholder } from "@/components/placeholders";
import { ArrowRight } from "lucide-react";
import { TiltCard } from "@/components/smoothui/tilt-card";
import { BorderBeam } from "@/components/smoothui/border-beam";
import { MagneticButton } from "@/components/smoothui/magnetic-button";
import { ShineText } from "@/components/smoothui/shine-text";

const PROGRAMS = [
  {
    title: "Power BI 60-Day Mastery Track",
    tag: "High Demand",
    points: [
      "From SQL foundations to advanced DAX and live dashboards",
      "60 days · Beginner-friendly · Live + recorded",
      "Power BI Desktop, Power Query, Power BI Service",
    ],
    accent: "#0878E8",
  },
  {
    title: "Senior Business Analyst Program",
    tag: "Top Earner",
    points: [
      "Requirements engineering, process modelling & stakeholder mgmt",
      "~10 weeks · All levels · Live online",
      "BPMN, Agile/Scrum, Jira, User Stories, Wireframing",
    ],
    accent: "#00A86B",
  },
  {
    title: "DevSecOps Mastery Track",
    tag: "Cloud + Security",
    points: [
      "16 modules and 25+ tools — Docker to Kubernetes",
      "3 months · Some IT exp. · Cloud labs",
      "Terraform, AWS, GitHub Actions, SonarQube",
    ],
    accent: "#e74c8c",
  },
];

export function Programs() {
  return (
    <section id="courses" className="py-16 sm:py-20 lg:py-24 bg-gray-50/80 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex mb-3.5">
            <ShineText
              text="⚡ INDUSTRY-ALIGNED TRACKS"
              className="text-xs font-bold uppercase tracking-wider text-[#0878E8] bg-[#0878E8]/10 px-4 py-1.5 rounded-full border border-[#0878E8]/20"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071D3A] tracking-tight">
            High-Demand Tech Tracks Built for 2026
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Data Analytics, Business Analysis, DevSecOps, Power BI, AI Product Management, Automation Testing, Cloud, and Data Science.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PROGRAMS.map((program) => (
            <TiltCard
              key={program.title}
              className="relative bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-200/80"
              maxTilt={6}
              glareColor={`rgba(${parseInt(program.accent.slice(1,3),16)}, ${parseInt(program.accent.slice(3,5),16)}, ${parseInt(program.accent.slice(5,7),16)}, 0.16)`}
            >
              {/* SmoothUI: BorderBeam animated border glow */}
              <BorderBeam
                size={160}
                duration={7}
                colorFrom={program.accent}
                colorTo="#00AFA8"
              />
              <div className="flex flex-col h-full">
                <ImagePlaceholder
                  label="Programme cover image"
                  className="aspect-[16/10] w-full"
                />
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <span
                    className="inline-flex w-fit items-center px-3 py-1 rounded-full text-xs font-bold mb-3.5 tracking-wide"
                    style={{
                      backgroundColor: `${program.accent}18`,
                      color: program.accent,
                    }}
                  >
                    {program.tag}
                  </span>
                  <h3 className="text-lg lg:text-xl font-bold text-[#071D3A] leading-snug">
                    {program.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5 flex-1">
                    {program.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-gray-600 leading-normal"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: program.accent }}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      href="/courses"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0878E8] hover:gap-2.5 transition-all"
                    >
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        <div className="mt-12 text-center flex justify-center">
          <MagneticButton
            href="/courses"
            className="px-8 py-3.5 bg-[#071D3A] text-white font-bold rounded-xl hover:bg-[#0c2e59] transition-all shadow-lg shadow-[#071D3A]/15 hover:shadow-xl active:scale-[0.98] inline-flex items-center gap-2"
          >
            View All 8 Programs →
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
