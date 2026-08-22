import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../api/client";
import SEO from "../components/SEO";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Stats from "../components/Stats";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

function PublicPortfolio() {
  const { slug } = useParams();

  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPortfolio() {
      try {
        const response = await api.get(`/api/v1/portfolios/public/${slug}`);

        setPortfolio(response.data);
      } catch (error) {
        console.error("Failed to load portfolio:", error);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      loadPortfolio();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        Loading portfolio...
      </div>
    );
  }

  if (!portfolio) {
    return (
      <>
        <SEO
          title="Portfolio Not Found | Novfolio"
          description="The portfolio you're looking for could not be found."
          canonical={`https://novfolio.com/${slug}`}
          noIndex={true}
        />

        <div className="flex min-h-screen items-center justify-center bg-slate-50">
          Portfolio not found.
        </div>
      </>
    );
  }

  const profile = portfolio.profile || {};

  const name = profile.name || portfolio.title || slug;

  const profession = profile.title || profile.headline || "Professional";

  const bio = profile.bio || profile.about || "";

  const skills = portfolio.skills || [];
  const projects = portfolio.projects || [];

  const seoTitle = `${name} | ${profession} Portfolio`;

  let seoDescription = bio;

  if (!seoDescription && skills.length > 0) {
    const skillNames = skills
      .slice(0, 5)
      .map((skill) => skill.name)
      .filter(Boolean)
      .join(", ");

    seoDescription =
      `${name} is a ${profession} showcasing projects, ` +
      `skills, experience and professional work. ` +
      `Skills include ${skillNames}.`;
  }

  if (!seoDescription) {
    seoDescription =
      `Explore ${name}'s professional portfolio featuring ` +
      `projects, skills, education and experience.`;
  }

  seoDescription = seoDescription.slice(0, 155);

  const canonicalUrl = `https://novfolio.com/${slug}`;

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonical={canonicalUrl}
      />

      <div
        id="top"
        className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950"
      >
        <Navbar />

        <main>
          <Hero portfolio={portfolio} />

          <Stats portfolio={portfolio} />

          <About portfolio={portfolio} />

          <Projects projects={portfolio.projects} />

          <Experience experiences={portfolio.experiences} />

          <Skills skills={portfolio.skills} />

          <Contact
            profile={portfolio?.profile}
            socialLinks={portfolio?.social_links || []}
          />
        </main>
      </div>
    </>
  );
}

export default PublicPortfolio;
