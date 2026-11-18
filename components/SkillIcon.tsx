"use client";

import { useEffect, useRef, useState } from "react";

const DEV = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${slug}/${slug}-original.svg`;
const SI = (slug: string) => `https://cdn.simpleicons.org/${slug}/ffffff`;

const line = {
  fill: "none",
  stroke: "#b49aff",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function Drawn({ name }: { name: string }) {
  const box = { viewBox: "0 0 20 20", width: 20, height: 20, "aria-hidden": true } as const;
  switch (name) {
    case "ethers.js":
      return (
        <svg {...box} {...line}>
          <path d="M10 2l7 4v8l-7 4-7-4V6z" />
          <path d="M3 6l7 4 7-4M10 10v8" />
        </svg>
      );
    case "Recharts":
      return (
        <svg {...box} {...line}>
          <path d="M4 17V10M10 17V4M16 17v-5" />
        </svg>
      );
    case "REST APIs":
      return (
        <svg {...box} {...line}>
          <path d="M3 7h13M13 4l3 3-3 3M17 13H4M7 10l-3 3 3 3" />
        </svg>
      );
    case "Groq":
      return (
        <svg {...box} {...line}>
          <path d="M11 2L4 11h5l-1 7 8-9h-5z" />
        </svg>
      );
    case "Alchemy":
      return (
        <svg {...box} {...line}>
          <path d="M8 2h4M9 2v5l-5 9a1 1 0 001 1h10a1 1 0 001-1l-5-9V2" />
        </svg>
      );
    case "Base":
      return (
        <svg {...box}>
          <circle cx="10" cy="10" r="8" fill="#0052ff" />
          <path d="M5.5 10h6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg {...box}>
          <rect x="2" y="2" width="16" height="16" rx="4" fill="none" stroke="#b49aff" strokeWidth="1.4" />
          <text x="10" y="14" textAnchor="middle" fontSize="9" fill="#b49aff">{name.charAt(0)}</text>
        </svg>
      );
  }
}

export default function SkillIcon({
  name, dev, si, invert,
}: { name: string; dev?: string; si?: string; invert?: boolean }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  const src = dev ? DEV(dev) : si ? SI(si) : undefined;

  // If the image failed before React attached its handler, catch it here.
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  if (!src || failed) return <Drawn name={name} />;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={src}
      alt=""
      width={20}
      height={20}
      loading="lazy"
      onError={() => setFailed(true)}
      style={invert ? { filter: "invert(1)" } : undefined}
    />
  );
}
