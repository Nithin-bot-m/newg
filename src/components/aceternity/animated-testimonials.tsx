"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src?: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 6000);
      return () => clearInterval(interval);
    }
     
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div
      className={cn(
        "mx-auto max-w-sm px-2 sm:px-4 py-8 sm:py-12 font-sans antialiased md:max-w-5xl md:px-8 md:py-20",
        className,
      )}
    >
      <div className="relative grid grid-cols-1 gap-6 sm:gap-10 md:grid-cols-2 md:gap-20 items-center">
        <div>
          <div className="relative h-56 w-56 sm:h-72 sm:w-72 md:h-96 md:w-96 mx-auto">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`avatar-${testimonial.name}`}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    rotateY: randomRotateY(),
                  }}
                  animate={
                    index === active
                      ? {
                          opacity: 1,
                          scale: 1,
                          rotateY: 0,
                          zIndex: 10,
                        }
                      : {
                          opacity: 0,
                          scale: 0.9,
                          rotateY: randomRotateY(),
                          zIndex: 0,
                        }
                  }
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    rotateY: 90,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <div className="h-full w-full rounded-2xl bg-gradient-to-br from-[#0878E8]/30 via-zinc-800 to-zinc-900 ring-1 ring-white/10 flex items-center justify-center text-5xl sm:text-6xl font-black text-[#0878E8]">
                    {testimonial.name.charAt(0).toUpperCase()}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-2 sm:py-4">
          <motion.div
            key={`quote-${active}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-200 md:text-3xl">
              {testimonials[active].name}
            </h3>
            <p className="text-xs sm:text-sm text-[#0878E8] font-medium md:text-base mt-0.5">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-4 sm:mt-6 text-sm sm:text-base font-normal text-neutral-300 md:text-lg leading-relaxed">
              {testimonials[active].quote}
            </motion.p>
          </motion.div>

          <div className="mt-6 sm:mt-8 flex gap-3">
            <button
              onClick={handlePrev}
              className="group flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 active:scale-95"
              aria-label="Previous testimonial"
            >
              <svg
                className="h-4 w-4 -translate-x-[1px] transition-transform group-hover:-translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="group flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 active:scale-95"
              aria-label="Next testimonial"
            >
              <svg
                className="h-4 w-4 translate-x-[1px] transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
