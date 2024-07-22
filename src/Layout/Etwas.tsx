import React from "react";

type Props = {};

const Etwas = (props: Props) => {
  return (
    <>
      <div className="w-full p-4 flex items-center justify-between">
        {/* Content Text */}
        <div className="flex-grow ml-60 mt-10">
          <p className=" text-[40px] font-semibold text-gray-700">
            Etwas abonnieren
          </p>
          <p className="text-[40px] font-semibold text-gray-700">
            _Unser Newsletter{" "}
          </p>
          <p className="mt-4 ml-14 text-[15px] w-[60%] text-yellow-900 font-mono">
            Get weekly update about our product on your email, no spam
            guaranteed we promise ✌️
          </p>
        </div>

        {/* Email Input */}
        <div className="relative flex-shrink-0 mt-40 mr-[17%]">
          <input
            type="email"
            placeholder="youremail123@gmail.com"
            className="px-4 py-4 w-[400px] text-gray-700 shadow-lg"
          />

          <button
            className="absolute mt-8 right-0  h-full bg-stone-600 text-white px-4 py-2 "
            type="submit"
          >
            ABONNIEREN
          </button>
        </div>
      </div>
    </>
  );
};

export default Etwas;
