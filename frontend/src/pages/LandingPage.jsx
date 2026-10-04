import SEO from "../components/SEO";
import LandingNavbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import PortfolioShowcase from "../components/landing/PortfolioShowcase";
import WhyNovfolio from "../components/landing/WhyNovfolio";
import WhoIsNovfolioFor from "../components/landing/WhoIsNovfolioFor";
import ExplorePortfolios from "../components/landing/ExplorePortfolios";
import FAQ from "../components/landing/FAQ";
import FinalCTA from "../components/landing/FinalCTA";
import Footer from "../components/landing/Footer";

function LandingPage() {
  return (
    <>
      <SEO
        title="Novfolio – Create a Professional Online Portfolio"
        description="Novfolio is a professional portfolio builder for students, developers, designers, researchers, and professionals. Create and share a portfolio showcasing your projects, skills, experience, and education."
        canonical="https://novfolio.com/"
      />

      <div className="min-h-screen">
        <LandingNavbar />

        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <PortfolioShowcase />
          <WhyNovfolio />
          <WhoIsNovfolioFor />
          <ExplorePortfolios />
          <FAQ />
          <FinalCTA />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default LandingPage;
