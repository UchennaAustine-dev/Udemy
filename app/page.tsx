import TopBanner from "@/components/top-banner";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import SkillsSection from "@/components/skills-section";
import FeaturedCoursesSection from "@/components/featured-courses-section";
// import TrustedBySection from "@/components/trusted-by-section";
import LearnersViewingSection from "@/components/learners-viewing-section";
import LearningGoalsSection from "@/components/learning-goals-section";
import AccelerateGrowthSection from "@/components/accelerate-growth-section";
import TestimonialsSection from "@/components/testimonials-section";
import TrendsReportSection from "@/components/trends-report-section";
import TrendingNowSection from "@/components/trending-now-section";
import BooseAllenSectionWrapper from "@/components/boose-allen-section-wrapper";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Banner */}
      <TopBanner />

      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* All the skills section */}
        <SkillsSection />

        {/* Featured Courses Section */}
        <FeaturedCoursesSection />

        {/* Trusted By Section */}
        {/* <TrustedBySection /> */}

        {/* Learners are viewing Section */}
        <LearnersViewingSection />

        {/* Learning focused on your goals */}
        <LearningGoalsSection />

        {/* Accelerate growth section */}
        <AccelerateGrowthSection />

        {/* Testimonials section */}
        <TestimonialsSection />

        {/* Trends Report Section */}
        <TrendsReportSection />

        {/* Trending Now Section */}
        <TrendingNowSection />

        {/* Boose Allen Section */}
        <BooseAllenSectionWrapper />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
