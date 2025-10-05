import React from "react";
import HeroSection from "../components/HeroSection";
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
import TeamSection from "../components/TeamSection";
import PricingSection from "../components/PricingSection";
import Card3DCarousel from "../components/Card3DCarousel";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeatureCards />
      <EventCarousel />
      <FeaturedEventsCarousel />
      <EventJourneyCarousel />
      
      <StatsSection />
   
      <TeamSection />
      <ProcessSection />
      <Card3DCarousel />
   
      <PricingSection />
      <TestimonialsSection />
    
      <FAQSection />
      <VideoBackgroundSection />
      <CTASection />
    </div>
  );
};

export default Home;
