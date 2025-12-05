import React from "react";
import Research1 from "../assets/research1.jpg";
import Research2 from "../assets/research2.jpg";
import Research3 from "../assets/research3.jpg";
import Research4 from "../assets/research4.jpg";
import Research5 from "../assets/research5.jpg";
import Research6 from "../assets/research6.jpg";

const researchData = [
  {
    id: 1,
    title: "Computational Technologies",
    description: `In this vertical, NSMIL leverages molecular dynamics (MD) simulations to unravel atomic-level behaviours in materials under extreme conditions. Using advanced computational tools, such as LAMMPS and density functional theory (DFT), we model defect formation, phase transformations, and interfacial dynamics in alloys and nanomaterials. NSMIL engaged in modelling and simulation of various manufacturing processes, including forming, welding, casting, and additive manufacturing. This predictive prowess accelerates material discovery, reducing experimental trial and error by 70-80%, and directly informs sustainable designs for energy-efficient manufacturing and circular resource loops`,
    image: Research1,
    professor: "Prof. ABCD",
  },
  {
    id: 2,
    title: "Nanomaterials Fabrication",
    description: `NSMIL's nanomaterials fabrication vertical pioneers scalable synthesis and processing techniques, including thin film deposition via sputtering, nanofibers via electrospinning, high-energy ball milling for nanostructured materials, electro- and electroless deposition for nanocomposite coatings, chemical precipitation routes for nanoparticle synthesis, sol-gel processing, and nanofluid development. We engineer advanced nanostructures and nanocomposites with precisely tailored properties, including enhanced mechanical strength, thermal conductivity, catalytic activity, and multifunctional performance. By seamlessly bridging laboratory innovation with industrial scalability, this vertical deliver next-generation materials for lightweight structural composites, high-performance thermal management systems, wear-resistant coatings, and efficient pollution-capturing filters — fully embodying our "atoms to circular economy" synergy.`,
    image: Research2 ,
    professor: "Prof. WXYZ",
  },
  {
    id:3,
    title:"Advanced Materials – High-Performance Alloys & Composites",
    description:"NSMIL develops next-generation metallic alloys and polymer composites tailored for extreme environments. This vertical encompasses high-entropy alloys, Ni- and Co-based superalloys, lightweight Mg and Al alloys, advanced high-strength steels, and high-performance polymer composites reinforced with nano- and micro-fillers. Using combinatorial design, heat treatment and unique processing, we achieve exceptional strength, corrosion resistance, thermal stability, and specific stiffness while minimising rare-earth usage and maximising recyclability. These materials offer sustainable, high-performance solutions for aerospace, automotive, energy, and structural applications, aligning fully with circular economy principles.",
    image:Research3,
    professor:"",
  },
  {
    id:4,
    title:"Surface Engineering",
    description:"NSMIL’s Surface Engineering vertical delivers advanced protective and functional coatings that dramatically extend material lifespan and performance. We employ magnetron and reactive sputtering, electrodeposition, electroless deposition, thermal spraying, laser texturing, electrospinning of polymer coatings, and self-assembled monolayers to create metallic, ceramic, composite, and polymeric coatings with tailored architectures. These surfaces provide superior corrosion resistance, wear resistance, high-temperature oxidation resistance, controlled wettability (superhydrophobic/hydrophilic), anti-fouling properties, and multi-functional behaviour for marine, aerospace, biomedical, and energy applications. By synergising precise deposition techniques with surface chemistry modification, this vertical minimises maintenance, reduces material consumption, and supports sustainable, circular manufacturing cycles.",
    image:Research4,
    professor:"",
  },
  {
    id:5,
    title:"Electrospun Fiber Membranes ",
    description:"NSMIL utilises electrospinning to fabricate nanofibrous membranes with hierarchical porosity for proton exchange membrane fuel cells (PEMFCs), thereby achieving enhanced ion conductivity while resisting degradation. These versatile scaffolds also serve in water desalination, gas separation, metal recovery, sensor applications, and tissue engineering, doped with catalysts such as Pt nanoparticles for enhanced multifunctionality. This vertical fuse nanofabrication, combined with energy technology, powers hydrogen economies and eco-membranes that recycle resources at the molecular scale.",
    image:Research5,
    professor:"",
  },
  {
    id:6,
    title:"Sustainable & Critical Metal Extraction",
    description:"NSMIL’s Sustainable & Critical Metal Extraction vertical focuses on securing strategic metals through environmentally responsible routes from both primary and secondary sources. We develop highly selective hydrometallurgical, bioleaching, pyrometallurgical, electrochemical, and hybrid processes to recover rare-earth elements, platinum-group metals, cobalt, nickel, copper, gold, and other critical/base metals from lean ores, tailings, spent batteries, electronic waste, catalysts, and industrial residues with better efficiency and near-zero liquid discharge. Complementing this, we valorize polymer wastes via catalytic pyrolysis, carbonization and a melt compaction process to upcycled products like pavers, filaments, sheets, etc. to support integrated waste-to-wealth chains. This vertical ensures resilient, domestic supply chains for clean energy and high-tech applications, transforming scarcity into circular abundance.",
    image:Research6,
    professor:"",
  }
];

const ResearchPage = () => {
  return (
    <div className="w-full flex flex-col items-center p-6 md:p-12 mt-0 font-[Georgia]">
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        NanoSynergie Materials Innovation Lab
      </h1>

      {/* Render All Research Sections */}
      <div className="w-full max-w-5xl space-y-13">
        {researchData.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={item.id} className="w-full">
              {/* Section Title */}
              <h2 className="text-2xl font-bold text-[#003366] mb-6">
                {item.title}
              </h2>

              {/* Two Column Layout - Alternating */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Image - Left for even indices, Right for odd */}
                <div className={!isEven ? "md:order-2" : ""}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-xl shadow-md border w-80"
                  />
                </div>

                {/* Description - Right for even indices, Left for odd */}
                <div
                  className={`text-gray-700 text-lg leading-relaxed ${
                    !isEven ? "md:order-1" : ""
                  }`}
                >
                  <p>{item.description}</p>
                </div>
              </div>

              {index < researchData.length - 1 && (
                <hr className="mt-5 border-gray-300" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResearchPage;
