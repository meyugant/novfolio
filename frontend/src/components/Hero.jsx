function Hero({ portfolio }) {
  const profile = portfolio?.profile;

  return (
    <section
      id="hero"
      className="mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-10 lg:pb-24 lg:pt-24"
    >
      <div className="max-w-5xl">
        {/* Availability */}
        <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-2 sm:px-4">
          <div className="mr-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />

          <span className="text-xs font-medium text-emerald-700 sm:text-sm">
            Available for opportunities
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-7 text-4xl font-bold leading-[0.98] tracking-[-0.045em] text-slate-950 sm:mt-8 sm:text-5xl md:text-7xl lg:text-8xl">
          Building digital
          <br />
          experiences that
          <span className="block text-violet-600">matter.</span>
        </h1>

        {/* Description */}
        <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:mt-8 sm:text-lg sm:leading-8">
          {profile?.bio ||
            "Full Stack Developer passionate about scalable web applications, clean architecture, and thoughtful digital experiences."}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-violet-600"
          >
            Explore my work
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-medium text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:text-violet-600"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
