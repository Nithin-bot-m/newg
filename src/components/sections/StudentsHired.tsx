import { ImagePlaceholder } from "@/components/placeholders";
import BorderBeam from "@/components/smoothui/border-beam";
import MagneticButton from "@/components/smoothui/magnetic-button";
import Link from "next/link";

export function StudentsHired() {
  return (
    <section className="pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#071D3A] via-[#0A2A54] to-[#04142B] border border-[#00AFA8]/40 p-8 sm:p-12 lg:p-16">
          <BorderBeam
            colorFrom="#34d399"
            colorTo="#38bdf8"
            duration={7}
            size={140}
            borderWidth={1.5}
            radius={24}
          />
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                Real students. Real companies. Real salaries.
              </h2>
              <p className="mt-4 text-emerald-100/80 text-base lg:text-lg">
                Here&apos;s what Greenroots has delivered. Mock interviews, referrals, and recruiter connects — placement service charges apply, because we only charge when we deliver results.
              </p>
              <div className="mt-8">
                <MagneticButton asChild strength={15}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0878E8] to-[#00B8E6] text-white font-bold rounded-lg hover:from-[#0766c6] hover:to-[#00a3cc] shadow-lg shadow-[#0878E8]/25 transition-all"
                  >
                    Start Your Career Audit →
                  </Link>
                </MagneticButton>
              </div>
            </div>
            <ImagePlaceholder
              label="Placement highlight visual"
              dark
              className="aspect-[4/3] w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
