import React from "react";
import HeroSection from "../components/HeroSection";
import SplitHeroSection from "../components/SplitHeroSection";
import EventCarousel from "../components/EventCarousel";
import FeaturedEventsCarousel from "../components/FeaturedEventsCarousel";
import EventJourneyCarousel from "../components/EventJourneyCarousel";
import FeatureCards from "../components/FeatureCards";
import StatsSection from "../components/StatsSection";
import ProcessSection from "../components/ProcessSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import VideoBackgroundSection from "../components/VideoBackgroundSection";
import GallerySection from "../components/GallerySection";
import TeamSection from "../components/TeamSection";
import PricingSection from "../components/PricingSection";
import BlogSection from "../components/BlogSection";
import Card3DCarousel from "../components/Card3DCarousel";
import ClientsCarousel from "../components/ClientsCarousel";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <EventCarousel />
      <FeaturedEventsCarousel />
      <EventJourneyCarousel />
      <FeatureCards />
      <StatsSection />
      <GallerySection />
      <TeamSection />
      <ProcessSection />
      <Card3DCarousel />
      <ClientsCarousel />
      <PricingSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <VideoBackgroundSection />
      <CTASection />
    </div>
  );
};

export default Home;
