"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Clock, Signal, Laptop, Check, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import TiltCard from "@/components/smoothui/tilt-card";
import BorderBeam from "@/components/smoothui/border-beam";
import MagneticButton from "@/components/smoothui/magnetic-button";
import ShineText from "@/components/smoothui/shine-text";

interface CourseItem {
  title: string;
  tag: string;
  accent: string;
  desc: string;
  duration: string;
  level: string;
  mode: string;
  learn: string[];
  skills: string[];
  roles: string;
  salary: string;
}

const COURSES: CourseItem[] = [
  {
    title: "Power BI 60-Day Mastery Track",
    tag: "High Demand",
    accent: "#166534",
    desc: "From SQL foundations to advanced DAX and live dashboards — the complete, project-led path into a Data Analyst role.",
    duration: "60 days",
    level: "Beginner-friendly",
    mode: "Live + recorded",
    learn: [
      "Data modelling & star-schema relationships",
      "DAX measures, time-intelligence & calculated columns",
      "Power Query ETL & data cleaning",
      "Dashboards, row-level security & publishing to the Service",
    ],
    skills: ["Power BI Desktop", "DAX", "SQL", "Power Query", "RLS"],
    roles: "Data Analyst · BI Developer · Reporting Analyst",
    salary: "₹4–8 LPA",
  },
  {
    title: "Senior Business Analyst Program",
    tag: "Top Earner",
    accent: "#0878E8",
    desc: "Requirements engineering, process modelling, Agile delivery and stakeholder management — the full BA toolkit, end to end.",
    duration: "~10 weeks",
    level: "All levels",
    mode: "Live online",
    learn: [
      "Requirement elicitation, BRD/FRD & user stories",
      "Process modelling with BPMN & workflow mapping",
      "Agile/Scrum delivery, backlog grooming & Jira",
      "SQL for analysis, wireframing & UAT",
    ],
    skills: ["BPMN", "Agile/Scrum", "Jira", "SQL", "Wireframing", "User Stories"],
    roles: "Business Analyst · Product Analyst · Functional Consultant",
    salary: "₹5–9 LPA",
  },
  {
    title: "Full-Stack Software Testing",
    tag: "QA Track",
    accent: "#0284c7",
    desc: "Modern QA built for current hiring — Playwright over legacy Selenium, plus API testing and real test strategy.",
    duration: "90 hours",
    level: "Beginner-friendly",
    mode: "Live + labs",
    learn: [
      "Manual testing, STLC & the defect lifecycle",
      "UI automation with Playwright (JS/TS)",
      "API testing with Postman & REST validation",
      "Test reporting & CI integration basics",
    ],
    skills: ["Playwright", "Postman", "Jira", "STLC", "API Testing"],
    roles: "QA Engineer · Test Analyst · Junior SDET",
    salary: "₹3.5–6 LPA",
  },
  {
    title: "AI-Powered Product Management",
    tag: "AI-Powered",
    accent: "#7c3aed",
    desc: "Product thinking supercharged by AI — from discovery to roadmap, using GPT tools, analytics and Agile delivery.",
    duration: "16 weeks",
    level: "Mid–senior",
    mode: "Live + mentorship",
    learn: [
      "Product discovery, problem framing & PRDs",
      "Prioritisation & roadmapping (RICE, MoSCoW)",
      "Using AI tools for research, specs & analysis",
      "Metrics, experimentation & stakeholder comms",
    ],
    skills: ["Product Strategy", "AI Tools", "Roadmapping", "Agile", "Analytics"],
    roles: "Associate PM · Product Manager · Product Owner",
    salary: "₹8–18 LPA",
  },
  {
    title: "Tricentis Tosca Automation",
    tag: "Automation",
    accent: "#d97706",
    desc: "Enterprise model-based test automation — CI/CD integration, API automation and real project practice with Tosca.",
    duration: "7 weeks",
    level: "QA background",
    mode: "Live + labs",
    learn: [
      "Model-based test design & reusable modules",
      "Test-case design, recovery & maintenance",
      "API & data-driven testing",
      "CI/CD integration & execution reporting",
    ],
    skills: ["Tosca", "CI/CD", "Model-Based Testing", "API Automation"],
    roles: "Automation Engineer · Tosca Specialist · QA Lead",
    salary: "₹6–12 LPA",
  },
  {
    title: "DevSecOps Mastery Track",
    tag: "Cloud + Security",
    accent: "#dc2626",
    desc: "16 modules and 25+ tools — Docker to Kubernetes, Terraform to AWS — building a full, secure delivery pipeline.",
    duration: "3 months",
    level: "Some IT exp.",
    mode: "Cloud labs",
    learn: [
      "Containers & orchestration (Docker, Kubernetes)",
      "Infrastructure as Code with Terraform",
      "CI/CD pipelines with GitHub Actions",
      "Security scanning, secrets (Vault) & AWS",
    ],
    skills: ["Docker", "Kubernetes", "Terraform", "AWS", "GitHub Actions", "SonarQube"],
    roles: "DevOps Engineer · DevSecOps Engineer · Cloud Engineer",
    salary: "₹7–15 LPA",
  },
  {
    title: "Data Analytics for Freshers",
    tag: "Analytics",
    accent: "#059669",
    desc: "A complete entry-level analytics stack — Python, SQL, Excel, Power BI and Tableau — with live projects from week one.",
    duration: "10 weeks",
    level: "Freshers welcome",
    mode: "Live + recorded",
    learn: [
      "Excel & statistics foundations",
      "SQL querying & data wrangling",
      "Python with Pandas for analysis",
      "Dashboards in Power BI & Tableau",
    ],
    skills: ["Python", "SQL", "Power BI", "Tableau", "Excel"],
    roles: "Data Analyst · MIS Analyst · Reporting Analyst",
    salary: "₹3.5–7 LPA",
  },
  {
    title: "Data Science & AI (DSP Track)",
    tag: "Advanced",
    accent: "#4f46e5",
    desc: "Machine learning, deep learning and NLP with portfolio-grade capstone projects — for graduates ready to go deep.",
    duration: "3 months",
    level: "Graduates+",
    mode: "Live + mentorship",
    learn: [
      "Python, statistics & feature engineering",
      "Supervised & unsupervised ML (scikit-learn)",
      "Deep learning & NLP fundamentals",
      "End-to-end capstone & model deployment",
    ],
    skills: ["Python", "ML", "Deep Learning", "NLP", "scikit-learn"],
    roles: "Data Scientist · ML Engineer (Jr) · AI Analyst",
    salary: "₹6–14 LPA",
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-24 lg:pt-28 pb-20">
        {/* Page Hero Header */}
        <section className="bg-gradient-to-b from-[#f3f9f5] to-white py-12 lg:py-16 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#166534]/10 px-4 py-1 text-xs font-semibold text-[#166534] mb-4 border border-[#166534]/20">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              <ShineText baseColor="#166534" shineColor="#15803d" duration={2}>
                8 High-Demand Programs · Industry-Mapped Curriculums
              </ShineText>
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
              High-Demand Tech Tracks Built for 2026
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Every track is built around what employers are hiring for right now — from ₹20,000 onwards, in 2–3 months, freshers to experienced.
            </p>

            {/* Pricing Banner */}
            <div className="relative overflow-hidden mt-8 max-w-4xl mx-auto bg-gradient-to-r from-[#166534] to-[#0f3f21] rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
              <BorderBeam
                colorFrom="#34d399"
                colorTo="#38bdf8"
                duration={7}
                size={130}
                borderWidth={1.5}
                radius={16}
              />
              <div className="relative z-10">
                <div className="text-2xl sm:text-3xl font-black text-amber-300">From ₹20,000 onwards</div>
                <div className="text-sm sm:text-base text-gray-200 mt-1">
                  All programs · <strong>2 to 3 months</strong> · EMI available on request
                </div>
              </div>
              <div className="relative z-10">
                <MagneticButton asChild strength={14}>
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-white text-[#166534] font-bold rounded-xl hover:bg-gray-100 transition-all shadow-md shrink-0 inline-flex items-center gap-2"
                  >
                    Get Fee Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {COURSES.map((course, idx) => (
              <TiltCard
                key={course.title}
                maxTilt={5}
                scale={1.015}
                glare={true}
                glareOpacity={0.1}
                className="h-full rounded-2xl"
              >
                <div className="relative h-full bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
                  {idx === 0 && (
                    <BorderBeam
                      colorFrom="#166534"
                      colorTo="#38bdf8"
                      duration={6}
                      size={100}
                      borderWidth={1.5}
                      radius={16}
                    />
                  )}
                  {/* Card Top */}
                  <div className="p-6 sm:p-8 border-b border-gray-100 bg-[#fbfdfa]">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-xs"
                        style={{ backgroundColor: course.accent }}
                      >
                        {course.tag}
                      </span>
                      <span className="text-xs font-medium text-gray-500">{course.mode}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {course.desc}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500 pt-2 border-t border-gray-100">
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-[#166534]" /> {course.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Signal className="h-3.5 w-3.5 text-[#166534]" /> {course.level}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Laptop className="h-3.5 w-3.5 text-[#166534]" /> {course.mode}
                      </span>
                    </div>
                  </div>

                  {/* Card Bottom */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-3">
                        What you&apos;ll master
                      </h4>
                      <ul className="space-y-2">
                        {course.learn.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                            <Check className="h-4 w-4 text-[#166534] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skill tags */}
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {course.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 text-xs rounded-md bg-gray-100 text-gray-700 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Outcome + Action */}
                    <div className="pt-5 border-t border-gray-100">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                        <div>
                          <div className="text-[11px] uppercase font-bold text-gray-400">Leads to roles</div>
                          <div className="text-xs sm:text-sm font-semibold text-gray-800">{course.roles}</div>
                        </div>
                        <div className="sm:text-right shrink-0">
                          <div className="text-[11px] uppercase font-bold text-gray-400">Typical pay</div>
                          <div className="text-sm font-black text-[#166534]">{course.salary}</div>
                        </div>
                      </div>

                      <MagneticButton asChild strength={10} className="w-full">
                        <Link
                          href="/contact"
                          className="w-full py-2.5 px-4 bg-[#166534] hover:bg-[#14532d] text-white font-semibold text-sm rounded-xl text-center transition-colors block shadow-xs"
                        >
                          Book Free Counselling →
                        </Link>
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Career Audit Callout */}
          <div className="mt-16 bg-[#f3f9f5] border border-[#166534]/20 rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Not sure which course is right for you?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl">
                Book a free career audit session. We&apos;ll review your background, market demand, and salary potential — then recommend the exact track that gives you the strongest return.
              </p>
            </div>
            <MagneticButton asChild strength={15}>
              <Link
                href="/contact"
                className="px-6 py-3 bg-[#166534] text-white font-bold rounded-xl hover:bg-[#14532d] transition-all shadow-md shrink-0 inline-flex items-center gap-2"
              >
                Book Free Audit →
              </Link>
            </MagneticButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
