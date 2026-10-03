import { ImagePlaceholder } from "@/components/placeholders";
import MagneticButton from "@/components/smoothui/magnetic-button";
import Link from "next/link";

export function StudentsHired() {
  return (
    <section className="pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#071D3A] via-[#092244] to-[#040E1C] border border-white/15 p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                Real students. Real companies. Real salaries.
              </h2>
              <p className="mt-4 text-blue-100/85 text-base lg:text-lg leading-relaxed max-w-xl">
                Here&apos;s what Greenroots has delivered. Mock interviews, referrals, and recruiter connects — placement service charges apply, because we only charge when we deliver results.
              </p>
              <div className="mt-8">
                <MagneticButton asChild strength={15}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#0878E8] to-[#00B8E6] text-white font-bold rounded-xl hover:from-[#0766c6] hover:to-[#00a3cc] shadow-lg shadow-[#0878E8]/30 hover:shadow-xl active:scale-[0.98] transition-all"
                  >
                    Start Your Career Audit →
                  </Link>
                </MagneticButton>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/15 shadow-2xl bg-white/[0.04] backdrop-blur-sm p-2">
              <ImagePlaceholder
                label="Placement highlight visual"
                dark
                className="aspect-[4/3] w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
