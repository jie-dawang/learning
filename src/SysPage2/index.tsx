import React from 'react';
import MyTitle from './MyTitle';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const SysPage2 = () => {
  const sidebarTitle: string = "左侧栏标题";
  // 移除 link 中的 `#`，确保与路由路径匹配
  const menuItems = [
    { label: "首页", link: "home" },       // 对应路由 path="home"
    { label: "关于我们", link: "about" }, // 对应路由 path="about"
    { label: "服务", link: "services" },  // 对应路由 path="services"
    { label: "联系我们", link: "contact" },// 对应路由 path="contact"
    { label: "注册", link: "register" }    // 若无线，后续补充路由
  ];

  return (
    <div className="h-screen flex flex-col">
      <MyTitle />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar title={sidebarTitle} menuItems={menuItems} />
        <div className="flex-1 bg-gray-100 p-4 overflow-auto">
          <img src="/img/xshlogo01.png" alt="自定义图片" /> {/* 检查图片路径是否正确 */}
          <Outlet /> {/* 确保子路由渲染 */}
        </div>
      </div>
    </div>
  );
};

export default SysPage2;
