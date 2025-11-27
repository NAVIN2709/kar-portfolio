import React from "react";
import { Phone, Mail } from "lucide-react";
import ImageCarousel from "./components/ImageCarousel"; 

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col justify-center mt-20 px-4 space-y-10">
      {/* 🔵 IMAGE CAROUSEL ON TOP */}
      <ImageCarousel />

      {/* EXISTING HERO SECTION */}
      <section className="w-full flex justify-center mt-32 px-4">
        {" "}
        <div className="w-full md:w-[90%] bg-white rounded-3xl shadow-md p-8 md:p-12 border border-gray-200 flex flex-col md:flex-row gap-10">
          {" "}
          {/* LEFT TEXT BLOCK */}{" "}
          <div className="md:w-[70%] text-gray-700 leading-relaxed text-lg font-[Georgia]">
            {" "}
            <h2 className="italic font-bold text-2xl md:text-3xl text-gray-800 mb-4">
              {" "}
              Welcome to the printed electronics and nanoionics laboratory.{" "}
            </h2>{" "}
            <p className="mb-6">
              {" "}
              Here, we work on unconventional use of electrochemistry to control
              material properties. On one hand, electric charge double layer
              (EDL) is utilized to control carrier accumulation/ depletion in
              solution-processed semiconductor thin films. This approach leads
              to technologically relevant activity in the field of printed
              electronics based on inorganic semiconductors. Fully-printed thin
              film transistors (TFTs) are prepared that are typically gated with
              composite solid polymer electrolytes (CSPFEs) or other novel
              printable dielectric possibilities (e.g. self-assembled
              nanodielectrics, SANDs). The area of expertise of the group lies
              in solution processing/ printing of different metallic (pure
              metal, transparent conductors), semiconducting (oxides, carbon
              based, 2D semiconductors etc.) and insulator inks (CSPFEs, SANDs)
              towards fabrication of various functional devices, with a primary
              emphasis on field-effect devices.{" "}
            </p>{" "}
            <p>
              {" "}
              Optimization of material composition, printing parameters, curing
              routines and device geometry is performed regularly in order to
              obtain augmented static/high frequency performance at a device, as
              well as at the circuit level. In an alternative approach,
              electrochemical surface or bulk chemistry can also be utilized to
              tune physical properties of materials reversibly. One example of
              such phenomenon can be the use reversible electrochemistry to
              control bulk magnetization or magnetic phase transition. Here, a
              judicious selection of the magnetic material and the electrolyte
              is essential in order to promote either controlled surface
              chemical reaction (chemisorption, as in case of pseudocapacitors)
              or precise diffusion of ions inside the electrode material (as in
              case of intercalation-type batteries or fuel cells). Such
              electrochemical reactions, when fully reversible, may enable a
              voltage controlled tunable and dynamic variation in physical
              properties of bulk materials.{" "}
            </p>{" "}
          </div>{" "}
          {/* RIGHT PROFILE BLOCK */}{" "}
          <div className="md:w-[30%] flex flex-col items-center text-center">
            {" "}
            {/* Professor Image */}{" "}
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800"
              alt="Professor portrait"
              className="w-52 h-64 object-cover rounded-md shadow"
            />{" "}
            {/* Name & Designation */}{" "}
            <div className="mt-4 text-[#0066cc] font-[Georgia] text-lg leading-snug">
              {" "}
              <p className="font-semibold text-xl">Subho Dasgupta</p>{" "}
              <p>Associate Professor</p>{" "}
              <p>Department of Materials Engineering</p>{" "}
              <p>Indian Institute of Science, Bengaluru</p> {/* Contact Info */}{" "}
              <div className="mt-3 space-y-1 text-[#004b99] text-base">
                {" "}
                {/* Mobile */}{" "}
                <div className="flex items-center gap-2">
                  {" "}
                  <Phone size={18} /> <span>+91-98765-43210</span>{" "}
                </div>{" "}
                {/* Email */}{" "}
                <div className="flex items-center gap-2">
                  {" "}
                  <Mail size={18} /> <span>subho.dasgupta@iisc.ac.in</span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>
    </section>
  );
};

export default HeroSection;
