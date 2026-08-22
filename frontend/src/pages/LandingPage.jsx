import SEO from "../components/SEO";
import LandingNavbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import PortfolioShowcase from "../components/landing/PortfolioShowcase";

function LandingPage() {
  return (
    <>
      <SEO
        title="Novfolio – Create a Professional Online Portfolio"
        description="Create a professional online portfolio with Novfolio. Showcase your projects, skills, education, experience, and achievements with a beautiful portfolio website."
        canonical="https://novfolio.com/"
      />

      <div className="min-h-screen">
        <LandingNavbar />

        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <PortfolioShowcase />
        </main>
      </div>
    </>
  );
}

export default LandingPage;
