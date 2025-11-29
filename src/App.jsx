import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from "./pages/LandingPage";
import Hero from "./components/Hero/Hero"
import WhatWeOffer from "./components/Sections/WhatWeOffer";
import { useEffect } from "react";
import { initRevealAnimations } from "./utils/revealOnScroll";
import Footer from './components/Footer/Footer';

export default function App() {
    useEffect(() => {
      initRevealAnimations();
    }, []);
  return (
    <>
      {/* Background blobs */}
      <div className="blob-wrapper">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="page-content">
        <LandingPage />
      </div>

      {/* <Footer /> */}
    </>
  );
}

