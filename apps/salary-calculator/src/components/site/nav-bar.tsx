import { Badge } from "@workspace/ui/components/badge";
import { LanguageToggle } from "./language-toggle";
import { SectionNav } from "./section-nav";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";

export function NavBar() {
  return (
    <nav className="sticky top-0 bg-muted z-10">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-2">
          <Image src={"/hfu-icon-filled.svg"} alt={""} width={30} height={30} />
          <p className="hidden font-bold sm:inline">Hvad får jeg udbetalt</p>
        </div>
        <SectionNav />
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
