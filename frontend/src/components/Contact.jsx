function Contact({ profile = {}, socialLinks = [] }) {
  const sortedSocialLinks = [...socialLinks].sort(
    (a, b) => a.display_order - b.display_order,
  );

  return (
    <section id="contact" className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
        {/* Main Contact */}
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
              Contact
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
              Have an idea,
              <br />
              opportunity, or
              <span className="text-violet-600"> project?</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:mt-8 sm:text-lg sm:leading-8">
              I'm always open to interesting opportunities, collaborations, and
              conversations around technology.
            </p>

            {profile?.email && (
              <a
                href={`mailto:${profile.email}`}
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-violet-600 sm:mt-10 sm:w-auto sm:justify-start sm:py-4"
              >
                Let's talk
                <span className="ml-3">→</span>
              </a>
            )}
          </div>

          {/* Right */}
          <div className="lg:pt-12">
            <div className="border-t border-slate-200">
              {/* Email */}
              {profile?.email && (
                <div className="border-b border-slate-200 py-5 sm:py-6">
                  <p className="text-sm text-slate-400">Email</p>

                  <a
                    href={`mailto:${profile.email}`}
                    className="mt-2 block break-all text-base font-medium text-slate-950 transition-colors hover:text-violet-600"
                  >
                    {profile.email}
                  </a>
                </div>
              )}

              {/* Phone */}
              {profile?.phone && (
                <div className="border-b border-slate-200 py-5 sm:py-6">
                  <p className="text-sm text-slate-400">Phone</p>

                  <a
                    href={`tel:${profile.phone}`}
                    className="mt-2 block break-words text-base font-medium text-slate-950 transition-colors hover:text-violet-600"
                  >
                    {profile.phone}
                  </a>
                </div>
              )}

              {/* Location */}
              {profile?.location && (
                <div className="border-b border-slate-200 py-5 sm:py-6">
                  <p className="text-sm text-slate-400">Based in</p>

                  <p className="mt-2 break-words text-base font-medium text-slate-950">
                    {profile.location}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Social Links */}
        {sortedSocialLinks.length > 0 && (
          <div className="mt-16 border-t border-slate-200 pt-7 sm:mt-20 sm:pt-8 lg:mt-24">
            <div className="flex flex-col gap-5 sm:gap-6 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-slate-500">Find me online</p>

              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {sortedSocialLinks.map((link) => (
                  <a
                    key={link.social_link_id}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-violet-300 hover:text-violet-600 sm:px-5"
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-8 border-t border-slate-200 pt-7 sm:mt-10 sm:pt-8">
          <div className="flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>novfolio</p>

            <p>Built with purpose.</p>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
