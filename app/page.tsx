import { AmbientBackdrop } from "@/components/shiftcare/AmbientBackdrop";
import { Navigation } from "@/components/shiftcare/Navigation";
import { HeroSection } from "@/components/shiftcare/HeroSection";
import { DemoSection } from "@/components/shiftcare/DemoSection";
import { ProblemSection } from "@/components/shiftcare/ProblemSection";
import { WorkflowSection } from "@/components/shiftcare/WorkflowSection";
import { PatientsSection } from "@/components/shiftcare/PatientsSection";
import { MayaSection } from "@/components/shiftcare/MayaSection";
import { FrameworkSection } from "@/components/shiftcare/FrameworkSection";
import { EducatorsSection } from "@/components/shiftcare/EducatorsSection";
import { CTASection } from "@/components/shiftcare/CTASection";
import { Footer } from "@/components/shiftcare/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-sc-bg">
      <AmbientBackdrop />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <DemoSection />
        <ProblemSection />
        <WorkflowSection />
        <PatientsSection />
        <MayaSection />
        <FrameworkSection />
        <EducatorsSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
