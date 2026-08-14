// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import Image, { StaticImageData } from "next/image";

// interface ServiceCardProps {
//   id: string;
//   title: string;
//   imageSrc: StaticImageData;
//   serviceIcon: any;
// }

// export default function ServiceCard({ id, title, imageSrc, serviceIcon }: ServiceCardProps) {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const [dimensions, setDimensions] = useState({ width: 380, height: 520 });

//   useEffect(() => {
//     if (cardRef.current) {
//       const resizeObserver = new ResizeObserver((entries) => {
//         for (let entry of entries) {
//           setDimensions({
//             width: entry.contentRect.width || 380,
//             height: entry.contentRect.height || 520,
//           });
//         }
//       });
//       resizeObserver.observe(cardRef.current);
//       return () => resizeObserver.disconnect();
//     }
//   }, []);

//   const w = dimensions.width;
//   const h = dimensions.height;
//   const r = 32; // Corner radius (rounded-[2rem])
//   const R = 120; // Cutout radius at bottom right

//   const pathData = `
//     M ${r},0
//     H ${w - r}
//     A ${r},${r} 0 0,1 ${w},${r}
//     V ${h - R}
//     A ${R},${R} 0 0,0 ${w - R},${h}
//     H ${r}
//     A ${r},${r} 0 0,1 0,${h - r}
//     V ${r}
//     A ${r},${r} 0 0,1 ${r},0
//     Z
//   `;

//   return (
//     <div
//       ref={cardRef}
//       className="group relative flex flex-col h-[480px] lg:h-[520px] transition-all duration-500"
//     >
//       {/* SVG Background and Border Outline */}
//       <svg
//         className="absolute inset-0 w-full h-full pointer-events-none z-0"
//         viewBox={`0 0 ${w} ${h}`}
//         fill="none"
//       >
//         <defs>
//           <clipPath id={`clip-${id}`}>
//             <path d={pathData} />
//           </clipPath>
//         </defs>
//         <path
//           d={pathData}
//           fill="rgba(255, 255, 255, 0.03)"
//           stroke="rgba(255, 255, 255, 0.1)"
//           strokeWidth="1.5"
//           className="transition-colors duration-500 group-hover:fill-[rgba(255,255,255,0.06)] group-hover:stroke-[rgba(255,255,255,0.25)]"
//         />
//         {/* Horizontal divider under title (at y = 88px) */}
//         <line
//           x1="0"
//           y1="88"
//           x2={w}
//           y2="88"
//           stroke="rgba(255, 255, 255, 0.1)"
//           strokeWidth="1.5"
//           className="transition-colors duration-500 group-hover:stroke-[rgba(255,255,255,0.25)]"
//         />
//       </svg>

//       {/* Clipped mockup content */}
//       <div
//         className="relative flex flex-col w-full h-full z-10"
//         style={{ clipPath: `url(#clip-${id})` }}
//       >
//         {/* Title Header */}
//         <div className="px-8 pt-8 pb-5 relative z-20">
//           <h3 className="text-2xl lg:text-[28px] font-semibold text-white tracking-wide">
//             {title}
//           </h3>
//         </div>

//         {/* Mockup Image - Flush to bottom and sides */}
//         <div className="relative flex-grow w-full flex items-end">
//           <Image
//             src={imageSrc}
//             alt={`${title} showcase`}
//             width={imageSrc.width}
//             height={imageSrc.height}
//             className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
//           />
//         </div>
//       </div>

//       {/* Static Circle button using service-icon.svg */}
//       <div
//         className="absolute bottom-0 right-0 w-[84px] h-[84px] z-30 pointer-events-auto"
//       >
//         <Image
//           src={serviceIcon}
//           alt="Arrow icon"
//           fill
//           className="w-full h-full object-contain"
//         />
//       </div>
//     </div>
//   );
// }

"use client"

import Image, { StaticImageData } from "next/image"
import { useEffect, useRef, useState } from "react"

interface ServiceCardProps {
  id: string
  title: string
  imageSrc: StaticImageData
  serviceIcon: StaticImageData | string
}

export default function ServiceCard({
  id,
  title,
  imageSrc,
  serviceIcon,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ width: 380, height: 520 })

  useEffect(() => {
    if (!cardRef.current) return

    const observer = new ResizeObserver(([entry]) => {
      setSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      })
    })

    observer.observe(cardRef.current)

    return () => observer.disconnect()
  }, [])

  const { width: w, height: h } = size
  const corner = 32
  const cutout = 128

  const path = `
    M ${corner} 0
    H ${w - corner}
    A ${corner} ${corner} 0 0 1 ${w} ${corner}
    V ${h - cutout}
    C ${w} ${h - 70}, ${w - 70} ${h}, ${w - cutout} ${h}
    H ${corner}
    A ${corner} ${corner} 0 0 1 0 ${h - corner}
    V ${corner}
    A ${corner} ${corner} 0 0 1 ${corner} 0
    Z
  `

  return (
    <div
      ref={cardRef}
      className="group relative h-[480px] w-full lg:h-[520px]"
    >
      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="none"
      >
        <defs>
          <clipPath id={`service-card-clip-${id}`}>
            <path d={path} />
          </clipPath>
        </defs>

        <path
          d={path}
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.5"
        />

        <line
          x1="0"
          y1="88"
          x2={w}
          y2="88"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="1.5"
        />
      </svg>

      <div
        className="relative z-10 flex h-full w-full flex-col overflow-hidden"
        style={{ clipPath: `url(#service-card-clip-${id})` }}
      >
        <div className="px-8 pb-5 pt-8">
          <h3 className="text-2xl font-semibold tracking-wide text-white lg:text-[28px]">
            {title}
          </h3>
        </div>

        <div className="flex min-h-0 flex-1 items-end">
          <Image
            src={imageSrc}
            alt={`${title} showcase`}
            width={imageSrc.width}
            height={imageSrc.height}
            className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-20 h-[120px] w-[120px] translate-x-[8%] translate-y-[8%]">
        <Image
          src={serviceIcon}
          alt=""
          fill
          className="object-contain"
        />
      </div>
    </div>
  )
}