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
  "Ranked 97th in Outlook – Drshti ranking of Best Professional Colleges, 2018",
  "Ranked 61st among the top 150 engineering institute in India by the Times Engineering Institute Ranking survey 2020",
];

const IQAC = [
  "Ensure clarity and focus on quality enhancement of the institutional curricular and co-curricular activities",
  "Assure quality culture among all stakeholders",
  "Ensure enhancement and coordination among various activities of the Institution with virtuous practices",
  "Provide a forum for decision-making to improve institutional functioning",
  "Act as a dynamic system for continuous quality improvement",
  "Build an organized methodology of documentation and dissemination",
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
          <p className="text-xl font-semibold">
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
            About IQAC
          </h1>
          <p className="text-xl font-semibold">
            Internal Quality Assurance Cell (IQAC) is established in our
            Institute as a quality sustenance measure. Since quality enhancement
            is a continuous process, the IQAC has become a part of the
            Institution’s system and works towards the realisation of the goals
            of quality enhancement and sustenance. The prime task of the IQAC is
            to develop a system for conscious, consistent and catalytic
            improvement in the overall performance of our Institution. The
            Institution channelizes its efforts and measures towards promoting
            holistic academic excellence including the peer committee
            recommendations
          </p>
          <p className="text-xl font-semibold">
            IQAC evolves mechanisms and procedures to
          </p>
          <ul className="list-disc text-xl font-semibold px-5">
            {IQAC.map((obj, index) => (
              <li key={`${obj[0]}-${obj[10]}-${index}`}>{obj}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-10 flex justify-center">
        <div className="w-[90%] p-2 flex flex-col gap-4 border border-none">
          <h1 className="font-bold text-3xl flex justify-center  text-violet-700">
            The following are the recognitions and achievements of our
            Institution
          </h1>
          <ul className="list-disc text-xl font-semibold px-5">
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
          <ul className="list-decimal text-xl font-semibold mx-auto">
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
