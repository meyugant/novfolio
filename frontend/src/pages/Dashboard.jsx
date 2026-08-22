import { useEffect, useRef, useState } from "react";

import { getMyPortfolio } from "../api/portfolio";

import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import WelcomeSection from "../components/dashboard/WelcomeSection";
import DashboardStats from "../components/dashboard/DashboardStats";
import ContentOverview from "../components/dashboard/ContentOverview";
import CompletionCard from "../components/dashboard/CompletionCard";
import Settings from "../components/Settings";

import ProfileEditor from "../components/ProfileEditor";
import ProjectManager from "../components/ProjectManager";
import ExperienceManager from "../components/ExperienceManager";
import EducationManager from "../components/EducationManager";
import SkillManager from "../components/SkillManager";
import SocialLinks from "../components/SocialLinks";

function Dashboard() {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeSection, setActiveSection] = useState("overview");

  const mainRef = useRef(null);

  useEffect(() => {
    const loadPortfolio = async () => {
      try {
        const data = await getMyPortfolio();

        setPortfolio(data);
      } catch (error) {
        console.error(error);

        setError(error.response?.data?.detail || "Unable to load portfolio.");
      } finally {
        setLoading(false);
      }
    };

    loadPortfolio();
  }, []);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [activeSection]);

  if (loading) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center overflow-x-hidden bg-slate-50 px-4">
        <p className="text-center text-sm text-slate-500">
          Loading portfolio...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center overflow-x-hidden bg-slate-50 px-4 sm:px-6">
        <div className="w-full max-w-md rounded-2xl border border-red-200 bg-white p-6 text-center sm:p-8">
          <h2 className="text-lg font-semibold text-slate-950">
            Unable to load portfolio
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">{error}</p>
        </div>
      </div>
    );
  }

  if (!portfolio) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center overflow-x-hidden bg-slate-50 px-4">
        <p className="text-center text-sm text-slate-500">
          No portfolio found.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-50 text-slate-950">
      <div className="flex min-h-screen w-full">
        {/* =====================================================
            SIDEBAR
        ===================================================== */}

        <DashboardSidebar
          user={portfolio}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        {/* =====================================================
            MAIN AREA
        ===================================================== */}

        <div className="flex min-w-0 w-full flex-1 flex-col lg:ml-64">
          {/* ===================================================
              HEADER
          =================================================== */}

          <DashboardHeader
            user={portfolio}
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />

          {/* ===================================================
              CONTENT
          =================================================== */}

          <main
            ref={mainRef}
            className="
              min-w-0
              w-full
              flex-1
              overflow-x-hidden
              overflow-y-auto
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {/* =================================================
                OVERVIEW
            ================================================= */}

            {activeSection === "overview" && (
              <>
                <div className="w-full px-4 pt-5 sm:px-6 sm:pt-7 md:px-8 lg:px-10 lg:pt-10">
                  <WelcomeSection
                    portfolio={portfolio}
                    onEditProfile={() => setActiveSection("profile")}
                  />
                </div>

                <div className="w-full pt-4 sm:pt-5">
                  <DashboardStats portfolio={portfolio} />
                </div>

                <div
                  className="
                    grid
                    w-full
                    min-w-0
                    gap-5
                    px-4
                    pb-8
                    sm:px-6
                    md:px-8
                    lg:gap-6
                    lg:px-10
                    lg:pb-10
                    xl:grid-cols-[minmax(0,1fr)_360px]
                  "
                >
                  <div className="min-w-0">
                    <ContentOverview
                      portfolio={portfolio}
                      onSectionChange={setActiveSection}
                    />
                  </div>

                  <div className="min-w-0">
                    <CompletionCard portfolio={portfolio} />
                  </div>
                </div>
              </>
            )}

            {/* =================================================
                PROFILE
            ================================================= */}

            {activeSection === "profile" && (
              <div className="w-full px-4 py-5 sm:px-6 sm:py-6 md:px-8 lg:px-10 lg:py-8">
                <div className="w-full min-w-0 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6 lg:p-8">
                  <ProfileEditor
                    profile={portfolio.profile}
                    onUpdated={(updatedProfile) => {
                      setPortfolio((previous) => ({
                        ...previous,
                        profile: updatedProfile,
                      }));
                    }}
                  />
                </div>
              </div>
            )}

            {/* =================================================
                PROJECTS
            ================================================= */}

            {activeSection === "projects" && (
              <div className="w-full px-4 py-5 sm:px-6 sm:py-6 md:px-8 lg:px-10 lg:py-8">
                <div className="w-full min-w-0 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6 lg:p-8">
                  <ProjectManager />
                </div>
              </div>
            )}

            {/* =================================================
                EXPERIENCE
            ================================================= */}

            {activeSection === "experience" && (
              <div className="w-full px-4 py-5 sm:px-6 sm:py-6 md:px-8 lg:px-10 lg:py-8">
                <div className="w-full min-w-0 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6 lg:p-8">
                  <ExperienceManager />
                </div>
              </div>
            )}

            {/* =================================================
                EDUCATION
            ================================================= */}

            {activeSection === "education" && (
              <div className="w-full px-4 py-5 sm:px-6 sm:py-6 md:px-8 lg:px-10 lg:py-8">
                <div className="w-full min-w-0 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6 lg:p-8">
                  <EducationManager />
                </div>
              </div>
            )}

            {/* =================================================
                SKILLS
            ================================================= */}

            {activeSection === "skills" && (
              <div className="w-full px-4 py-5 sm:px-6 sm:py-6 md:px-8 lg:px-10 lg:py-8">
                <div className="min-w-0">
                  <SkillManager />
                </div>
              </div>
            )}

            {/* =================================================
                SOCIAL LINKS
            ================================================= */}

            {activeSection === "social-links" && (
              <div className="w-full px-4 py-5 sm:px-6 sm:py-6 md:px-8 lg:px-10 lg:py-8">
                <div className="min-w-0">
                  <SocialLinks />
                </div>
              </div>
            )}

            {/* =================================================
                SETTINGS
            ================================================= */}

            {activeSection === "settings" && (
              <div className="w-full px-4 py-5 sm:px-6 sm:py-6 md:px-8 lg:px-10 lg:py-8">
                <Settings
                  user={portfolio}
                  onUpdated={(updatedPortfolio) => {
                    setPortfolio(updatedPortfolio);
                  }}
                />
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
