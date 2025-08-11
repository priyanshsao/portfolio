import { cn } from "@/lib/utils";

interface ShimmerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Shimmer({ children, className }: ShimmerProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:400%_100%] animate-shimmer dark:from-gray-800 dark:via-gray-700 dark:to-gray-800",
        className
      )}
    >
      {children}
    </div>
  );
}