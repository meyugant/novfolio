import { ArrowUpRight } from "lucide-react";

function Footer() {
  const productLinks = [
    {
      label: "Features",
      href: "#features",
    },
    {
      label: "How it works",
      href: "#how-it-works",
    },
    {
      label: "Explore portfolios",
      href: "#explore",
    },
    {
      label: "FAQ",
      href: "#faq",
    },
  ];

  const handleNavigation = (event, href) => {
    event.preventDefault();

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a
              href="#top"
              onClick={(event) => {
                event.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="inline-flex items-center"
            >
              <span className="text-xl font-bold tracking-[-0.04em] text-slate-950">
                novfolio<span className="text-violet-600">.</span>
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Build a professional portfolio. Showcase your work. Share your
              story.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-950">
              Product
            </h3>

            <div className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => handleNavigation(event, link.href)}
                  className="group flex w-fit items-center gap-1.5 text-sm text-slate-500 transition duration-200 hover:text-violet-600"
                >
                  {link.label}

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Get started */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-950">
              Get started
            </h3>

            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-500">
              Create your portfolio and start building your professional online
              presence.
            </p>

            <a
              href="/register"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-medium text-white transition duration-200 hover:bg-slate-800"
            >
              Create your portfolio
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} novfolio. All rights reserved.
          </p>

          <p className="text-xs text-slate-400">Build. Showcase. Share.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
