"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { AppWindow, ExternalLink, Github, PlaySquare, Video } from "lucide-react";
import { SimpleProject } from "@/data/simple-portfolio";

interface SimpleProjectCardProps {
  project: SimpleProject;
}

export function SimpleProjectCard({ project }: SimpleProjectCardProps) {
  const images = useMemo(
    () => (project.images.length > 0 ? project.images : ["/images/project-placeholder.svg"]),
    [project.images]
  );
  const [active, setActive] = useState(0);

  const primaryLink = useMemo(() => {
    const links = project.links;
    if (!links) return null;

    if (links.playstore) return { href: links.playstore, label: "Open Play Store", type: "playstore" as const };
    if (links.appstore) return { href: links.appstore, label: "Open App Store", type: "appstore" as const };
    if (links.live) return { href: links.live, label: "Open Live Demo", type: "live" as const };
    if (links.video) return { href: links.video, label: "Watch Video", type: "video" as const };
    if (links.github) return { href: links.github, label: "Open GitHub", type: "github" as const };
    return null;
  }, [project.links]);

  const openPrimaryLink = () => {
    if (!primaryLink) return;
    window.open(primaryLink.href, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      onClick={openPrimaryLink}
      onKeyDown={(event) => {
        if (!primaryLink) return;
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openPrimaryLink();
        }
      }}
      role={primaryLink ? "button" : undefined}
      tabIndex={primaryLink ? 0 : -1}
      className={`group mx-auto h-full w-full max-w-[430px] rounded-2xl border border-cyan-400/20 bg-[#0d121a] p-4 shadow-glass md:p-5 ${
        primaryLink ? "cursor-pointer" : ""
      }`}
    >
      <div className="flex h-full flex-col gap-4">
        <div className="space-y-2">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950">
            <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.45 }}>
              <Image
                src={images[active]}
                alt={`${project.name} screenshot ${active + 1}`}
                width={1200}
                height={700}
                className="h-80 w-full object-cover"
              />
            </motion.div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {images.map((img, idx) => (
              <button
                key={`${img}-${idx}`}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setActive(idx);
                }}
                className={`overflow-hidden rounded-md border transition ${
                  idx === active
                    ? "border-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.35)]"
                    : "border-white/15 hover:border-cyan-400/50"
                }`}
              >
                <Image
                  src={img}
                  alt={`${project.name} thumb ${idx + 1}`}
                  width={120}
                  height={80}
                  className="h-12 w-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <h3 className="text-xl font-semibold leading-tight text-white">{project.name}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>

          {primaryLink ? (
            <a
              href={primaryLink.href}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-md bg-cyan-500 px-3.5 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              {primaryLink.type === "video" ? <Video className="h-3.5 w-3.5" /> : null}
              {primaryLink.type === "playstore" ? <PlaySquare className="h-3.5 w-3.5" /> : null}
              {primaryLink.type === "appstore" ? <AppWindow className="h-3.5 w-3.5" /> : null}
              {primaryLink.type === "github" ? <Github className="h-3.5 w-3.5" /> : null}
              {primaryLink.type === "live" ? <ExternalLink className="h-3.5 w-3.5" /> : null}
              {primaryLink.label}
            </a>
          ) : null}

          {!!project.technologies?.length && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-[11px] text-cyan-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
