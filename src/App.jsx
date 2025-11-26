import React from "react";
import { Routes, Route } from "react-router-dom";

import HeroSection from "./sections/HeroSection.jsx";
import Navbar from "./sections/Navbar.jsx";
import ResearchPage from "./sections/ResearchPage.jsx";
import FacilitiesSection from "./sections/FacilitiesSection.jsx";
import PeopleSection from "./sections/PeopleSection.jsx";
import GallerySection from "./sections/GallerySection.jsx";

const App = () => {
  return (
    <div className="scroll-smooth">
      <div className="flex items-center justify-center">
        <Navbar />
      </div>

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
            </>
          }
        />

        {/* FULL RESEARCH PAGE */}
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/facilities" element={<FacilitiesSection />} />
        <Route path="/people" element={<PeopleSection />} />
        <Route path="/gallery" element={<GallerySection />} />
      </Routes>
    </div>
  );
};

export default App;
