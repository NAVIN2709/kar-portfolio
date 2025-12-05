import React from "react";
import Facility1 from "../assets/facility1.jpg";
import Facility2 from "../assets/facility2.jpg";
import Facility3 from "../assets/facility3.jpg";
import Facility4 from "../assets/facility4.jpg";
import Facility5 from "../assets/facility5.jpg";
import Facility6 from "../assets/facility6.jpg";
import Facility7 from "../assets/facility7.jpg";
import Facility8 from "../assets/facility8.jpg";
import Facility9 from "../assets/facility9.jpg";
import Facility10 from "../assets/facility10.jpg";
import Facility11 from "../assets/facility11.jpg";
import Facility12 from "../assets/facility12.jpg";
import Facility13 from "../assets/facility13.jpg";

const Softwares = [
  {
    id: 1,
    name: "Casting Simulation Software – ADSTEFAN",
    image: Facility1,
  },
  {
    id: 2,
    name: "Simufact Welding",
    image: Facility2,
    description: "High-temperature furnace for annealing, sintering, and controlled thermal processes."
  },
  {
    id: 3,
    name: "Simufact Additive",
    image: Facility3,
    description: "Used for optical characterization of materials, absorbance and transmission studies."
  },
  {
    id: 4,
    name: "Simufact Forming",
    image: Facility4,
    description: "Electrical measurement setup for I-V characteristics of printed electronic devices."
  }
];

const Equipments = [
  {
    id: 1,
    name: "Optical Emission Spectrometer",
    image: Facility5,
  },
  {
    id: 2,
    name: "Probe Sonicator",
    image: Facility6,
  },
  {
    id: 3,
    name: "Workstation Computer",
    image: Facility7,
  },
  {
    id: 4,
    name: "Metallurgical Microscope",
    image: Facility8,
  },
  {
    id: 5,
    name: "Stereo Zoom Microscope",
    image: Facility9,
  },
  {
    id: 6,
    name: "High Energy Planetary Ball Mill",
    image: Facility10,
  },
  {
    id: 7,
    name: "Electrodeposition Rectifier",
    image: Facility11,
  },
  {
    id: 8,
    name: "Ion Exchange Column",
    image: Facility12,
  },
  {
    id: 9,
    name: "Sedimentation Setup",
    image: Facility13,
  },
];


const FacilitiesSection = () => {
  return (
    <div className="w-full flex flex-col items-center p-6 md:p-12 mt-0">
      
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center border-b-2 pb-0 ">
        Laboratory Facilities
      </h1>

      {/* Softwares */}
      <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center border-b-2 pb-0">
        Softwares
      </h1>

      {/* Equipment Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 space-y-5 max-w-6xl w-[70%]">
        {Softwares.map((equip) => (
          <div
            key={equip.id}
            className="bg-white rounded-2xl shadow-md border hover:shadow-xl transition p-2 h-fit w-fit"
          >
            <img
              src={equip.image}
              alt={equip.name}
              className="h-full w-full object-cover rounded-xl"
            />

            <h2 className="text-md font-semibold text-gray-800 mt-2">
              {equip.name}
            </h2>
          </div>
        ))}
      </div>

      {/* Equipments */}
      <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center border-b-2 pb-0 mt-10">
        Equipments
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl w-fit">
        {Equipments.map((equip) => (
          <div
            key={equip.id}
            className="bg-white rounded-2xl shadow-md border hover:shadow-xl transition p-2 h-fit w-fit"
          >
            <img
              src={equip.image}
              alt={equip.name}
              className="h-50 w-50 object-cover rounded-xl"
            />

            <h2 className="text-md font-semibold text-gray-800 mt-2">
              {equip.name}
            </h2>
          </div>
        ))}
      </div>

    </div>
  );
};

export default FacilitiesSection;
