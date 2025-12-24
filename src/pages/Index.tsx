import { PublicLayout } from "@/components/layout/PublicLayout";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { DepartmentsSection } from "@/components/home/DepartmentsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import { HomeGallery } from "@/components/home/HomeGallery";

const Index = () => {
  return (
    <PublicLayout>
      <HeroSection />
      <HomeGallery />
      <AboutSection />
      <DepartmentsSection />
      <TestimonialsSection />
      <CTASection />
    </PublicLayout>
  );
};

export default Index;
