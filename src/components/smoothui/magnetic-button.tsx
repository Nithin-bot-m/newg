"use client";

import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, useReducedMotion, useSpring } from "motion/react";
import React, { isValidElement, useCallback, useEffect, useRef, useState } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const magneticButtonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        default: "h-10 px-4 py-2",
        icon: "h-10 w-10",
        lg: "h-11 rounded-md px-8",
        sm: "h-9 rounded-md px-3",
      },
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-foreground underline-offset-4 hover:underline",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
    },
  }
);

export type MagneticButtonProps = {
  children: ReactNode;
  strength?: number;
  radius?: number;
  springConfig?: { duration?: number; bounce?: number };
  disabled?: boolean;
  asChild?: boolean;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e?: any) => void;
} & VariantProps<typeof magneticButtonVariants> &
  React.HTMLAttributes<HTMLElement> &
  Record<string, any>;

const MagneticButton = ({
  children,
  strength = 0.3,
  radius = 150,
  springConfig = { bounce: 0.1, duration: 0.4 },
  disabled = false,
  asChild = false,
  variant,
  size,
  className,
  ...props
}: MagneticButtonProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [isHoverDevice, setIsHoverDevice] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const x = useSpring(0, {
    bounce: springConfig.bounce ?? 0.1,
    duration: springConfig.duration ?? 0.4,
  });
  const y = useSpring(0, {
    bounce: springConfig.bounce ?? 0.1,
    duration: springConfig.duration ?? 0.4,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsHoverDevice(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsHoverDevice(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const isEffectDisabled = disabled || shouldReduceMotion || !isHoverDevice;

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (isEffectDisabled || !buttonRef.current) {
        return;
      }

      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = event.clientX - centerX;
      const distanceY = event.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < radius) {
        const factor = 1 - distance / radius;
        const moveX = distanceX * strength * factor;
        const moveY = distanceY * strength * factor;
        x.set(moveX);
        y.set(moveY);
      } else {
        x.set(0);
        y.set(0);
      }
    },
    [isEffectDisabled, radius, strength, x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const buttonClasses = cn(magneticButtonVariants({ className, size, variant }));

  const renderContent = () => {
    // If asChild is true, or if child is already a valid React element (e.g. <button>, <a>, <Link>),
    // use Slot to merge attributes directly onto the child, preventing any nested <button> HTML error.
    if (asChild || (isValidElement(children) && !props.href)) {
      return (
        <Slot className={buttonClasses} ref={buttonRef as any} {...props}>
          {children}
        </Slot>
      );
    }

    if (props.href) {
      const isExternal =
        props.href.startsWith("http") ||
        props.href.startsWith("mailto") ||
        props.href.startsWith("tel") ||
        props.href.startsWith("//");

      if (isExternal) {
        return (
          <a
            href={props.href}
            target={props.target}
            rel={props.rel ?? (props.target === "_blank" ? "noopener noreferrer" : undefined)}
            className={buttonClasses}
            ref={buttonRef as any}
            {...props}
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          href={props.href}
          target={props.target}
          rel={props.rel}
          className={buttonClasses}
          ref={buttonRef as any}
          {...props}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        className={buttonClasses}
        disabled={disabled}
        ref={buttonRef}
        type={(props.type as any) || "button"}
        {...props}
      >
        {children}
      </button>
    );
  };

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: Mouse events are for visual effect, not interaction
    <div
      className="inline-block"
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={wrapperRef}
      role="presentation"
      style={{
        margin: `-${radius / 2}px`,
        padding: `${radius / 2}px`,
      }}
    >
      <motion.div style={{ x, y }}>
        {renderContent()}
      </motion.div>
    </div>
  );
};

export { MagneticButton };
export default MagneticButton;
