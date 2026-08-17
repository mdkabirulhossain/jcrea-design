
import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import sparkleTop from "@/assets/icons/home/sparkle-top.svg";
import sparkleLeft from "@/assets/icons/home/sparkle-left.svg";
import sparkleLeftMobile from "@/assets/icons/home/sparkle-left-mobile.svg";
import quoteUp from "@/assets/icons/home/quote-up.svg";
import jennyPortrait from "@/assets/images/home/jenny-portrait.png";

export default function Hero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-0 flex flex-col items-center overflow-hidden font-urbanist">
      
      <div className="text-center z-10 relative flex flex-col items-center">

        {/* Hello! Badge */}
        <div className="relative mb-6 mt-9">
          <div className="absolute -top-5 -right-8 w-8 h-8 ">
            <Image
              src={sparkleTop}
              alt="Decorative sparkle"
              fill
              className="object-contain"
              aria-hidden="true"
            />
          </div>
          <span className="inline-flex items-center justify-center border border-gray-800 rounded-full px-6 py-1.5 text-sm font-medium text-gray-900 bg-white shadow-sm font-urbanist">
            Hello!
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[36px] md:text-7xl lg:text-[95px] font-semibold md:font-extrabold text-brand-dark tracking-[-0.015em] leading-[1.1] font-urbanist">
          I&apos;m <span className="text-brand-orange">Jenny</span>, <br />
          <span className="relative inline-block mt-2">
            Product Designer

            {/* Mobile Left Sparkle */}
            <div className="absolute -left-7 -bottom-6 w-9 h-9 block md:hidden">
              <Image
                src={sparkleLeftMobile}
                alt="Decorative sparkle"
                fill
                className="object-contain"
                aria-hidden="true"
              />
            </div>

            {/* Tablet/Desktop Left Sparkle */}
            <div className="absolute md:-left-16 md:-bottom-10 md:w-18 md:h-18.75 hidden md:block">
              <Image
                src={sparkleLeft}
                alt="Decorative sparkle"
                fill
                className="object-contain"
                aria-hidden="true"
              />
            </div>
          </span>
        </h1>
      </div>

      {/* PORTRAIT & FLOATING TESTIMONIALS */}
      <div className="relative w-full -mt-12 md:-mt-25 lg:-mt-45 flex justify-center items-end min-h-100 md:min-h-130 z-20">

        {/* Left Floating Testimonial */}
        <div className="flex flex-col absolute left-0 top-20 md:top-35 lg:top-[40%] w-[48%] md:w-[42%] max-w-45 lg:max-w-87.5 z-30">
          <Image
            src={quoteUp}
            alt="Quote icon"
            className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 mb-1 lg:mb-2 xl:mb-4 object-contain"
          />
          <p className="text-gray-600 text-[12px] md:text-[13px] lg:text-[16px] xl:text-[20px] leading-none font-medium font-urbanist tracking-[-0.015em]">
            Jenny&apos;s Exceptional product
            <span className="lg:hidden"><br />design ensure our website&apos;s<br />success. Highly Recommended</span>
            <span className="hidden lg:inline"> design<br />ensure our website&apos;s success.<br />Highly Recommended</span>
          </p>
        </div>

        {/* Right Floating Experience */}
        <div className="flex flex-col items-end absolute right-0 top-20 md:top-35 lg:top-[40%] w-[42%] lg:w-auto z-30">
          <div className="flex gap-0.5 lg:gap-1 mb-1 lg:mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="text-brand-orange w-3.5 h-3.5 md:w-4.5 md:h-4.5 lg:w-6 lg:h-6 fill-brand-orange"
                strokeWidth={0}
              />
            ))}
          </div>
          <h3 className="text-[19.73px] md:text-2xl lg:text-[47px] font-bold text-brand-dark mt-0.5 lg:mt-1 font-urbanist tracking-[-0.015em]">10 Years</h3>
          <p className="text-gray-900 font-normal font-urbanist lg:font-lufga text-[12px] md:text-[13px] lg:text-[16px] xl:text-[20px] leading-none tracking-[-0.015em]">Experience</p>
        </div>

        {/* Center Portrait & CSS-Only Background Arch */}
        <div className="relative w-85 md:w-125 lg:w-159 flex items-end justify-center z-20 -translate-y-5 md:-translate-y-20 lg:translate-y-0">

          {/* THE CSS ARCH */}
          <div className="absolute bottom-0 w-[92%] h-[65%] bg-orange-300 rounded-t-[999px] -z-10" />

          {/* Main Portrait Image */}
          <Image
            src={jennyPortrait}
            alt="Jenny - Product Designer"
            width={952}
            height={636}
            className="object-contain object-bottom w-full h-auto drop-shadow-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}