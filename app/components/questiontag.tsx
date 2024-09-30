import React from "react";
import { IoMdAdd } from "react-icons/io";
import { HiOutlineSwitchVertical } from "react-icons/hi";

function Questiontag() {
  return (
    <div className="bg-white border flex justify-between items-center rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center gap-x-2">
      <div className="h-4 w-4 border rounded border-[#75819A]"></div>
      <h4 className="text-[#75819A] text-sm ">QUESTIONS <span className="text-[#374258] font-bold">{33} /{ 60}</span></h4>
      </div>
      <div className="flex items-center gap-x-4">
        <button className="flex items-center gap-x-2">
          <HiOutlineSwitchVertical
            size={18}
            className="font-bold"
            color="#374258"
            fontWeight={600}
          />
          <p className="text-[#374258] ">Reorder questions</p>
        </button>

        <button className="bg-[#0AAC6C] text-sm rounded-md flex items-center text-white px-2 gap-2 py-2">
          <IoMdAdd
            size={15}
            className="font-bold"
            color="#FFFFFF"
            fontWeight={600}
          />
          Add question
        </button>
      </div>
    </div>
  );
}

export default Questiontag;
