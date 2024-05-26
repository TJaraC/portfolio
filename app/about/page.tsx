import Link from "next/link";

export default function SobreMi() {
  return (
      <div className="aboutme-container">
        <img src="img/imgaboutme.jpg" alt="" id="imgfondo" />
        <img src="img/imgintrobn.jpg" alt="" id="imgfondo2" />
        <div className="aboutme"></div>
        <div className="aboutme-text">
          <p>
            I'm a <strong>UX/UI Designer and Graphic Designer</strong> based in Seville, Spain.
            Currently I work everyday to improve both as a designer and as a person.

            <br/>
            <br/>
            With experience as a graphic designer in <strong>branding</strong>, <strong>illustrations</strong>, <strong>infographics</strong> and <strong>layout</strong>. Right now I'm training to become a UX/UI designer, learning about <strong>web architecture</strong>, <strong>responsive web design</strong>, <strong>app design</strong>, <strong>prototyping</strong>, <strong>design systems</strong>...
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

