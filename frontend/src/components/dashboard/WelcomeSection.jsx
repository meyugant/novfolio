function WelcomeSection({ portfolio, onEditProfile }) {
  const profile = portfolio?.profile;

  const name = profile?.full_name || "there";

  return (
    <section className="px-0 py-0">
      <div
        className="
          flex
          flex-col
          gap-6
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-5
          shadow-sm
          sm:p-6
          md:p-7
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:p-8
        "
      >
        {/* =====================================================
            WELCOME TEXT
        ===================================================== */}

        <div className="min-w-0">
          <p className="text-sm font-medium text-violet-600">
            Portfolio Dashboard
          </p>

          <h1
            className="
              mt-2
              text-2xl
              font-bold
              tracking-tight
              text-slate-950
              sm:text-3xl
              md:text-4xl
            "
          >
            Welcome back, {name}.
          </h1>

          <p
            className="
              mt-3
              max-w-2xl
              text-sm
              leading-6
              text-slate-500
              sm:text-base
              sm:leading-7
            "
          >
            Manage your portfolio, update your information, and keep your
            professional profile up to date.
          </p>
        </div>

        {/* =====================================================
            ACTIONS
        ===================================================== */}

        <div className="flex w-full shrink-0 sm:w-auto">
          <button
            type="button"
            onClick={onEditProfile}
            className="
              w-full
              rounded-xl
              border
              border-slate-200
              bg-white
              px-5
              py-3
              text-sm
              font-medium
              text-slate-700
              transition
              duration-200
              hover:-translate-y-0.5
              hover:border-violet-300
              hover:text-violet-600
              sm:w-auto
            "
          >
            Edit Profile
          </button>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
