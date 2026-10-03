import { cn } from "@/lib/utils";

/**
 * GROOTS brand logo.
 *
 * Two variants, two source files:
 *
 *   variant="light"  → groots-logo-light.png (transparent bg, dark text
 *                      inverted to white, gradient icon preserved). Use on
 *                      DARK backgrounds (Hero, Footer). Renders directly with
 *                      NO white pill wrapper — the logo blends into the
 *                      background.
 *
 *   variant="dark"   → groots-logo.png (original, white bg). Use on LIGHT
 *                      backgrounds (Header). Renders directly — the white
 *                      bg blends into the surrounding white section.
 *
 * Both variants accept showTagline to control whether the full wordmark +
 * tagline PNG is shown, or a more compact icon+wordmark layout is preferred.
 * (Currently both source PNGs include the tagline, so showTagline=false just
 * constrains the height to make it visually more compact.)
 */

const SRC_LIGHT = "/logos/groots-logo-light.png"; // transparent bg, white text
const SRC_DARK = "/logos/groots-logo.png";        // white bg, dark text

export function Logo({
  variant = "light",
  showTagline = true,
  className,
  imgClassName,
}: {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
  imgClassName?: string;
}) {
  const src = variant === "light" ? SRC_LIGHT : SRC_DARK;

  return (
    <img
      src={src}
      alt="GROOTS — Education to Employment"
      className={cn(
        "object-contain",
        !className?.includes("h-") && (showTagline ? "h-10" : "h-9"),
        imgClassName,
        className,
      )}
    />
  );
}
