import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Gallery from "@/components/Gallery";
import SpecsTable from "@/components/SpecsTable";
import DetailStrip from "@/components/DetailStrip";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BentoGrid />
        <Gallery />
      <div className="lg:flex justify-center px-6 gap-20">
        <SpecsTable />
        <DetailStrip />
      </div>
      <FinalCta />
      <Footer />
    </main>
  );
}
