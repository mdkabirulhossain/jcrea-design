import Hero from "./_components/Hero";
import ServicesSection from "./_components/ServicesSection";

export default function Home() {
  return (
    <main className="flex-1 bg-white min-h-screen">
      <Hero />
      <ServicesSection />
    </main>
  );
}
