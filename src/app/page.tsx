import { About } from "@/components/About";
import { AnimalExplorer } from "@/components/AnimalExplorer";
import { Conservation } from "@/components/Conservation";
import { CTA } from "@/components/CTA";
import { Experiences } from "@/components/Experiences";
import { FeaturedAnimal } from "@/components/FeaturedAnimal";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { VisitInfo } from "@/components/VisitInfo";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="content">
        <Hero />
        <Intro />
        <AnimalExplorer />
        <FeaturedAnimal />
        <Experiences />
        <VisitInfo />
        <Conservation />
        <Gallery />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
