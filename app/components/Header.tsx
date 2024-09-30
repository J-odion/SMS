import Image from "next/image";
import { GoChevronLeft } from "react-icons/go";
import { BsInfoCircle } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import { CiPlay1 } from "react-icons/ci";

// components/Header.tsx
const Header = () => {
  return (
    <header className="flex justify-between shadow-lg items-center p-2 bg-white ">
      <div className="flex flex-row gap-x-4 items-center ">
        <button className="flex gap-4">
          <GoChevronLeft />
          <p className="text-xs font-semibold text-[#374258]">Assessment</p>
        </button>
        <h5 className="text-sm font-semibold text-[#374258]">
          Primary 1 / Mid Term Test / Agricultural Science
        </h5>
      </div>
      <div className="flex space-x-4 items-center">
        <div className="flex flex-row gap-2 items-center">
          <BsInfoCircle size={13} />
          <button className=" py-2 ">Test Info</button>
        </div>
        <p>|</p>

        <div className="flex flex-row gap-2 items-center">
          <FiEye size={13} />
          <button className="  py-2">Test Preview</button>
        </div>
        <button className="bg-[#0BC279] rounded-md text-sm flex items-center text-white px-2 gap-2 py-2">
          <CiPlay1 size={15} className="font-bold" color="#FFFFFF" fontWeight={600} />
          Activate Test
        </button>
      </div>
    </header>
  );
};

export default Header;
