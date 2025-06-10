import CardGrid from "@/components/custom/global/CardGrid";
import Footer from "@/components/custom/global/footer";
import Header from "@/components/custom/global/Header/header";
import HeroSlider from "@/components/custom/HeroSlider/HeroSlider";
import HomeHero from "@/components/custom/global/HomeHero";
import AppleCardsCarousel from "@/components/custom/global/AppleCardsCarousel";
import TextHoverEffect from "@/components/custom/global/TextHoverEffect";
import FeaturesSectionDemo from "@/components/custom/global/FeatureSection";
import TestimonialSlider from "@/components/custom/global/TestimonialSlider";
import TestimonialSliderTwo from "@/components/custom/global/TestimonialSliderTwo";
import HeroSectionOne from "@/components/custom/global/HeroSectionOne";
import ContactForm from "@/components/custom/global/ContactForm";

export default function Home() {
  return (
    <>
      <Header />

      <HeroSectionOne />
      <FeaturesSectionDemo />
      <AppleCardsCarousel />

      <TestimonialSlider />
      <TestimonialSliderTwo />
      <TextHoverEffect />
      <ContactForm />
      <Footer />
    </>
  );
}
