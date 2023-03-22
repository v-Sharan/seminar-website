import React from "react";

const Speaker = [
  {
    name: "Dr. Edamana Prasad",
    title: "Excellence in Teaching and Learning",
    department: "Professor, Department of Chemistry,",
    nextLine: "Head/ Teaching Learning Process in Higher Education Sector,",
    institute: "Indian Institute of Technology, Madras",
    photo:
      "https://res.cloudinary.com/dfje97i0k/image/upload/c_scale,h_564,w_557/v1678706709/Edamana_zs0qsp.jpg",
  },
  {
    name: "Dr.M.G. Sethuraman",
    title: "Innovative Projects for Social Benefits",
    department: "Professor, Department of Chemistry",
    institute:
      "The Gandhigram Rural Institute-Deemed to be University, Dindigul, Tamil Nadu.",
    photo:
      "https://res.cloudinary.com/dfje97i0k/image/upload/v1678706709/Sethuraman_qctuww.jpg",
  },
  {
    name: "Mr. Ravi Kumar Varma",
    title: "Project based Learning in Education and Learning New Technologies",
    institute: "Scientist, Space Applications Centre (SAC),ISRO, Ahmedabad.",
    photo:
      "https://res.cloudinary.com/dfje97i0k/image/upload/c_scale,h_400,w_400/v1679368726/crop-Isro_q0w6nw.jpg",
  },
  {
    name: "Dr.K.Ramar",
    title:
      "Enriching Research Methodologies, Effective Journal Publications and Proposal Drafting",
    department: "Principal",
    institute:
      "R.M.K. College of Engieering and Technology, Puduvoyal, Thiruvallur",
    photo:
      "https://res.cloudinary.com/dfje97i0k/image/upload/c_scale,h_564,w_557/v1678706710/RAMAR_mo2eup.png",
  },
  {
    name: "Dr.K.Mourougayane",
    title: "Recent Research Trends",
    department:
      "Programme Director (Projects) Scientist F, HoD DSP & EP Divisions,",
    institute: "SAMEER - Centre for Electromagnetics, Chennai",
    photo:
      "https://res.cloudinary.com/dfje97i0k/image/upload/v1678706709/Mourougayane_htbipa.jpg",
  },
  {
    name: "Dr. S Renukadevi",
    title: "Engineering Pedagogy and Psychology",
    department: "Professor",
    institute:
      "National Institute of Technical Teachers Training and Research, Chennai",
    photo:
      "https://res.cloudinary.com/dfje97i0k/image/upload/c_scale,h_564,w_557/v1678706709/Renukadevi_aua2fx.jpg",
  },
];

const Speakers = () => {
  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-10 justify-center py-10">
        {Speaker.map((person) => (
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={person.photo} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{person.name}</h2>
              <p>{person.department}</p>
              <p>{person.nextLine}</p>
              <p>{person.institute}</p>
              <h1 className="card-title font-bold">Title:</h1>
              <p className="text-xl font-semibold">{person.title}</p>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Speakers;
