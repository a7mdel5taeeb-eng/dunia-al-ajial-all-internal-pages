import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { useState } from "react";

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

import WhyDaisPage from "./pages/about/WhyDaisPage";
import CeoWordPage from "./pages/about/CeoWordPage";
import MissionVisionPage from "./pages/about/MissionVisionPage";
import CodeOfConductPage from "./pages/about/CodeOfConductPage";
import SchoolHistoryPage from "./pages/about/SchoolHistoryPage";
import CalendarPage from "./pages/about/CalendarPage";

import DirectorWordPage from "./pages/academics/DirectorWordPage";
import ElementarySchoolPage from "./pages/academics/ElementarySchoolPage";
import MiddleHighSchoolPage from "./pages/academics/MiddleHighSchoolPage";
import EarlyChildhoodPage from "./pages/academics/EarlyChildhoodPage";

import AdmissionProcessPage from "./pages/admissions/AdmissionProcessPage";
import RequirementsPage from "./pages/admissions/RequirementsPage";
import FinancialSystemPage from "./pages/admissions/FinancialSystemPage";
import OnlineApplicationPage from "./pages/admissions/OnlineApplicationPage";

import GenericContentPage from "./pages/GenericContentPage";
import CareerPage from "./pages/CareerPage";
import GalleryPage from "./pages/GalleryPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import AchievementsPage from "./pages/AchievementsPage";

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
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}
