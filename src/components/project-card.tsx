"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, PlaySquare, Video } from "lucide-react";
import { ReactNode } from "react";
import { ProjectItem, Locale } from "@/types/portfolio";
import { ProjectGallery } from "@/components/project-gallery";

interface ProjectCardProps {
  project: ProjectItem;
  locale: Locale;
}

function LinkButton({
  href,
  label,
  icon
}: {
  href?: string;
  label: string;
  icon: ReactNode;
}) {
  if (!href || href === "#") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-400">
        {icon}
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-200 transition hover:border-brand-400 hover:text-white"
    >
      {icon}
      {label}
    </a>
  );
}

export function ProjectCard({ project, locale }: ProjectCardProps) {
  const content = {
    category: project.category[locale],
    description: project.description[locale],
    challenge: project.challenge[locale],
    impact: project.impact[locale]
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="grid gap-6 rounded-3xl border border-white/10 bg-slate-900/40 p-6 shadow-glass lg:grid-cols-2"
    >
      <div className="space-y-5">
        <div>
          <p className="text-sm text-brand-300">{content.category}</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{project.name}</h3>
        </div>

        <p className="text-slate-300">{content.description}</p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
            <h4 className="text-sm font-semibold text-white">
              {locale === "en" ? "Challenge Solved" : "التحدي الذي تم حله"}
            </h4>
            <p className="mt-2 text-sm text-slate-300">{content.challenge}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
            <h4 className="text-sm font-semibold text-white">
              {locale === "en" ? "Business / User Impact" : "الأثر على المستخدم/العمل"}
            </h4>
            <p className="mt-2 text-sm text-slate-300">{content.impact}</p>
          </div>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-semibold text-white">
            {locale === "en" ? "Technologies Used" : "التقنيات المستخدمة"}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs text-brand-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <LinkButton
            href={project.links.github}
            label={locale === "en" ? "GitHub" : "جيت هب"}
            icon={<Github className="h-3.5 w-3.5" />}
          />
          <LinkButton
            href={project.links.liveDemo}
            label={locale === "en" ? "Live Demo" : "عرض مباشر"}
            icon={<ExternalLink className="h-3.5 w-3.5" />}
          />
          <LinkButton
            href={project.links.playStore}
            label={locale === "en" ? "Google Play" : "جوجل بلاي"}
            icon={<PlaySquare className="h-3.5 w-3.5" />}
          />
          <LinkButton
            href={project.links.video}
            label={locale === "en" ? "Video" : "فيديو"}
            icon={<Video className="h-3.5 w-3.5" />}
          />
        </div>
      </div>

      <ProjectGallery
        name={project.name}
        screenshots={project.screenshots}
        hasDetailedScreenshots={project.hasDetailedScreenshots}
        locale={locale}
      />
    </motion.article>
  );
}
