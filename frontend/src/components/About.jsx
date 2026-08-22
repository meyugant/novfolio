import { useState } from "react";

function About({ portfolio }) {
  const profile = portfolio?.profile;

  const [imageError, setImageError] = useState(false);

  const hasProfileImage =
    typeof profile?.profile_image === "string" &&
    profile.profile_image.trim() !== "" &&
    !imageError;

  return (
    <section id="about" className="border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
        {/* Heading */}
        <div className="mb-12 max-w-4xl sm:mb-16 lg:mb-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            About
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
            Building with purpose,
            <span className="text-violet-600"> not just technology.</span>
          </h2>
        </div>

        {/* Content */}
        <div
          className={
            hasProfileImage
              ? "grid items-start gap-10 sm:gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"
              : "max-w-4xl"
          }
        >
          {/* Image */}
          {hasProfileImage && (
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
              <img
                src={profile.profile_image}
                alt={profile.full_name || "Profile"}
                onError={() => setImageError(true)}
                className="block max-h-[500px] w-full object-cover sm:max-h-[600px] lg:max-h-[620px]"
              />
            </div>
          )}

          {/* Information */}
          <div className={hasProfileImage ? "lg:pt-4" : ""}>
            <h3 className="text-2xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-3xl md:text-4xl">
              Always moving forward...
            </h3>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:mt-7 sm:text-lg sm:leading-8">
              {profile?.bio ||
                "I am a full stack developer focused on building thoughtful, scalable, and useful digital experiences."}
            </p>

            {/* Information */}
            <div className="mt-10 border-t border-slate-200 pt-7 sm:mt-12 sm:pt-8">
              <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
                {/* Location */}
                <div>
                  <p className="text-sm text-slate-400">Location</p>

                  <p className="mt-2 text-base font-medium text-slate-950">
                    {profile?.location || "—"}
                  </p>
                </div>

                {/* Availability */}
                <div>
                  <p className="text-sm text-slate-400">Availability</p>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />

                    <span className="text-base font-medium text-slate-950">
                      Available
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              {(profile?.email || profile?.phone) && (
                <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
                  {profile?.email && (
                    <a
                      href={`mailto:${profile.email}`}
                      className="max-w-full break-all rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:text-violet-600"
                    >
                      {profile.email}
                    </a>
                  )}

                  {profile?.phone && (
                    <a
                      href={`tel:${profile.phone}`}
                      className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:text-violet-600"
                    >
                      {profile.phone}
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
