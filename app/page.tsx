import CardGrid from "@/components/custom/global/CardGrid";
import Footer from "@/components/custom/global/footer";
import Header from "@/components/custom/global/Header/header";
import HomeHero from "@/components/custom/global/HomeHero";

export default function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      <CardGrid />
      <Footer />
    </>
  );
}
