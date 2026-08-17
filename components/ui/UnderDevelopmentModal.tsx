"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles, Wrench } from "lucide-react";
import sparkleTop from "@/assets/icons/home/sparkle-top.svg";

interface UnderDevelopmentModalProps {
  pageTitle?: string;
}

export default function UnderDevelopmentModal({ pageTitle }: UnderDevelopmentModalProps) {
  return (
    <section className="pt-34 sm:pt-36 lg:pt-50 pb-12 flex items-center justify-center px-4 sm:px-6 font-urbanist relative min-h-[60vh]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-80 sm:h-80 bg-brand-orange/10 blur-[90px] rounded-full pointer-events-none -z-10" />

      {/* Modal Container */}
      <div className="relative bg-brand-dark border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 max-w-sm sm:max-w-md w-full shadow-2xl text-center flex flex-col items-center overflow-hidden">
        {/* Top Decorative Sparkle Background Effect */}
        <div className="absolute -top-8 -right-8 w-24 h-24 bg-brand-orange/10 blur-xl rounded-full pointer-events-none" />

        {/* Hello / Under Development Badge */}
        <div className="relative mb-4">
          <div className="absolute -top-3 -right-5 w-5 h-5 sm:w-6 sm:h-6">
            <Image
              src={sparkleTop}
              alt="Decorative sparkle"
              fill
              className="object-contain"
              aria-hidden="true"
            />
          </div>
          <span className="inline-flex items-center gap-1.5 border border-brand-orange/40 bg-brand-orange/10 rounded-full px-3.5 py-1 text-[11px] sm:text-xs font-semibold text-brand-orange tracking-wide uppercase shadow-sm font-urbanist">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-orange animate-pulse" />
            Under Development
          </span>
        </div>

        {/* Center Animated Icon Badge */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center mb-4 shadow-inner text-brand-orange">
          <Wrench className="w-6 h-6 sm:w-7 sm:h-7 text-brand-orange stroke-[1.75]" />
        </div>

        {/* Heading */}
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-[-0.015em] mb-2.5 leading-tight font-urbanist">
          {pageTitle ? pageTitle : "Page"} is{" "}
          <span className="text-brand-orange">Under Development</span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-xs mb-6 font-urbanist">
          We are currently building and refining this page to deliver an outstanding experience. Please check back soon!
        </p>

        {/* Back to Home Button */}
        <Link
          href="/"
          className="group relative inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-[#e6752b] active:scale-95 text-white font-semibold text-sm sm:text-base py-2.5 px-6 sm:py-3 sm:px-7 rounded-full shadow-md shadow-brand-orange/20 transition-all duration-300 w-full sm:w-auto"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>
      </div>
    </section>
  );
}
