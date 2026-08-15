import React from "react";
import Image, { StaticImageData } from "next/image";
import ServiceCard from "./ServiceCard";

// Import local images from assets/images/home
import servicesBgInside from "@/assets/images/home/services-bg-inside.jpg";
import serviceBgInsideMobile from "@/assets/images/home/service-bg-inside-mobile.jpg";
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
    <section className="relative z-0 -mx-3 md:-mx-17.5 md:min-h-screen -mt-5 sm:mt-0 pt-10 md:pt-29 pb-10 md:pb-13.75 mb-10 overflow-hidden rounded-[16px] sm:rounded-[2.5rem] lg:rounded-[3rem] font-urbanist">

      {/* --- BACKGROUND LAYERS --- */}
      {/* 1. Base Wavy Texture (Desktop) */}
      <Image
        src={servicesBgInside}
        alt="Dark wavy background texture"
        fill
        className="hidden sm:block object-cover object-center -z-20"
        priority
      />

      {/* 1. Base Wavy Texture (Mobile) */}
      <Image
        src={serviceBgInsideMobile}
        alt="Dark wavy background texture"
        fill
        className="block sm:hidden object-cover object-center -z-20"
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6.5 md:mb-24 px-4 md:px-0">
          <h2 className="font-urbanist font-semibold text-[40px] md:text-[44px] lg:text-[48px] text-white tracking-[-0.015em] shrink-0">
            My <span className="text-brand-orange">Services</span>
          </h2>
          <p className="max-w-120 md:max-w-140 text-gray-300 font-medium md:font-normal text-[16px] md:text-[18px] lg:text-[20px] tracking-[-0.015em] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales
          </p>
        </div>

        {/* Services Grid (Horizontal Scroll on Mobile & iPad, Grid on Desktop) */}
        <div className="flex xl:grid xl:grid-cols-3 gap-6 lg:gap-8 overflow-x-auto xl:overflow-x-visible snap-x snap-mandatory scrollbar-none px-4 md:px-6 xl:px-0">
          {SERVICES_DATA.map((service) => (
            <div key={service.id} className="w-[85vw] sm:w-[55vw] md:w-[44vw] lg:w-95 xl:w-auto shrink-0 snap-start">
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
        <div className="flex justify-center items-center gap-3 mt-6 md:mt-9.75">
          <button className="w-10 h-2.5 bg-brand-orange rounded-full transition-all cursor-pointer" aria-label="Current slide" />
          <button className="w-2.5 h-2.5 bg-white/30 hover:bg-white/60 rounded-full transition-all cursor-pointer" aria-label="Go to slide 2" />
          <button className="w-2.5 h-2.5 bg-white/30 hover:bg-white/60 rounded-full transition-all cursor-pointer" aria-label="Go to slide 3" />
          <button className="w-2.5 h-2.5 bg-white/30 hover:bg-white/60 rounded-full transition-all cursor-pointer" aria-label="Go to slide 4" />
        </div>
      </div>
    </section>
  );
}
