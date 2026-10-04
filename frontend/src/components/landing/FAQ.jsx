import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is novfolio?",
    answer:
      "novfolio is a portfolio builder that helps you create and share a professional online portfolio without having to build a website from scratch. You can bring together your profile, projects, experience, education, skills, and social links in one place.",
  },
  {
    question: "Who can use novfolio?",
    answer:
      "novfolio is designed for students, developers, designers, researchers, and professionals who want a simple way to showcase their work and professional journey online.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "No. novfolio is designed to let you build your portfolio through the platform instead of requiring you to develop a website yourself.",
  },
  {
    question: "What can I include in my portfolio?",
    answer:
      "You can add your professional profile, projects, work experience, education, skills, and social links. These sections help you present your professional background in one place.",
  },
  {
    question: "Can I share my portfolio with others?",
    answer:
      "Yes. Once your portfolio is published, you can share its public link with recruiters, clients, collaborators, friends, or anyone you want to show your work to.",
  },
  {
    question: "Can I update my portfolio later?",
    answer:
      "Yes. Your portfolio is designed to grow with you. You can update your projects, experience, education, skills, and other information as your professional journey changes.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">
            Frequently asked questions
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
            Everything you need to know.
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            A few answers to the questions you might have before creating your
            portfolio.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white px-6 shadow-[0_15px_45px_rgba(15,23,42,0.04)] sm:px-8">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-sm font-semibold text-slate-950 sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition duration-200 ${
                      isOpen
                        ? "border-violet-200 bg-violet-50 text-violet-600"
                        : "border-slate-200 bg-white text-slate-400"
                    }`}
                  >
                    <ChevronDown
                      size={17}
                      className={`transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] pb-6 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pr-12 text-sm leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
