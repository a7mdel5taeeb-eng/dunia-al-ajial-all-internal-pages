import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { lazy, Suspense, useState } from "react";

import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Stats from "./components/Stats";
import Programs from "./components/Programs";
import Gallery from "./components/Gallery";
import NewsSection from "./components/NewsSection";
import BranchesMap from "./components/BranchesMap";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import IntroOverlay from "./components/IntroOverlay";
import ScrollToTop from "./components/ScrollToTop";
import SeoMeta from "./components/SeoMeta";
import CookieConsent from "./components/CookieConsent";

const WhyDaisPage = lazy(() => import("./pages/about/WhyDaisPage"));
const CeoWordPage = lazy(() => import("./pages/about/CeoWordPage"));
const MissionVisionPage = lazy(() => import("./pages/about/MissionVisionPage"));
const CodeOfConductPage = lazy(() => import("./pages/about/CodeOfConductPage"));
const SchoolHistoryPage = lazy(() => import("./pages/about/SchoolHistoryPage"));
const CalendarPage = lazy(() => import("./pages/about/CalendarPage"));
const DirectorWordPage = lazy(() => import("./pages/academics/DirectorWordPage"));
const ElementarySchoolPage = lazy(() => import("./pages/academics/ElementarySchoolPage"));
const MiddleHighSchoolPage = lazy(() => import("./pages/academics/MiddleHighSchoolPage"));
const EarlyChildhoodPage = lazy(() => import("./pages/academics/EarlyChildhoodPage"));
const AdmissionProcessPage = lazy(() => import("./pages/admissions/AdmissionProcessPage"));
const RequirementsPage = lazy(() => import("./pages/admissions/RequirementsPage"));
const FinancialSystemPage = lazy(() => import("./pages/admissions/FinancialSystemPage"));
const OnlineApplicationPage = lazy(() => import("./pages/admissions/OnlineApplicationPage"));
const GenericContentPage = lazy(() => import("./pages/GenericContentPage"));
const CareerPage = lazy(() => import("./pages/CareerPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const ActivitiesPage = lazy(() => import("./pages/ActivitiesPage"));
const AchievementsPage = lazy(() => import("./pages/AchievementsPage"));

function PageLoader() {
  return <main className="min-h-screen" aria-busy="true" />;
}

function HomePage() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <IntroOverlay onFinish={() => setIntroDone(true)} />

      <main
        style={{
          opacity: introDone ? 1 : 0,
          transition: "opacity .45s ease",
        }}
      >
        <Hero />
        <Highlights />
        <Stats />
        <Programs />
        <Gallery />
        <NewsSection />
        <BranchesMap />
        <CTA />
      </main>
    </>
  );
}

function SiteLayout() {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300">
      <Header />
      <Outlet />
      <Footer />
      <Chatbot />
      <CookieConsent />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <SeoMeta />
          <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<HomePage />} />

              {/* About Pages */}
              <Route path="/about/why-dais" element={<WhyDaisPage />} />
              <Route path="/about/ceo-word" element={<CeoWordPage />} />
              <Route path="/about/mission-vision" element={<MissionVisionPage />} />
              <Route path="/about/code-of-conduct" element={<CodeOfConductPage />} />
              <Route path="/about/school-history" element={<SchoolHistoryPage />} />
              <Route path="/about/calendar" element={<CalendarPage />} />

              {/* Career */}
              <Route path="/career" element={<CareerPage />} />
              <Route path="/about/careers" element={<Navigate to="/career" replace />} />

              {/* Gallery */}
              <Route path="/gallery" element={<GalleryPage />} />

              {/* Academics */}
              <Route path="/academics/director-word" element={<DirectorWordPage />} />
              <Route path="/academics/elementary-school" element={<ElementarySchoolPage />} />
              <Route path="/academics/middle-high-school" element={<MiddleHighSchoolPage />} />
              <Route path="/academics/early-childhood" element={<EarlyChildhoodPage />} />

              {/* Admissions */}
              <Route path="/admissions/admission-process" element={<AdmissionProcessPage />} />
              <Route path="/admissions/requirements" element={<RequirementsPage />} />
              <Route path="/admissions/financial-system" element={<FinancialSystemPage />} />
              <Route path="/admissions/online-application" element={<OnlineApplicationPage />} />

              {/* New Pages */}
              <Route path="/activities" element={<ActivitiesPage />} />
              <Route path="/achievements" element={<AchievementsPage />} />

              {/* Generic Dynamic Pages */}
              <Route path="/:section/:page" element={<GenericContentPage />} />
            </Route>
          </Routes>
          </Suspense>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}
