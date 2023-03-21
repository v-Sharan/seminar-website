import React from "react";

const Rules = [
  "Awarded Platinum category by AICTE-CII survey in 2015, 2016, 2018,2019 & 2020",
  "ARIIA band - C Institution Rank between 51-75 NIRF Ranking 2020 In the band 251-300",
  "Swachhta Ranking 2017 of Higher Educational Institutions - Finalist",
  "Bharatiya Vidya Bhavan National Award for Best Engineering College having Best Overall Performance for the year 2015",
  "Best Chapter Award 2015 in Tamil Nadu and Pondicherry division by ISTE",
  "Aspiring Minds - National Employability Award",
  "Eat Right Campus with Five Star Excellence from Food Safety and Standards Authority of India",
  "Secured 168 Anna University Ranks including a Gold medal ",
  "Received 5-Star rating for 2019-20 activities from Institute Innovation Cell, Ministry of Education, Govt. of India",
  "Recognized by MSME Business Incubator for projects worth Rs 1.5 crores",
  "Award from the British Council for the highest number of BEC Exam takers in South Asia",
  "Best Performance in Youth Red Cross Unit Award from the Indian Red Cross Society",
  "Award from the British Council for the highest number of BEC Exam takers in South Asia",
  "Engineering Educators Award by The British Deputy High Commissioner",
  "Ranked 82 in the top 100 Colleges including IITs and NITs in the All India Survey 2015 conducted by Outlook Magazine",
  "Ranked 16th among the top 20 Engineering colleges in India in Placements by the Higher Education Review magazine 2016",
  "Ranked No.1 among the Top 20 Engineering Colleges in India with Excellent Industry Exposure by Higher Education Review Magazine, 2017",
  "97th Rank in Outlook – Drshti ranking of Best Professional Colleges, 2018",
  "Ranked 61st among the top 150 engineering institute in India by the Times Engineering Institute Ranking survey 2020",
];

const Institutions = [
  "R.M.K Engineering College",
  "R.M.D Engineering College",
  "Sri Durgadevi Polytechnic College",
  "R.M.K Residential School",
  "R.M.K Patashaala",
  "R.M.K Senior Secondary School",
  "R.M.K Matriculation School",
];

const About = () => {
  return (
    <div>
      <div className="py-10 flex justify-center">
        <div className="w-[90%] p-2 flex flex-col gap-4 border border-none">
          <h1 className="font-bold text-3xl flex justify-center text-violet-700">
            About The Institution
          </h1>
          <p className="text-lg">
            R.M.K. College of Engineering and Technology, an Autonomous
            Institution was established in the year 2008 by Lakshmikanthammal
            Educational Trust, to render philanthropic and educational service
            to people living in rural areas bordering Tamil Nadu and Andhra
            Pradesh. The main objective of the Trust is to foster quality
            technical and higher education, research and training in various
            branches of Engineering and Technology. The college is approved by
            AICTE, New Delhi and affiliated to Anna University, Chennai and is
            accredited by NAAC with ‘A’ grade and all eligible Programs are
            accredited by NBA.
          </p>
        </div>
      </div>
      <div className="py-10 flex justify-center">
        <div className="w-[90%] p-2 flex flex-col gap-4 border border-none">
          <h1 className="font-bold text-3xl flex justify-center  text-violet-700">
            The following are the recognitions and achievements of our
            Institution
          </h1>
          <ul className="list-disc text-lg">
            {Rules.map((obj, index) => (
              <li key={`${obj[0]}-${obj[10]}-${index}`}>{obj}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-10 flex justify-center">
        <div className="w-[90%] p-2 flex flex-col gap-4 border border-none">
          <h1 className="font-bold text-3xl flex justify-center  text-violet-700">
            RMK Group of Institutions
          </h1>
          <ul className="list-decimal text-lg mx-auto">
            {Institutions.map((obj, index) => (
              <li key={`${obj[0]}-${obj[10]}-${index}`}>{obj}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
