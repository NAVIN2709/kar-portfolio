import React from "react";
import { Download } from "lucide-react";

const researchData = [
  {
    id: 1,
    title: "In₂O₃ Nanoparticles Based High Performance TFTs on PET Substrate",
    about: `A protocol to fabricate high-performance thin film transistors (TFTs) 
    and inverters based on In₂O₃ nanoparticles with process temperature <100°C 
    and on PET substrate has been developed. Printed depletion-load inverters 
    have shown high signal gain >200 and high-frequency operation up to 300 kHz.`,
    description: `The high performance originates from deep subthreshold operation 
    and edge-FET geometry that enables efficient near-vertical transport. These 
    oxide TFTs exhibit excellent strain tolerance up to 5% during bending fatigue 
    tests down to 1.5 mm diameter.`,
    images: [
      "/images/fig1.png",
      "/images/fig2.png"
    ],
    figureCaption: `Figure: (a) Schematic of In₂O₃ nanoparticle channel edge-FET device. 
    (b) Transfer characteristics. (c) Dynamic response of depletion-load inverter 
    at VDD = 2 V (Adapted from Wiley Small, 2022).`,
    pdf: "/sample.pdf",
    professor: "Prof. ABCD",
    students: [
      "Student 1 – Device Fabrication",
      "Student 2 – Electrical Characterization",
      "Student 3 – Fatigue Testing",
    ]
  },

  // Add future research items here...
];

const ResearchPage = () => {
  return (
    <div className="w-full flex flex-col items-center p-6 md:p-12 mt-24 font-[Georgia]">

      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Printed Electronics from Inorganic Semiconductors
      </h1>

      <p className="text-gray-600 max-w-4xl text-center text-lg leading-relaxed mb-12">
        Our laboratory focuses on solution-processed oxide semiconductors, printed 
        device architectures, and high-performance flexible electronics. Research 
        spans from nanoparticle inks to printed logic circuits and strain-tolerant 
        flexible transistors.
      </p>

      {/* Render All Research Sections */}
      <div className="w-full max-w-5xl space-y-20">
        {researchData.map((item) => (
          <div key={item.id} className="w-full">

            {/* Section Title */}
            <h2 className="text-2xl font-bold text-[#003366] mb-6">
              {item.title}
            </h2>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Left Images */}
              <div className="space-y-6">
                {item.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Research figure"
                    className="rounded-xl shadow-md border"
                  />
                ))}
              </div>

              {/* Right Description */}
              <div className="text-gray-700 text-lg leading-relaxed">
                <p className="mb-4">{item.about}</p>
                <p>{item.description}</p>
              </div>
            </div>

            {/* Figure Caption */}
            <p className="text-sm text-gray-500 mt-3 italic">
              {item.figureCaption}
            </p>

            {/* Download PDF */}
            <a
              href={item.pdf}
              download
              className="inline-flex items-center gap-2 mt-6 px-5 py-2 bg-blue-700 
              text-white rounded-lg shadow hover:bg-blue-800 transition"
            >
              <Download size={18} />
              Download Full PDF
            </a>

            {/* Contributions */}
            <div className="mt-10 bg-gray-100 p-6 rounded-xl border text-gray-700">
              <h3 className="text-xl font-bold mb-2">Contributions</h3>

              <p className="mb-4">
                <strong>Professor:</strong> {item.professor}
              </p>

              <h4 className="font-semibold mb-2">Students:</h4>
              <ul className="list-disc ml-6 space-y-1">
                {item.students.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>

            <hr className="mt-14 border-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPage;
