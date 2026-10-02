import { AnimatedTestimonials } from "@/components/aceternity/animated-testimonials";

const TESTIMONIALS = [
  {
    quote:
      "The Power BI track was exactly what I needed. Rushi's training style is very practical — we worked on real dashboards from week one. Got placed at Deloitte within 2 months of completing the program.",
    name: "Graduate One",
    designation: "Power BI 60-Day Mastery Track",
  },
  {
    quote:
      "I came in as a fresher with zero IT knowledge. The career audit helped me find the BA path and the training was incredibly structured. Cleared my first interview at Infosys in the third month.",
    name: "Graduate Two",
    designation: "Senior Business Analyst Program",
  },
  {
    quote:
      "DevSecOps is a niche skill and Greenroots covers it in incredible depth. Docker, Kubernetes, Terraform — all covered with live cloud labs. The content is premium and the support doesn't stop after training.",
    name: "Graduate Three",
    designation: "DevSecOps Mastery Track",
  },
  {
    quote:
      "After 2 years of a gap, I was nervous to re-enter IT. Greenroots made it stress-free — the resume rebuild and LinkedIn profile update alone got me 4 interview calls in the first week after posting.",
    name: "Graduate Four",
    designation: "Full-Stack Software Testing",
  },
  {
    quote:
      "Tosca training here is unlike anything on YouTube. They use actual enterprise project structures, not toy examples. The mock interviews were harder than the real ones — which is exactly what you need.",
    name: "Graduate Five",
    designation: "Tricentis Tosca Automation",
  },
  {
    quote:
      "I was scared to speak in English. After Greenroots training, I cleared 3 interviews and got placed.",
    name: "CRT Graduate",
    designation: "Campus Recruitment Training",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 overflow-hidden relative bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            What Our Graduates Say
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Real students. Real companies. Real salaries. Here&apos;s what Greenroots has delivered.
          </p>
        </div>
        <AnimatedTestimonials testimonials={TESTIMONIALS} autoplay />
      </div>
    </section>
  );
}
