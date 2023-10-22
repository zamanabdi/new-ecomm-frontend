import React from "react";

const HomeSectionCard = ({ item }) => {
  return (
    <div
      className="cursor-pointer flex flex-col justify-between items-center bg-white rounded-lg overflow-hidden w-[17rem] h-[23rem] md:w-[20rem] md:h-[29rem] mx-3"
      style={{ boxShadow: "3px 5px 8px 3px rgba(0,0,0,0.2)" }}
    >
      {/*image wrapper */}
      <div className="w-[18rem] h-[17rem] md:h-[23rem] md:w-full">
        <img
          className="object-cover object-top w-full h-[17rem] md:w-full md:h-[23rem]"
          src={item.image}
          alt="lights"
        />
      </div>

      {/*product info */}

      <div className="p-4 borde h-[6rem]">
        <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
        <p className="mt-0 text-sm text-gray-500">{item.desc}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
