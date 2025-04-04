import React from 'react';
import MyTitle from './MyTitle';
import Sidebar from './Sidebar';
import { useState } from 'react';
const SysPage2 = () => {
  // 定义左侧栏的标题和内容
  const sidebarTitle: string = "左侧栏标题";

  // 定义动态菜单项数据
  const menuItems = [
    { label: "首页", link: "#home" },
    { label: "关于我们", link: "#about" },
    { label: "服务", link: "#services" },
    { label: "联系我们", link: "#contact" },
  ];
  const bgImageUrl = "/img/11.jpg";
  const neta1 = "/img/12.gif";
  const neta2 = "/img/13.gif";
  const neta3 = "/img/14.gif";
  const neta4 = "/img/15.gif";
  const BoxGenerator = () => {
    const [count, setCount] = useState(0);
    const [imgSrc1, setImgSrc1] = useState(neta4);
    const handleMouseEnter1 = () => {
      setImgSrc1(neta1);
    };

    const handleMouseLeave1 = () => {
      setImgSrc1(neta4);
    };

    const [imgSrc2, setImgSrc2] = useState(neta3);
    const handleMouseEnter2 = () => {
      setImgSrc2(neta1);
    };

    const handleMouseLeave2 = () => {
      setImgSrc2(neta3);
    };
return(
  <div className="bg-black-0 h-auto w-screen">
          <div className='flex flex-wrap-reverse'>
            <div className="flex flex-col justify-items-center hover:bg-blue-0 transition">
              <button
              className="px-4 py-4 w-fit text-white rounded-lg shadow-md hover:bg-yellow-0 transition"
              onClick={()=> setCount(count+10)}
              > 点击增加↓
                 <div className="w-32 h-32 overflow-hidden">
                <img
                  src={imgSrc1}
                  alt=""
                  className="w-full h-auto"
                  onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseLeave1}
                />
              </div>
              </button>
              <button
              className="px-4 py-4 w-fit text-white rounded-lg shadow-md hover:bg-yellow-0 transition"
              onClick={()=> setCount(count-10)}
              > 点击减少↓
                 <div className="w-32 h-32 overflow-hidden">
                <img
                  src={imgSrc2}
                  alt=""
                  className="w-full h-auto"
                  onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave2}
                />
              </div>
              </button>
              <div className="flex flex-wrap gap-2 mt4">
                {Array.from({ length:count }).map((_,index)=>(
              <div className="w-32 h-32 overflow-hidden">
              <img src={neta2} alt="" key={index} className="w-full h-auto" />
            </div>

            ))}

          </div>
          </div>
        </div>
      </div>
    );
  };
  
           return (
            <div className="h-screen flex flex-col">
              <MyTitle />
              <div className="flex flex-1 overflow-hidden">
                <Sidebar title={sidebarTitle} menuItems={menuItems} />
                <div
                className="h-screen flex flex-grow"
                style={{
                  backgroundImage: `url(${bgImageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
                >
                  <BoxGenerator />
                </div>
              </div>
            </div>
          );
        };
export default SysPage2;


/**
 * h-screen : 让最外层占满整个屏幕
 */