import React from "react";

const mockFacilities = [
  {
    id: 1,
    name: "Spin Coater",
    image: "https://images.unsplash.com/photo-1581091215367-59ab6b9c8c20?auto=format&w=800&q=80",
    description: "Used for uniform thin-film deposition on substrates using controlled spin speeds."
  },
  {
    id: 2,
    name: "Tube Furnace",
    image: "https://images.unsplash.com/photo-1581090467893-671f6a8f1b90?auto=format&w=800&q=80",
    description: "High-temperature furnace for annealing, sintering, and controlled thermal processes."
  },
  {
    id: 3,
    name: "UV-Vis Spectrophotometer",
    image: "https://images.unsplash.com/photo-1581093588401-22f1682cd88f?auto=format&w=800&q=80",
    description: "Used for optical characterization of materials, absorbance and transmission studies."
  },
  {
    id: 4,
    name: "Probe Station",
    image: "https://images.unsplash.com/photo-1581092433900-980c42b0cbb7?auto=format&w=800&q=80",
    description: "Electrical measurement setup for I-V characteristics of printed electronic devices."
  },
  {
    id: 5,
    name: "3D Printer",
    image: "https://images.unsplash.com/photo-1581092334651-2f36d50fa3c3?auto=format&w=800&q=80",
    description: "For fabricating polymer structures and components with high precision."
  }
];

const FacilitiesSection = () => {
  return (
    <div className="w-full flex flex-col items-center p-6 md:p-12 mt-24">
      
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Laboratory Facilities
      </h1>

      <p className="text-gray-600 max-w-3xl text-center text-lg leading-relaxed mb-12">
        Our laboratory is equipped with modern instruments that support research in
        printed electronics, materials processing, and characterization.  
        Below is a list of major equipment currently available.
      </p>

      {/* Equipment Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {mockFacilities.map((equip) => (
          <div
            key={equip.id}
            className="bg-white rounded-2xl shadow-md border hover:shadow-xl transition p-4"
          >
            <img
              src={equip.image}
              alt={equip.name}
              className="h-48 w-full object-cover rounded-xl"
            />

            <h2 className="text-xl font-semibold text-gray-800 mt-4">
              {equip.name}
            </h2>

            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
              {equip.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default FacilitiesSection;
