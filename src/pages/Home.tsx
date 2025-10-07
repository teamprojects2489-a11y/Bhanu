import React, { Suspense, lazy } from "react";
import HeroSection from "../components/HeroSection"; // load first

// Lazy load heavy/non-critical sections
const EventCarousel = lazy(() => import("../components/EventCarousel"));
const FeaturedEventsCarousel = lazy(
  () => import("../components/FeaturedEventsCarousel")
);
const EventJourneyCarousel = lazy(
  () => import("../components/EventJourneyCarousel")
);
const FeatureCards = lazy(() => import("../components/FeatureCards"));
const StatsSection = lazy(() => import("../components/StatsSection"));
const ProcessSection = lazy(() => import("../components/ProcessSection"));
const TestimonialsSection = lazy(
  () => import("../components/TestimonialsSection")
);
const FAQSection = lazy(() => import("../components/FAQSection"));
const CTASection = lazy(() => import("../components/CTASection"));
const VideoBackgroundSection = lazy(
  () => import("../components/VideoBackgroundSection")
);
const TeamSection = lazy(() => import("../components/TeamSection"));
const PricingSection = lazy(() => import("../components/PricingSection"));
const Card3DCarousel = lazy(() => import("../components/Card3DCarousel"));

const LoadingSkeleton = ({ height = 200 }: { height?: number }) => (
  <div
    style={{
      height,
      background: "#f0f0f0",
      margin: "20px 0",
      borderRadius: "8px",
    }}
  />
);

const Home: React.FC = () => {
  return (
    <div>
      {/* ✅ Load Hero instantly */}
      <HeroSection />

      {/* 🕒 Lazy load each section individually with its own fallback */}
      <Suspense fallback={<LoadingSkeleton height={400} />}>
        <FeatureCards />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton height={300} />}>
        <EventCarousel />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton height={300} />}>
        <FeaturedEventsCarousel />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton height={300} />}>
        <EventJourneyCarousel />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton height={200} />}>
        <StatsSection />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton height={400} />}>
        <TeamSection />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton height={400} />}>
        <ProcessSection />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton height={400} />}>
        <Card3DCarousel />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton height={400} />}>
        <PricingSection />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton height={300} />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton height={300} />}>
        <FAQSection />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton height={500} />}>
        <VideoBackgroundSection />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton height={200} />}>
        <CTASection />
      </Suspense>
    </div>
  );
};

export default Home;
