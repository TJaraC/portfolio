"use client";

import { useEffect } from "react";

export default function Contacto() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="contact-me">
      <div className="linea1">
        <p>
          Let's <strong>WORK</strong> together!
        </p>
      </div>
      <div className="linea2">
        <p>contact me on</p>
        <a href="#">contact@tjaracas.com</a>
      </div>
      <div className="linea3">
        <p>to start</p>
      </div>
    </div>
  );
}
