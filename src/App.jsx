import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from "./pages/LandingPage";
import Hero from "./components/Hero/Hero"

export default function App() {
  return (
    <>
      {/* Background blobs */}
      <div className="blob-wrapper">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>

      <Hero />

      {/* MAIN CONTENT */}
      <div className="page-content">
        <LandingPage />
      </div>
    </>
  );
}

