import React from "react";
import { Phone, Mail } from "lucide-react";
import ImageCarousel from "./components/ImageCarousel";
import HeroImage from "../assets/heroimage.jpg";

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col justify-center mt-10 px-4 space-y-10">
      {/* 🔵 IMAGE CAROUSEL ON TOP */}
      <ImageCarousel />

      {/* EXISTING HERO SECTION */}
      <section className="w-full flex justify-center mt-14 px-4">
        {" "}
        <div className="w-full md:w-[90%] bg-white rounded-3xl shadow-md p-8 md:p-12 border border-gray-200 flex flex-col md:flex-row gap-10">
          {" "}
          {/* LEFT TEXT BLOCK */}{" "}
          <div className="md:w-[70%] text-gray-700 leading-relaxed text-lg font-[Georgia]">
            {" "}
            <h2 className="italic font-bold text-2xl md:text-3xl text-gray-800 mb-4">
              {" "}
              NanoSynergie Materials Innovation Lab (NSMIL){" "}
            </h2>{" "}
            <p className="mb-6">
              {" "}
              The{" "}
              <strong> NanoSynergie Materials Innovation Lab (NSMIL) </strong>,
              represents a cutting-edge hub for interdisciplinary materials
              research. Pronounced "N-smile," the lab's name encapsulates the
              essence of synergie—a deliberate fusion of computational
              precision, nanoscale fabrication, surface engineering prowess,
              advanced membrane technologies, hydrogen fuel cells, and
              circular-economy principles for sustainable resource recovery.
              This powerful interplay transforms theoretical insights into
              practical innovations, addressing global challenges in energy,
              environment, and manufacturing..{" "}
            </p>{" "}
            <p>
              {" "}
              At its core, NSMIL's mission is to pioneer next-generation
              materials that bridge atomic-scale design with real-world
              applications. Drawing from Dr. Karthik's expertise in
              computational materials science, nanomaterials, surface
              engineering, material characterization, alloy development, heat
              transfer, and metallurgical extraction, the lab fosters a
              collaborative ecosystem where simulations predict, nanofabrication
              creates, and sustainability scales. With a tagline—"Where
              Computation, Nanofabrication, Surfaces, Membranes, Fuel cells and
              Circular Recovery Converge"—NSMIL aims to deliver impactful
              solutions, from defect-free industrial alloys and coatings to
              eco-friendly waste valorization.{" "}
            </p>{" "}
          </div>{" "}
          {/* RIGHT PROFILE BLOCK */}{" "}
          <div className="md:w-[30%] flex flex-col items-center text-center">
            {" "}
            {/* Professor Image */}{" "}
            <img
              src={HeroImage}
              alt="Professor portrait"
              className="w-52 h-64 object-cover rounded-md shadow"
            />{" "}
            {/* Name & Designation */}{" "}
            <div className="mt-4 text-[#0066cc] font-[Georgia] text-lg leading-snug">
              {" "}
              <p className="font-semibold text-xl">Dr. Karthik V</p>{" "}
              <p>Assistant Professor</p>{" "}
              <p>Department of Metallurgy and Materials Engineering</p> <p>NIT, Tiruchirappalli</p>{" "}
              {/* Contact Info */}{" "}
              <div className="mt-3 space-y-1 text-[#004b99] text-base">
                {" "}
                {/* Mobile */}{" "}
                <div className="flex items-center gap-2">
                  {" "}
                  <Phone size={18} /> <span>+91-97884 44987</span>{" "}
                  <Phone size={18} /> <span>+91 431 250 3454</span>{" "}
                </div>{" "}
                {/* Email */}{" "}
                <div className="flex items-center gap-2">
                  {" "}
                  <Mail size={18} /> <span>karthikv@nitt.edu</span>{" "}
                  <Mail size={18} /> <span>kkarthikvnitt@gmail.com </span>{" "}
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
