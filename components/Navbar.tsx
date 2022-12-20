"use client";

import { useState } from "react";
import { useEffect } from "react";
/* import AOS from "aos"; */
import "aos/dist/aos.css";
// import AOS from "@dartmoon/aos-responsive";
import Link from 'next/link'

function Navbar() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1200,
  //   });
  // });

  const [rotate, setRotate] = useState(`rotate(0deg)`);



  useEffect(()=> {

    window.addEventListener("scroll", () =>
    setRotate(`rotate(${window.pageYOffset / 2}deg)`)
  );
  }, [])

  return (
    <nav className="navbar">
      {/* <div className="leftside-navbar" data-aos="fade-down"> */}
      <div className="leftside-navbar">
        <span id="initials" style={{ transform: rotate }}>
          <Link href="/">TJC.</Link>
        </span>
      </div>
      {/* <ul className="rightside-navbar" data-aos="fade-down"> */}
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
