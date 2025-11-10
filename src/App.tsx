// import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import './App.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {


    useGSAP(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".product",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power2.out",
        }
      );

      return tl;
    });



  return (
    <>
      <Hero />
    </>
  )
}

export default App
