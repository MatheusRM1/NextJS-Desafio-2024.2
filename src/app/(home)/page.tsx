import Card from "@/components/cards";
import Carrosel from "@/components/carrossel";
import HeroSection from "@/components/hero-section";
import Produtos from "@/components/produtos";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#4095C9] from-20%  to-[#A8DADC] to-99% min-h-screen md:p-0">
        <HeroSection />
        <Carrosel />
        <Card />
        <Produtos />
    </div>
  );
}
