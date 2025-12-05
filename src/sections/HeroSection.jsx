import React from "react";
import { Phone, Mail } from "lucide-react";
import ImageCarousel from "./components/ImageCarousel";
import HeroImage from "../assets/heroimage.jpg";

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col justify-center mt-10 px-4 space-y-10">
      <ImageCarousel />

      <section className="w-full flex justify-center mt-14 px-4">
        <div className="w-full md:w-[90%] bg-white rounded-3xl shadow-md p-8 md:p-12 border border-gray-200 flex flex-col md:flex-row gap-10">

          {/* LEFT TEXT BLOCK */}
          <div className="md:w-[70%] text-gray-700 leading-relaxed text-lg font-[Georgia] whitespace-normal break-words">
            <h2 className="italic font-bold text-2xl md:text-3xl text-gray-800 mb-4">
              NanoSynergie Materials Innovation Lab (NSMIL)
            </h2>

            <p className="mb-6">
              The <strong>NanoSynergie Materials Innovation Lab (NSMIL)</strong>
              represents a cutting-edge hub for interdisciplinary materials
              research. Pronounced "N-smile," the lab's name encapsulates the
              essence of synergie—a deliberate fusion of computational
              precision, nanoscale fabrication, surface engineering prowess,
              advanced membrane technologies, hydrogen fuel cells, and
              circular-economy principles...
            </p>

            <p>
              At its core, NSMIL's mission is to pioneer next-generation
              materials that bridge atomic-scale design with real-world
              applications...
            </p>
          </div>

          {/* RIGHT PROFILE BLOCK */}
          <div className="w-full flex flex-col items-center text-center">
            <img
              src={HeroImage}
              alt="Professor portrait"
              className="w-52 h-64 object-cover rounded-md shadow"
            />

            <div className="mt-4 text-[#0066cc] font-[Georgia] text-lg leading-snug whitespace-normal break-words">

              {/* Name & designation */}
              <p className="font-semibold text-lg xl:text-xl">Dr. Karthik V</p>
              <p>Assistant Professor</p>

              <p className="text-lg xl:text-xl">
                Department of Metallurgy and Materials Engineering
              </p>

              <p className="text-lg xl:text-xl">NIT, Tiruchirappalli</p>

              {/* CONTACT INFO */}
              <div className="mt-3 space-y-2 text-[#004b99] text-base">

                {/* Phone numbers */}
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Phone size={18} /> <span>+91-97884 44987</span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Phone size={18} /> <span>+91 431 250 3454</span>
                  </div>
                </div>

                {/* Emails */}
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Mail size={18} /> <span>karthikv@nitt.edu</span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span><Mail size={18} /></span> <span className="text-[15px] xl:text-[16px]">karthikvnitt@gmail.com</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
    </section>
  );
};

export default HeroSection;
