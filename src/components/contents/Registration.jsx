import React from "react";

const Registration = () => {
  return (
    <div className="px-10 py-5">
      <div className="p-[10px]">
        <h1 className="text-4xl font-bold text-violet-700">
          Registration Details:
        </h1>
        <p className="text-xl px-[3em] pt-4">
          Participants are requested to pay a Registration Fee of Rs.250
        </p>
      </div>
      <div className="p-[10px]">
        <h1 className="text-4xl font-bold text-violet-700">Mode of Payment:</h1>
        <p className="text-xl px-[3em] pt-4">
          Participants are requested to pay the Registration Fee by using NEFT /
          RTGS / E Payment / GPAY
        </p>
      </div>
      <div className="p-[10px]">
        <h1 className="text-4xl font-bold text-violet-700">
          Registration Link:
        </h1>
        <a
          className="link px-[3em] text-xl"
          href="https://forms.gle/bRCR4zbd3gUXkDXb7"
        >
          https://forms.gle/bRCR4zbd3gUXkDXb7
        </a>
      </div>
      <div className="p-[10px]">
        <h1 className="text-4xl font-bold text-violet-700">Payment Details:</h1>
        <div className="overflow-x-auto lg:w-[50%] sm:w-full mx-auto">
          <table className="table w-full">
            <tbody>
              <tr>
                <th>ACCOUNT NAME</th>
                <td>PRINCIPAL</td>
              </tr>
              <tr>
                <th>ACCOUNT NUMBER</th>
                <td>062201000041031</td>
              </tr>
              <tr>
                <th>BANK</th>
                <td>INDIAN OVERSEAS BANK</td>
              </tr>
              <tr>
                <th>BRANCH</th>
                <td>KAVARAPETTAI</td>
              </tr>
              <tr>
                <th>IFSC CODE</th>
                <td>IOBA 0000622</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Registration;
