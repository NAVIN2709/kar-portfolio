import React from 'react';

const PeopleSection = () => {
  const leader = {
    name: "Prof. John Doe",
    role: "Professor & Research Group Leader",
    image: "/leader.jpg",
    education: [
      { degree: "B.Tech Metallurgy", place: "IIT Bombay", period: "1990-1994" },
      { degree: "M.Tech Materials Science", place: "IISc Bangalore", period: "1995-1997" },
      { degree: "PhD Computational Materials", place: "MIT", period: "1998-2003" }
    ],
    experience: [
      { title: "Assistant Professor", place: "IIT Madras", period: "2003-2008" },
      { title: "Associate Professor", place: "IIT Madras", period: "2008-2015" },
      { title: "Professor", place: "IIT Madras", period: "2015-Present" }
    ]
  };

  const phdStudents = [
    {
      name: "Alice Sharma",
      image: "/student1.jpg",
      background: {
        btech: { done: true, place: "NIT Trichy", period: "2014-2018" },
        mtech: { done: true, place: "IIT Kanpur", period: "2018-2020" },
        msc: { done: false },
        phd: { done: true, place: "IIT Madras", period: "2021-Present" }
      }
    },
    {
      name: "Rahul Verma",
      image: "/student2.jpg",
      background: {
        btech: { done: true, place: "IIT BHU", period: "2013-2017" },
        mtech: { done: false },
        msc: { done: true, place: "TU Munich", period: "2018-2020" },
        phd: { done: true, place: "IIT Madras", period: "2021-Present" }
      }
    },
    {
      name: "Meera Iyer",
      image: "/student3.jpg",
      background: {
        btech: { done: true, place: "IIT Roorkee", period: "2015-2019" },
        mtech: { done: true, place: "IISc Bangalore", period: "2019-2021" },
        msc: { done: false },
        phd: { done: true, place: "IIT Madras", period: "2022-Present" }
      }
    },
    {
      name: "Karan Gupta",
      image: "/student4.jpg",
      background: {
        btech: { done: true, place: "VIT", period: "2012-2016" },
        mtech: { done: false },
        msc: { done: false },
        phd: { done: true, place: "IIT Madras", period: "2020-Present" }
      }
    }
  ];

  const renderBackground = (bg) => (
    <ul className="text-sm mt-2 space-y-1">
      {bg.btech.done && <li>B.Tech: {bg.btech.place} ({bg.btech.period})</li>}
      {bg.mtech.done && <li>M.Tech: {bg.mtech.place} ({bg.mtech.period})</li>}
      {bg.msc.done && <li>M.Sc: {bg.msc.place} ({bg.msc.period})</li>}
      {bg.phd.done && <li>PhD: {bg.phd.place} ({bg.phd.period})</li>}
    </ul>
  );

  return (
    <div className="w-full p-8 max-w-6xl mx-auto">
      {/* Leader Section */}
      <h2 className="text-3xl font-bold mb-6">Leader</h2>
      <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row gap-6">
        <img src={leader.image} alt={leader.name} className="w-40 h-40 object-cover rounded-xl" />
        <div>
          <h3 className="text-xl font-semibold">{leader.name}</h3>
          <p className="text-gray-600 mb-4">{leader.role}</p>

          <h4 className="font-semibold mt-4">Education</h4>
          <ul className="list-disc ml-6 text-sm">
            {leader.education.map((e, i) => (
              <li key={i}>{e.degree} — {e.place} ({e.period})</li>
            ))}
          </ul>

          <h4 className="font-semibold mt-4">Professional Experience</h4>
          <ul className="list-disc ml-6 text-sm">
            {leader.experience.map((e, i) => (
              <li key={i}>{e.title}, {e.place} ({e.period})</li>
            ))}
          </ul>
        </div>
      </div>

      {/* PhD Students */}
      <h2 className="text-3xl font-bold mt-12 mb-6">PhD Students</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {phdStudents.map((s, index) => (
          <div key={index} className="bg-white rounded-2xl shadow p-6 flex gap-4">
            <img src={s.image} alt={s.name} className="w-32 h-32 object-cover rounded-xl" />
            <div>
              <h3 className="text-lg font-semibold">{s.name}</h3>
              <h4 className="font-medium mt-2">Education Background</h4>
              {renderBackground(s.background)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleSection;