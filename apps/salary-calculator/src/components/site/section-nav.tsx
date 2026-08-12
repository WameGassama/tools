"use client";

import { useEffect, useState } from "react";

import { useLanguage } from "@/src/lib/i18n/language-context";
import { cn } from "@/src/lib/utils";

const SECTION_IDS = ["beregner", "saadan-beregnes", "faq"] as const;

export function SectionNav() {
  const { t } = useLanguage();
  const sections = [
    { id: SECTION_IDS[0], label: t.sectionNav.beregner },
    { id: SECTION_IDS[1], label: t.sectionNav.saadanBeregnes },
    { id: SECTION_IDS[2], label: t.sectionNav.faq },
  ];
  const [activeId, setActiveId] = useState<string>(SECTION_IDS[0]);

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label={t.sectionNav.ariaLabel}
      className="hidden items-center gap-1 rounded-full bg-muted p-1 md:flex"
    >
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          onClick={() => setActiveId(section.id)}
          className={cn(
            "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
            activeId === section.id
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
}
