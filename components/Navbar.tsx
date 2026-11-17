"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <Link className="nav-logo" href="/" aria-label="Chinyere John-Nnah home">
        CJ
      </Link>
      <div className="nav-links">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="nav-link"
            aria-current={pathname === l.href ? "page" : undefined}
          >
            {l.label}
          </Link>
        ))}
        <a href="mailto:chinyerejohnnna@gmail.com" className="nav-link nav-contact">
          Email me
        </a>
      </div>
    </nav>
  );
}
