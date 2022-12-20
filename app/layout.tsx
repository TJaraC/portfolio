"use client";

import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Intro from "../components/Intro";




import "../styles/reset.css";
import "../styles/webfont.scss";
import "../styles/home.scss";
import "../styles/contact.scss";
import "../styles/intro.scss";
import "../styles/navbar.scss";
import "../styles/work.scss";
import "../styles/about.scss";
import "../styles/footer.scss";


// import "../styles/mediaqueries/mq_global.scss"
// import "../styles/mediaqueries/mq_navbar.scss"
// import "../styles/mediaqueries/mq_footer.scss"
// import "../styles/mediaqueries/mq_home.scss"
// import "../styles/mediaqueries/mq_sobremi.scss"
// import "../styles/mediaqueries/mq_work.scss"

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  const [scrollDownHeight, setScrollDownHeight] = useState("0%");
  let [loading, setLoading] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(()=> {
    
  window.onscroll = function () {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    var scrolled = (winScroll / height) * 100;
    setScrollDownHeight(scrolled + "%");
  };
  }, [])

  useEffect(() => {
    if(isFirstVisit){
      setIsFirstVisit(false)

      let timer1 = setTimeout(() => setLoading(false), 5800);

      return () => {
        clearTimeout(timer1);
      };
    } 
  }, []);

  return (
    <html lang="en">
      <body >
        <Navbar />
        
        <div id="scrolldown" style={{ height: scrollDownHeight }}></div>


        <div className="bg"></div>

        {loading && <Intro />}

        {children}
        
        <Footer />
      </body>
    </html>
  );
}