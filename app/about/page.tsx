"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function SobreMi() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
      <div className="aboutme-container">
        <img src="img/imgaboutme.jpg" alt="" id="imgfondo" />
        <img src="img/imgintrobn.jpg" alt="" id="imgfondo2" />
        <div className="aboutme"></div>
        <div className="aboutme-text">
          <p>
            I'm a{" "}
            <strong>
              Graphic Designer and front-end developer based in Seville, Spain.
            </strong>{" "}
            Actually I work everyday to improve both as designer and as a
            person.
            <br />
            <br />
            Right now I'm working as freelance, especialized in{" "}
            <strong>adversiting campaigns</strong>, <strong>branding</strong>,{" "}
            <strong>illustrations</strong>, <strong>layout</strong>. I also have
            knowledge in <strong>HTML5, CSS and JavaScript (React).</strong>
            <br />
            <br />
            If you're interested in working together
            <br />
            <strong>
              <Link href="/contact" className="flick">
                CONTACT ME!
              </Link>
            </strong>
          </p>
        </div>
      </div>
  );
}

