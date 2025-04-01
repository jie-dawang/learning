import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  title: string;
  menuItems: { label: string; link: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ title, menuItems }) => {
  return (
    <div className="w-48 bg-gray-800 text-white p-4">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className="mb-2">
            <Link to={item.link}>{item.label}</Link> {/* 直接使用 link 路径 */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
