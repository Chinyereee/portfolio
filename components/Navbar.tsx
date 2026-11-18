import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <div className="wrap">
        <Link href="/" className="brand" aria-label="Chinyere John-Nnah, home">CJ</Link>
        <div className="links">
          <Link href="/#about">About</Link>
          <Link href="/#work">Work</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
