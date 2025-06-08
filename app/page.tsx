import CardGrid from "@/components/custom/global/CardGrid";
import Footer from "@/components/custom/global/footer";
import Header from "@/components/custom/global/Header/header";
import HeroSlider from "@/components/custom/HeroSlider/HeroSlider";
import HomeHero from "@/components/custom/global/HomeHero";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSlider />

      <CardGrid />
      <Footer />
    </>
  );
}
