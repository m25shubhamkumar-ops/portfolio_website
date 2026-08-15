"use client";
import TypingHeadline from "./TypingHeadline";
import { SOCIAL } from "@/data/socialLinks";

export default function Hero() {
  return (
    <section className="container py-24 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <div className="text-sm text-subtle tracking-widest">COMPUTER SCIENCE • AI/ML • DEVELOPMENT</div>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight">Hi, I'm Shubham Kumar.</h1>
        <h2 className="mt-2 text-2xl font-medium text-subtle">Computer Science Engineering (AI/ML) Student & Developer</h2>

        <p className="mt-6 text-subtle max-w-xl">
          I build interactive web experiences, solve challenging programming problems, and turn ideas into real-world software.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#projects" className="px-4 py-2 rounded-md btn primary">View My Projects</a>
          <a href="/resume.pdf" className="px-4 py-2 rounded-md btn glass">Download Resume</a>
          <a href="#contact" className="px-4 py-2 rounded-md btn glass">Contact Me</a>
        </div>

        <div className="mt-6 flex gap-4 text-subtle">
          <a href={SOCIAL.github} aria-label="GitHub" className="hover:text-white">GitHub</a>
          <a href={SOCIAL.linkedin} aria-label="LinkedIn" className="hover:text-white">LinkedIn</a>
          <a href={SOCIAL.leetcode} aria-label="LeetCode" className="hover:text-white">LeetCode</a>
          <a href={SOCIAL.codechef} aria-label="CodeChef" className="hover:text-white">CodeChef</a>
          <a href={SOCIAL.codeforces} aria-label="Codeforces" className="hover:text-white">Codeforces</a>
        </div>

        <div className="mt-6 text-sm text-subtle">
          <TypingHeadline />
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="glass p-5 w-full max-w-sm flex flex-col items-center">
          {/* Use profile.svg placeholder when profile.jpg not provided */}
          <picture>
            <source srcSet="/images/profile.svg" type="image/svg+xml" />
            <img src="/images/profile.svg" alt="Shubham Kumar" className="w-36 h-36 rounded-full object-cover border-2 border-white/8" />
          </picture>

          <pre className="mt-4 text-xs font-mono text-subtle w-full bg-transparent text-left">
{`const developer = {
  name: "Shubham Kumar",
  focus: "Web Development",
  passion: "Problem Solving",
  learning: "AI / ML"
}`}
          </pre>

          <div className="mt-4 flex flex-wrap gap-2 text-[13px] justify-center">
            {[
              "</>",
              "{}",
              "C++",
              "JS",
              "React",
              "AI/ML"
            ].map(t => (
              <span key={t} className="px-2 py-1 bg-white/2 rounded-md text-[12px] font-mono">{t}</span>
            ))}
          </div>
        </div>

        <div className="absolute -inset-4 -z-10 rounded-2xl opacity-30" aria-hidden>
          <div className="w-full h-full bg-gradient-to-br from-[#06203b] to-[#120527] rounded-2xl filter blur-xl"></div>
        </div>
      </div>
    </section>
  );
}
