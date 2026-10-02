"use client";

import { Marquee } from "@/components/magicui/marquee";

const ROW_1_LOGOS = [
  { name: "TCS", logo: "/logos/companies/tcs.svg" },
  { name: "Infosys", logo: "/logos/companies/infosys.svg" },
  { name: "Accenture", logo: "/logos/companies/accenture.svg" },
  { name: "Wipro", logo: "/logos/companies/wipro.svg" },
  { name: "Cognizant", logo: "/logos/companies/cognizant.svg" },
  { name: "Capgemini", logo: "/logos/companies/capgemini.svg" },
  { name: "Deloitte", logo: "/logos/companies/deloitte.svg" },
  { name: "HCLTech", logo: "/logos/companies/hcltech.svg" },
  { name: "Tech Mahindra", logo: "/logos/companies/techmahindra.svg" },
];

const ROW_2_LOGOS = [
  { name: "LTIMindtree", logo: "/logos/companies/ltimindtree.svg" },
  { name: "IBM", logo: "/logos/companies/ibm.svg" },
  { name: "Microsoft", logo: "/logos/companies/microsoft.svg" },
  { name: "Amazon", logo: "/logos/companies/amazon.svg" },
  { name: "Oracle", logo: "/logos/companies/oracle.svg" },
  { name: "Google", logo: "/logos/companies/google.svg" },
  { name: "Cisco", logo: "/logos/companies/cisco.svg" },
  { name: "Salesforce", logo: "/logos/companies/salesforce.svg" },
  { name: "Intel", logo: "/logos/companies/intel.svg" },
];

export function LogoStrip() {
  return (
    <section className="py-10 sm:py-14 bg-white overflow-hidden border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
          Hiring Partners & Alumni Recruiters
        </p>
        <div className="relative w-full overflow-hidden space-y-3.5 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          {/* Row 1 moving left */}
          <Marquee
            reverse={false}
            pauseOnHover={true}
            duration="28s"
            gap="1.25rem"
            repeat={4}
          >
            {ROW_1_LOGOS.map((c) => (
              <div
                key={c.name}
                className="h-16 sm:h-20 w-36 sm:w-48 shrink-0 rounded-xl bg-gray-50/70 hover:bg-white border border-gray-100 hover:border-[#FC6C18] shadow-xs hover:shadow-sm flex items-center justify-center p-3 sm:p-4 transition-all duration-300"
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-7 sm:h-8 w-auto max-w-[110px] sm:max-w-[130px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </Marquee>

          {/* Row 2 moving right */}
          <Marquee
            reverse={true}
            pauseOnHover={true}
            duration="28s"
            gap="1.25rem"
            repeat={4}
          >
            {ROW_2_LOGOS.map((c) => (
              <div
                key={c.name}
                className="h-16 sm:h-20 w-36 sm:w-48 shrink-0 rounded-xl bg-gray-50/70 hover:bg-white border border-gray-100 hover:border-[#FC6C18] shadow-xs hover:shadow-sm flex items-center justify-center p-3 sm:p-4 transition-all duration-300"
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-7 sm:h-8 w-auto max-w-[110px] sm:max-w-[130px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
