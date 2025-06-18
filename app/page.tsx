import AppleCardsCarousel from "@/components/custom/global/AppleCardsCarousel";
import ContactForm from "@/components/custom/global/ContactForm";
import FeaturesSectionDemo from "@/components/custom/global/FeatureSection";
import Footer from "@/components/custom/global/footer";
import Header from "@/components/custom/global/Header/header";
import HeroSectionOne from "@/components/custom/global/HeroSectionOne";
import TestimonialSlider from "@/components/custom/global/TestimonialSlider";
import TestimonialSliderTwo from "@/components/custom/global/TestimonialSliderTwo";

export default function Home() {
  return (
    <>
      <Header />

      <HeroSectionOne />

      <h2 className="text-center mt-[60px] mb-[60px] max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Why we are the best!
      </h2>

      <div className="max-w-[320px] md:max-w-full mx-auto">
        <FeaturesSectionDemo />
      </div>
      <AppleCardsCarousel />

      <h2 className="text-center mt-[60px] mb-[80px] max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        What out clients say
      </h2>
      <TestimonialSlider />
      <TestimonialSliderTwo />
      <h2 className="text-center mt-[60px] mb-[60px] max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Contact Us
      </h2>
      <ContactForm />
      <Footer />
    </>
  );
}
