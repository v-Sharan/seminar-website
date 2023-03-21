import React from "react";
import Card from "../UI/Card";

const Objectives = [
  "To foster global competency among learners.",
  "To promote the use of recent technology in teaching and learning",
  "To promote research quest for learning excellence",
];

const Themes = [
  "Excellence in Teaching and Learning.",
  "Innovative Projects for Social Benefits",
  "Engineering Pedagogy and Psychology",
  "Promote research in STEM",
  "Use of modern tools in education to reach global standards and greater creativity",
];

const Outcomes = [
  "To apply strategies for improvement in self-governance, academic performance, and quality of education.",
  "To derive the road map for continuous improvement in teaching and research.",
  "To motivate and drive students’ to address societal problems through Projects and patents.",
];

const Home = () => {
  const onButtonClick = () => {
    fetch("brochure.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "brochure.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <div className="hero py-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://res.cloudinary.com/dfje97i0k/image/upload/v1679278236/download_ussy7d.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Strategies for Quality Improvement in Higher Educational
              Institutions
            </h1>
            <p className="py-6">
              Organized by Internal Quality Assurance Cell of RMKCET on April 5
              - 6, 2023
            </p>
            <button
              className="btn btn-primary"
              onClick={onButtonClick}
              download
            >
              Brochure
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto flex flex-col gap-3">
        <h1 className="text-5xl font-bold flex justify-center">
          About the Seminar
        </h1>
        <p className="text-2xl">
          The seminar aims to discuss and investigate the strategies for Quality
          Improvement in Higher Educational Institutions.
        </p>
      </div>
      <div className="mx-auto flex flex-wrap flex-row gap-4 my-3 mt-4 sm:flex sm:justify-center">
        <Card>
          <h1 className="card-title text-secondary">Objectives</h1>
          <ul className="text-gray-700 list-disc px-3">
            {Objectives.map((obj, index) => (
              <li key={`${index}`}>
                <p className="font-semibold">{obj}</p>
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <h1 className="card-title text-secondary">Important Date</h1>
          <div className="flex flex-col gap-4 text-gray-700">
            <ul className="font-semibold">
              <li>
                <p className="px-3">
                  Last Date to Register:
                  <span className="font-sans">&nbsp;28.03.2023</span>
                </p>
              </li>
              <li>
                <p className="px-3">
                  Date of Intimation:
                  <span className="font-sans">&nbsp;30.3.2023</span>
                </p>
              </li>
            </ul>
          </div>
        </Card>
      </div>
      <div className="mx-auto flex flex-wrap flex-row gap-4 sm:flex sm:justify-center">
        <Card>
          <h1 className="card-title text-secondary">Themes</h1>
          <ul className="text-gray-700 list-disc px-3 font-semibold">
            {Themes.map((obj, index) => (
              <li key={`${index}`}>
                <p>{obj}</p>
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <h1 className="card-title text-secondary">Expected Outcome</h1>
          <ul className="text-gray-700 list-disc px-3 font-semibold">
            {Outcomes.map((obj, index) => (
              <li key={`${index}`}>
                <p>{obj}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
};

export default Home;
