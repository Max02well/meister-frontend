import clsx from "clsx";

export default function SkeletonBlock({ className }: { className?: string }) {
  return <div className={clsx("bg-gray-100 rounded animate-pulse", className)} />;
}