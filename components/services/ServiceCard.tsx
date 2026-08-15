'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  imageSrc: StaticImageData;
  serviceIcon?: StaticImageData | string;
}

export default function ServiceCard({ id, title, imageSrc }: ServiceCardProps) {
  const maskId = `card-notch-mask-${id}`;

  return (
    <div className="relative w-full bg-white/5 backdrop-blur-md rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] shadow-2xl border border-[#9E9D9D] overflow-hidden select-none">

      {/* SVG Mask Definition (unique per card via id) */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <mask id={maskId} maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
            {/* White area = Visible part of the card */}
            <rect x="0" y="0" width="1" height="1" fill="white" rx="0.08" ry="0.06" />
            {/* Cutout area in the bottom-right for the circle notch */}
            <path
              d="
                M 0.60 1
                A 0.05 0.05 0 0 0 0.65 0.93
                A 0.22 0.22 0 0 1 0.93 0.65
                A 0.05 0.05 0 0 0 1 0.60
                L 1 1 Z
              "
              fill="black"
            />
          </mask>
        </defs>
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

      {/* Image Display Wrapper — Flush to left, right, and bottom edges, with responsive top padding */}
      <div className="relative w-full pt-4 sm:pt-6 md:pt-8 lg:pt-12">

        {/* Card Image Container with SVG Mask Applied */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            mask: `url(#${maskId})`,
            WebkitMask: `url(#${maskId})`,
          }}
        >
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

      {/* Floating Action Button — anchored to card, aligned with image corner */}
      <div className="absolute bottom-0 right-0 w-25 h-25 sm:w-30 sm:h-30 lg:w-32.5 lg:h-32.5 flex items-center justify-center pointer-events-none">
        <button
          type="button"
          aria-label={`View ${title} details`}
          className="pointer-events-auto w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#1a2330] hover:bg-[#232f40] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group border border-[#9E9D9D]/30"
        >
          <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 stroke-[2.2] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
}