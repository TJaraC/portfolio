"use client";

import { useState } from "react";
import { useEffect } from "react";

import "aos/dist/aos.css";

import Link from 'next/link'

function Navbar() {
  const [rotate, setRotate] = useState(`rotate(0deg)`);

  useEffect(()=> {
    window.addEventListener("scroll", () =>
    setRotate(`rotate(${window.pageYOffset / 2}deg)`)
  );
  }, [])

  return (
    <nav className="navbar">
      <div className="leftside-navbar">
        <span id="initials" style={{ transform: rotate }}>
          <Link href="/">TJC.</Link>
        </span>
      </div>
      <ul className="rightside-navbar">
        <li>
          <Link href="/work" className="btn-effect">
            work
          </Link>
        </li>
        <li>
          <Link href="/about" className="btn-effect">
            about me
          </Link>
        </li>
        <li>
          <Link href="/contact" className="btn-effect">
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
