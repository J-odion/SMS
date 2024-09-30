import Image from 'next/image';
import React from 'react';

interface MenuItem {
  name: string;
  icon: string;
  link: string;
}

interface SidebarItemProps {
  menu: MenuItem;  
}

function SidebarItem({ menu }: SidebarItemProps) {
  return (
    <a href={menu.link} className="flex gap-2 hover:shadow-lg  w-[90%] mx-auto p-2  items-center">
      <Image
        alt={`${menu.name} icon`} 
        src={menu.icon}
        width={15}
        height={15}
        className="w-[15px] h-[15px]"
      />
      <span className='font-normal text-xs'>{menu.name}</span>
    </a>
  );
}

export default SidebarItem;
