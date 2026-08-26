import { NavBar } from "@/components/nav-bar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { PlatformSection } from "@/components/platform-section";
import { ServiceSection } from "@/components/service-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <PlatformSection />
      <ServiceSection />
      <ContactSection />
      <SiteFooter />
    </>
  );
}
