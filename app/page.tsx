import { AmbientBackdrop } from "@/components/shiftcare/AmbientBackdrop";
import { Navigation } from "@/components/shiftcare/Navigation";
import { HeroSection } from "@/components/shiftcare/HeroSection";
import { DemoSection } from "@/components/shiftcare/DemoSection";
import { TrustSection } from "@/components/shiftcare/TrustSection";
import { ProblemSection } from "@/components/shiftcare/ProblemSection";
import { WorkflowSection } from "@/components/shiftcare/WorkflowSection";
import { PatientsSection } from "@/components/shiftcare/PatientsSection";
import { MayaSection } from "@/components/shiftcare/MayaSection";
import { FrameworkSection } from "@/components/shiftcare/FrameworkSection";
import { EducatorsSection } from "@/components/shiftcare/EducatorsSection";
import { PricingSection } from "@/components/shiftcare/PricingSection";
import { CTASection } from "@/components/shiftcare/CTASection";
import { Footer } from "@/components/shiftcare/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-sc-bg">
      <AmbientBackdrop />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <DemoSection />
        <TrustSection />
        <ProblemSection />
        <WorkflowSection />
        <PatientsSection />
        <MayaSection />
        <FrameworkSection />
        <EducatorsSection />
        <PricingSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
