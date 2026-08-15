
'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  imageSrc: StaticImageData;
  serviceIcon?: StaticImageData | string;
}

export default function ServiceCard({ title, imageSrc }: ServiceCardProps) {
  const notchSvgUrl = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M100 0 V 100 H 0 C 15 100, 25 85, 25 65 A 40 40 0 0 1 65 25 C 85 25, 100 15, 100 0 Z' fill='black'/%3E%3C/svg%3E")`;

  return (
    <div className="relative w-full h-full [--notch-size:88px] sm:[--notch-size:104px] lg:[--notch-size:120px]">
      <div
        className="relative w-full h-full bg-white/5 backdrop-blur-md rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] shadow-2xl border border-[#9E9D9D] overflow-hidden select-none"
        style={{ 
          maskImage: `${notchSvgUrl}, linear-gradient(black, black)`,
          maskPosition: 'bottom right, center',
          maskRepeat: 'no-repeat, no-repeat',
          maskSize: 'var(--notch-size) var(--notch-size), 100% 100%',
          maskComposite: 'exclude',
          WebkitMaskImage: `${notchSvgUrl}, linear-gradient(black, black)`,
          WebkitMaskPosition: 'bottom right, center',
          WebkitMaskRepeat: 'no-repeat, no-repeat',
          WebkitMaskSize: 'var(--notch-size) var(--notch-size), 100% 100%',
          WebkitMaskComposite: 'destination-out', 
        }}
      >
        {/* Notch Border Overlay: Draws the 1px border along the curved cutout to match the card border */}
        <svg
          className="absolute bottom-0 right-0 pointer-events-none z-20"
          style={{ width: 'var(--notch-size)', height: 'var(--notch-size)' }}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0 100 C 15 100, 25 85, 25 65 A 40 40 0 0 1 65 25 C 85 25, 100 15, 100 0"
            stroke="#9E9D9D"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        {/* Background Radial Glow */}
        <div className="absolute top-0 left-0 w-80 h-56 bg-linear-to-br from-red-600/40 via-orange-600/20 to-transparent blur-3xl pointer-events-none -translate-x-12 -translate-y-12" />

        {/* Card Header */}
        <div className="relative z-10 pt-5 sm:pt-6 md:pt-8 px-5 sm:px-6 pb-2">
          <h3 className="text-2xl sm:text-3xl md:text-[28px] lg:text-3xl xl:text-4xl font-semibold tracking-tight text-white/95">
            {title}
          </h3>
          {/* Full-width line spanning edge to edge */}
          <div className="-mx-5 sm:-mx-6 h-px bg-[#9E9D9D] mt-4 sm:mt-5" />
        </div>

        {/* Image Display Wrapper */}
        <div className="relative w-full pt-4 sm:pt-6 md:pt-8 lg:pt-12">
          <div className="relative w-full overflow-hidden">
            <Image
              src={imageSrc}
              alt={`${title} showcase`}
              width={imageSrc.width}
              height={imageSrc.height}
              priority
              className="w-full h-auto object-cover block"
            />
          </div>
        </div>
      </div>

      {/* Floating Action Button Container */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none z-30"
        style={{
          width: 'var(--notch-size)',
          height: 'var(--notch-size)',
        }}
      >
        <button
          type="button"
          aria-label={`View ${title} details`}
          className="absolute top-[65%] left-[65%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#1a2330] hover:bg-[#232f40] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group border border-[#9E9D9D]/30"
        >
          <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 stroke-[2.2] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
}