import { ImagePlaceholder } from "@/components/placeholders";

export function StudentsHired() {
  return (
    <section className="pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#052114] via-[#083820] to-[#03170e] border border-[#084428]/40 p-8 sm:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                Real students. Real companies. Real salaries.
              </h2>
              <p className="mt-4 text-emerald-100/80 text-base lg:text-lg">
                Here&apos;s what Greenroots has delivered. Mock interviews, referrals, and recruiter connects — placement service charges apply, because we only charge when we deliver results.
              </p>
              <button className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#FC6C18] text-white font-bold rounded-lg hover:bg-[#e55a0a] shadow-lg shadow-[#FC6C18]/25 transition-all">
                Start Your Career Audit
              </button>
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
