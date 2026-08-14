import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <main className="flex-1 bg-white min-h-screen">
      <Hero />
      <ServicesSection />
    </main>
  );
}
