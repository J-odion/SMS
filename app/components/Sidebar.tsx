import Image from "next/image";
import SidebarItem from "./SidebarItem";

const mainMenue = [
  {
    name: "Basic Settings",
    icon: "/assets/settings.svg",
    link: "/"
  },
  {
    name: "Question Manager",
    icon: "/assets/settingsliders.svg",
    link: "/questionmanager"
  },
  {
    name: "Question Settings",
    icon: "/assets/apps.svg",
    link: "/"
  },
  {
    name: "Test Start Page",
    icon: "/assets/apps.svg",
    link: "/"
  },
  {
    name: "Time Settings",
    icon: "/assets/Vectorclock.svg",
    link: "/"
  },
  {
    name: "Grading And Summary",
    icon: "/assets/Vectordocs.svg",
    link: "/"
  },
];
const progress = [
  {
    name: "Test Results",
    icon: "/assets/Vectorchart.svg",
    link: "/"
  },
  {
    name: "Test Sheets Review",
    icon: "/assets/Vectorassept.svg",
    link: "/"
  },
  {
    name: "Statistics",
    icon: "/assets/Vectorchart-pie.svg",
    link: "/"
  },
];

const Sidebar = () => {
  return (
    <aside className="bg-[#ffffff] w-64 text-black font-medium min-h-screen py-7 px-4">
      <nav>
        <div className="flex flex-col gap-4">
          <p className='font-bold text-sm '>Test configuration</p>
          <ul>
            {mainMenue.map((menu) => (
              <li key={menu.name} className="mb-1 ">
                <SidebarItem menu={menu} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p className='font-bold text-sm mt-2 '>Test progress and results</p>
          <ul>
            {progress.map((menu) => (
              <li key={menu.name} className="mb-1 ">
                <SidebarItem menu={menu} />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
