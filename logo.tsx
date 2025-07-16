import { cn } from "@/lib/utils";
import { Cpu } from "lucide-react";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-lg font-bold", className)}>
      <div className="p-1.5 bg-primary/20 rounded-lg">
        <Cpu className="w-5 h-5 text-primary" />
      </div>
      <span className="font-headline">ContentForge AI</span>
    </Link>
  );
}
