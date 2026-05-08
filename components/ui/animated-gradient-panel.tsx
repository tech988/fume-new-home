import type { ReactNode } from "react";
import { cn } from "@/lib/utils/class-names";

export const AnimatedGradientPanel = ({
  children,
  className
}: {
  readonly children: ReactNode;
  readonly className?: string;
}) => (
  <div className={cn("fume-gradient-panel", className)}>
    <div className="fume-gradient-panel__orb fume-gradient-panel__orb--primary" aria-hidden="true" />
    <div className="fume-gradient-panel__orb fume-gradient-panel__orb--secondary" aria-hidden="true" />
    <div className="relative z-10">{children}</div>
  </div>
);
