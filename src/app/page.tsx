"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin, Phone, PlayCircle, Youtube } from "lucide-react";
import { simplePortfolioData as data } from "@/data/simple-portfolio";
import { SimpleProjectCard } from "@/components/simple-project-card";
import { CustomCursor } from "@/components/custom-cursor";

export default function HomePage() {
  const whatsappNumber = data.phone.replace(/[^\d]/g, "");
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const heroContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.09, delayChildren: 0.08 }
    }
  };

  const heroItem = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-8 md:px-8 md:pt-12">
      <CustomCursor />
      <motion.header
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="sticky top-4 z-20 mb-10 rounded-2xl border border-cyan-400/20 bg-[#0d121a]/90 px-4 py-3 backdrop-blur md:px-6"
      >
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-cyan-200">{data.name}</p>
          <nav className="hidden items-center gap-2 md:flex">
            <a href="#home" className="top-nav-link">
              Home
            </a>
            <a href="#about" className="top-nav-link">
              About
            </a>
            <a href="#skills" className="top-nav-link">
              Skills
            </a>
            <a href="#projects" className="top-nav-link">
              Projects
            </a>
            <a href="#contact" className="top-nav-link">
              Contact
            </a>
          </nav>
          <a
            href={data.cvPath}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 px-4 py-2 text-xs text-cyan-100 transition hover:bg-cyan-500/10"
          >
            <Download className="h-3.5 w-3.5" />
            Download CV
          </a>
        </div>
      </motion.header>

      <section id="home" className="mb-14 scroll-mt-24 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="order-2 space-y-6 lg:order-1"
        >
          <motion.p variants={heroItem} className="text-base text-cyan-200">
            {data.heroLead}
          </motion.p>
          <motion.h1 variants={heroItem} className="text-4xl font-bold leading-tight text-white md:text-7xl">
            {data.name}
          </motion.h1>
          <motion.h2 variants={heroItem} className="text-2xl font-bold text-cyan-300 md:text-5xl">
            {data.heroHighlight}
          </motion.h2>
          <motion.p variants={heroItem} className="max-w-2xl text-base text-slate-300">
            {data.intro}
          </motion.p>
          <motion.p variants={heroItem} className="max-w-2xl text-sm text-slate-400">
            {data.role}
          </motion.p>

          <motion.div variants={heroItem} className="flex flex-wrap gap-3 pt-1">
            <a
              href={data.cvPath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-cyan-400"
            >
              <Download className="h-4 w-4" />
              Download My Resume
            </a>
            {data.githubProfile ? (
              <a
                href={data.githubProfile}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-cyan-400/40 px-5 py-2.5 text-sm text-cyan-100 transition hover:bg-cyan-500/10"
              >
                <Github className="h-4 w-4" />
                Visit GitHub
              </a>
            ) : null}
            {data.linkedinProfile ? (
              <a
                href={data.linkedinProfile}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-cyan-400/40 px-5 py-2.5 text-sm text-cyan-100 transition hover:bg-cyan-500/10"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            ) : null}
            {data.youtubeChannel ? (
              <a
                href={data.youtubeChannel}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-cyan-400/40 px-5 py-2.5 text-sm text-cyan-100 transition hover:bg-cyan-500/10"
              >
                <Youtube className="h-4 w-4" />
                YouTube
              </a>
            ) : null}
          </motion.div>

          <motion.div
            variants={heroItem}
            whileHover={{ scale: 1.04 }}
            className="inline-flex items-center gap-2 rounded-md border border-cyan-300/30 bg-cyan-500/10 px-3 py-2 text-xs text-cyan-100"
          >
            <PlayCircle className="h-3.5 w-3.5" />
            {data.youtubeLabel} - {data.youtubeStats}
          </motion.div>

          <motion.div variants={heroItem} className="flex flex-wrap gap-3 text-sm text-slate-300">
            <a href={`mailto:${data.email}`} className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-cyan-300" />
              {data.email}
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Phone className="h-4 w-4 text-cyan-300" />
              {data.phone}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-300" />
              {data.location}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="order-1 mx-auto w-full max-w-sm rounded-xl border border-cyan-400/20 bg-[#0d121a] p-3 shadow-glass lg:order-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          whileHover={{ y: -8, rotate: 0.4 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={data.avatar}
              alt={data.name}
              width={600}
              height={700}
              className="h-[360px] w-full rounded-lg object-cover md:h-[380px]"
            />
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        id="about"
        className="mb-14 scroll-mt-24"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 whileHover={{ x: 4 }} className="mb-4 text-2xl font-semibold uppercase tracking-wide text-white md:text-3xl">
          About
        </motion.h2>
        <div className="rounded-2xl border border-cyan-400/15 bg-[#0d121a] p-6">
          <p className="text-slate-300">{data.about}</p>
        </div>
      </motion.section>

      <motion.section
        id="skills"
        className="mb-14 scroll-mt-24"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 whileHover={{ x: 4 }} className="mb-4 text-2xl font-semibold uppercase tracking-wide text-white md:text-3xl">
          Skills
        </motion.h2>
        <div className="rounded-2xl border border-cyan-400/15 bg-[#0d121a] p-6">
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ y: -2, scale: 1.05 }}
                className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-100"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.section>

      <section id="projects" className="scroll-mt-24 space-y-5">
        <div className="mb-2">
          <h2 className="text-2xl font-semibold uppercase tracking-wide text-white md:text-3xl">
            My Projects
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Clean project list with clear titles, short descriptions, and direct links.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {data.projects.map((project) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              whileHover={{ y: -4 }}
            >
              <SimpleProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="mt-16 scroll-mt-24">
        <div className="mb-5">
          <h2 className="text-2xl font-semibold uppercase tracking-wide text-white md:text-3xl">
            Contact
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Let&apos;s build something impactful together. I am available for freelance and full-time opportunities.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            <motion.a
              whileHover={{ y: -4, scale: 1.01 }}
              href={`mailto:${data.email}`}
              className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-transparent p-5 text-slate-200"
            >
              <div className="mb-3 inline-flex rounded-lg border border-cyan-300/40 bg-cyan-500/10 p-2">
                <Mail className="h-4 w-4 text-cyan-200" />
              </div>
              <p className="text-xs uppercase tracking-wide text-cyan-200">Email</p>
              <p className="mt-2 text-sm font-medium">{data.email}</p>
            </motion.a>

            <motion.a
              whileHover={{ y: -4, scale: 1.01 }}
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-transparent p-5 text-slate-200"
            >
              <div className="mb-3 inline-flex rounded-lg border border-cyan-300/40 bg-cyan-500/10 p-2">
                <Phone className="h-4 w-4 text-cyan-200" />
              </div>
              <p className="text-xs uppercase tracking-wide text-cyan-200">Phone</p>
              <p className="mt-2 text-sm font-medium">{data.phone}</p>
            </motion.a>

            <motion.a
              whileHover={{ y: -4, scale: 1.01 }}
              href={data.linkedinProfile}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-cyan-400/20 bg-[#0d121a] p-5 text-slate-200"
            >
              <div className="mb-3 inline-flex rounded-lg border border-cyan-300/40 bg-cyan-500/10 p-2">
                <Linkedin className="h-4 w-4 text-cyan-200" />
              </div>
              <p className="text-xs uppercase tracking-wide text-cyan-200">LinkedIn</p>
              <p className="mt-2 text-sm font-medium">View Profile</p>
            </motion.a>

            <motion.a
              whileHover={{ y: -4, scale: 1.01 }}
              href={data.githubProfile}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-cyan-400/20 bg-[#0d121a] p-5 text-slate-200"
            >
              <div className="mb-3 inline-flex rounded-lg border border-cyan-300/40 bg-cyan-500/10 p-2">
                <Github className="h-4 w-4 text-cyan-200" />
              </div>
              <p className="text-xs uppercase tracking-wide text-cyan-200">GitHub</p>
              <p className="mt-2 text-sm font-medium">Explore Projects</p>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl border border-cyan-400/25 bg-gradient-to-b from-cyan-500/10 to-[#0d121a] p-6"
          >
            <p className="text-xs uppercase tracking-wider text-cyan-200">Availability</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Open for new opportunities</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Flutter apps, architecture-focused development, and product delivery with clean code and smooth UX.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-cyan-300/35 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-100">
                Freelance
              </span>
              <span className="rounded-full border border-cyan-300/35 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-100">
                Remote
              </span>
              <span className="rounded-full border border-cyan-300/35 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-100">
                Full-time
              </span>
            </div>
            <a
              href={`mailto:${data.email}`}
              className="mt-6 inline-flex items-center rounded-md bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Send Message
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
