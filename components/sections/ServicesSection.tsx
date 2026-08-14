import React from "react";
import Image, { StaticImageData } from "next/image";
import ServiceCard from "@/components/services/ServiceCard";

// Import local images from assets/images/home
import servicesBgInside from "@/assets/images/home/services-bg-inside.jpg";
import serviceBgUp from "@/assets/images/home/service-bg-up.png";
import serviceBgUpMobile from "@/assets/images/home/service-bg-up-mobile.png";
import uiUxImage from "@/assets/images/home/ui-ux-image.png";
import webDesignImage from "@/assets/images/home/web-design-image.png";
import landingPageImage from "@/assets/images/home/landing-page-image.png";
import serviceIcon from "@/assets/icons/home/service-icon.svg";

// Define strict types for production standards
interface ServiceCardType {
  id: string;
  title: string;
  imageSrc: StaticImageData;
}

const SERVICES_DATA: ServiceCardType[] = [
  {
    id: "ui-ux",
    title: "UI/ UX Design",
    imageSrc: uiUxImage,
  },
  {
    id: "web-design",
    title: "Web Design",
    imageSrc: webDesignImage,
  },
  {
    id: "landing-page",
    title: "Landing Page",
    imageSrc: landingPageImage,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative z-0 -mx-3 md:-mx-17.5 min-h-screen -mt-5 sm:mt-0 pt-10 pb-16 md:py-24 overflow-hidden rounded-[16px] sm:rounded-[2.5rem] lg:rounded-[3rem] font-urbanist">
      
      {/* --- BACKGROUND LAYERS --- */}
      {/* 1. Base Wavy Texture */}
      <Image
        src={servicesBgInside}
        alt="Dark wavy background texture"
        fill
        className="object-cover object-center -z-20"
        priority
      />

      {/* 2. Floating 3D Shapes (Desktop) */}
      <Image
        src={serviceBgUp}
        alt="Floating 3D orange shapes"
        fill
        className="hidden sm:block object-cover object-center mix-blend-screen opacity-90 -z-10"
        priority
      />

      {/* 2. Floating 3D Shapes (Mobile) */}
      <Image
        src={serviceBgUpMobile}
        alt="Floating 3D orange shapes"
        fill
        className="block sm:hidden object-contain object-center -z-10"
        priority
      />

      {/* --- FOREGROUND CONTENT --- */}
      <div className="relative z-10 w-full px-0 md:px-12 lg:px-20">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16 px-4 md:px-0">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white tracking-tight">
            My <span className="text-brand-orange">Services</span>
          </h2>
          <p className="max-w-120 text-gray-300 text-sm md:text-base leading-relaxed font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales
          </p>
        </div>

        {/* Services Grid (Horizontal Scroll on Mobile, Grid on Desktop) */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scrollbar-none px-4 md:px-0 pb-4">
          {SERVICES_DATA.map((service) => (
            <div key={service.id} className="w-[85vw] md:w-auto flex-shrink-0 snap-start">
              <ServiceCard
                id={service.id}
                title={service.title}
                imageSrc={service.imageSrc}
                serviceIcon={serviceIcon}
              />
            </div>
          ))}
        </div>

        {/* Slider Pagination Dots */}
        <div className="flex justify-center items-center gap-3 mt-16">
          <button className="w-10 h-2.5 bg-brand-orange rounded-full transition-all cursor-pointer" aria-label="Current slide" />
          <button className="w-2.5 h-2.5 bg-white/30 hover:bg-white/60 rounded-full transition-all cursor-pointer" aria-label="Go to slide 2" />
          <button className="w-2.5 h-2.5 bg-white/30 hover:bg-white/60 rounded-full transition-all cursor-pointer" aria-label="Go to slide 3" />
          <button className="w-2.5 h-2.5 bg-white/30 hover:bg-white/60 rounded-full transition-all cursor-pointer" aria-label="Go to slide 4" />
        </div>
      </div>
    </section>
  );
}
