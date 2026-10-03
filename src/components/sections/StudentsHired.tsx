import MagneticButton from "@/components/smoothui/magnetic-button";
import Link from "next/link";

export function StudentsHired() {
  return (
    <section className="pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-16 lg:pb-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#062117] via-[#08291B] to-[#04150E] border border-emerald-500/20 p-5 sm:p-10 lg:p-16 shadow-2xl">
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                Real students. Real companies. Real salaries.
              </h2>
              <p className="mt-3.5 sm:mt-4 text-emerald-100/85 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
                Here&apos;s what Greenroots has delivered. Mock interviews, referrals, and recruiter connects — placement service charges apply, because we only charge when we deliver results.
              </p>
              <div className="mt-6 sm:mt-8">
                <MagneticButton asChild strength={15}>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto min-h-[48px] justify-center inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-gradient-to-r from-[#EA580C] to-[#F97316] text-white font-bold rounded-xl hover:from-[#c2410c] hover:to-[#ea580c] shadow-lg shadow-[#EA580C]/30 hover:shadow-xl active:scale-[0.98] transition-all text-center"
                  >
                    Start Your Career Audit →
                  </Link>
                </MagneticButton>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/15 shadow-2xl bg-white/[0.04] backdrop-blur-sm p-2 group">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden">
                <img
                  src="/images/real-students-placed.jpg"
                  alt="Real students in career training and corporate mentorship"
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062117]/60 via-transparent to-transparent pointer-events-none rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
