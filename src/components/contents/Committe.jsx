import React from "react";

const chiefPatrons = [
  "Thiru. R.S.Munirathinam, Founder Chairman",
  "Tmt. Manjula Munirathiam, Chair Person",
  "Thiru. R.Jothi Naidu, Director",
  "Thiru. R.M.Kishore B.E., MBA(UK), Vice Chairman",
  "Thiru. Yalamanchi Pradeep BE, MS, Secretary",
  "Dr.Durgadevi Pradeep B.E., MBA, Ph.D, Vice Chairperson",
  "Tmt. Sowmya Kishore B.E., Management Trustee",
  "Dr.M.S.Palanichamy, Advisor",
  "Shri. T.Pitchandi, IAS (Rtd.), Advisor",
  "Shri. V.Manoharan,Advisor",
];

const Patrons = [
  "Dr.K.Ramar, M.E., Ph.D., FIE., Principal",
  "Dr.K.Sivaram, M.Tech., Ph.D., Dean Research",
];

const Coordinators = [
  "Dr. Chettiyar Vani Vivekanand, ASP/ECE, IQAC Coordinator",
  "Dr.T.G.Loganathan, Prof/Mechanical Dept of Engg., NAAC Coordinator",
  "Dr.G.Devi, ASP/Physics, ISO Coordinator",
];

const Co_Coordinators = [
  "Dr. T.J Catherine, ASP/EEE",
  "Ms. S.Seshavidhya,ASP/ECE",
  "Dr. K. Karthick, AP/MECH",
  "Ms. J Gnana Jeslin, AP/CSE",
  "Ms. A. Akila, AP/AIDS",
  "Dr.M.Meganathan, AP/S & H",
];

const Committe = () => {
  return (
    <div className="p-10">
      <div className="py-5">
        <h1 className="font-bold text-3xl  text-violet-700">Chief Patrons</h1>
        <ul className="px-10 list-disc py-2">
          {chiefPatrons.map((item, index) => (
            <li key={`${item}-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="py-5">
        <h1 className="font-bold text-3xl  text-violet-700">Patrons</h1>
        <ul className="px-10 list-disc py-2">
          {Patrons.map((item, index) => (
            <li key={`${item}-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="py-5">
        <h1 className="font-bold text-3xl  text-violet-700">
          Seminar Coordinators
        </h1>
        <ul className="px-10 py-2 list-disc">
          {Coordinators.map((item, index) => (
            <li key={`${item}-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="py-5">
        <h1 className="font-bold text-3xl  text-violet-700">
          Seminar Co-Coordinators
        </h1>
        <ul className="px-10 py-2 list-disc">
          {Co_Coordinators.map((item, index) => (
            <li key={`${item}-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Committe;
