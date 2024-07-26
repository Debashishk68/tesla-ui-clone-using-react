import { RiAccountCircleLine } from "react-icons/ri";
import { MdLanguage } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
// import Button from "./Button"
import tesla from "../assets/logo.svg";
import { useState } from "react";
import model3 from "../assets/Mega-Menu-Vehicles-Model-3-Performance-LHD.png";
import modelx from "../assets/Mega-Menu-Vehicles-Model-X.png";
import modely from "../assets/Mega-Menu-Vehicles-Model-Y.png";
import cybertruck from "../assets/Mega-Menu-Vehicles-Cybertruck-1x.png";
import Helpme from "../assets/Mega-Menu-Vehicles-HMC-RedBlue-LHD.png";
import models from "../assets/Mega-Menu-Vehicles-Model-S.jpg";
import solarpannels from "../assets/Mega-Menu-Energy-Solar-Panels.png";
import solarroof from "../assets/Mega-Menu-Energy-Solar-Roof.png";
import powerwall from "../assets/Mega-Menu-Energy-Powerwall-US.png";
import megapack from "../assets/Mega-Menu-Energy-Megapack.png";
import charging from "../assets/Mega-Menu-Charging-Charging.png";
import homecharging from "../assets/Mega-Menu-Charging-Home-Charging.png";
import supercharging from "../assets/Mega-Menu-Charging-Supercharging-NA.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [dropDown, setdropDown] = useState(false);
  const [id, setid] = useState();
  const [hamburger, sethamburger] = useState(false);
  const [click, setclick] = useState(false)

  const handleMenu = () => {
    sethamburger(!hamburger);
    setdropDown(!hamburger);
    // console.log(hamburger)
  };
  const mouseHover = (idx) => {
    setdropDown(true);
    setid(idx);
  };
  const menu = [
    {
      title: "Vehicles",
      assets: [
        { title: "Model S", img: models },
        { title: "Model 3", img: model3 },
        { title: "Model X", img: modelx },
        { title: "Model Y", img: modely },
        { title: "Cybertruck", img: cybertruck },
        { title: "Help Me", img: Helpme },
      ],
      id: 0,
    },
    {
      title: "Energy",
      assets: [
        { title: "Solar Panels", img: solarpannels },
        { title: "Solar Roof", img: solarroof },
        { title: "Powerwall", img: powerwall },
        { title: "Megapack", img: megapack },
      ],
      id: 1,
    },
    {
      title: "Charging",
      assets: [
        { title: "Charging", img: charging },
        { title: "Home Charging", img: homecharging },
        { title: "Supercharging", img: supercharging },
      ],
      id: 2,
    },
    {
      title: "Discover",
      des: [
        "Resources",
        "Location Services",
        "About",
        "Demo Drive",
        "Find Us",
        "Careers",
        "Insurance",
        "Find a Collision Center",
        "Investor Relations",
        "Military Purchase Program",
        "Find a Certified Installer",
        "Video Guides",
        "Company",
        "Customer Stories",
        "Events",
      ],
      id: 3,
    },
    {
      title: "Shop",
      assets: [],
      id: 4,
    },
  ];
  const handleMouseLeave = () => {
    if (window.innerWidth > 1080) {
      setdropDown(false);
      setid("");
    } else {
      setdropDown(hamburger);
    }
  };

  return (
    <>
      <div
        className={`w-full flex justify-between ${
          hamburger ? "justify-start" : null
        } lg:px-0 px-10 absolute top-4 items-center`}
      >
        {/* logoo */}
        <img
          src=""
          alt="Logo"
          className={`relative z-30 ${hamburger ? "hidden" : null}`}
        />

        {/* nav links */}
        {!hamburger?
        <button
          className={`bg-blue-300 w-16 h-8 hidden lg:block ${
            hamburger ? "absolute right-0 top-0 z-30" : null
          }`}
          onClick={() => {
            handleMenu();
          }}
        >
          Menu
        </button>:<div className="w-fit h-fit p-2 hover:bg-gray-300 absolute
         right-0 top-0 z-30 rounded-md" onClick={()=>{sethamburger(false)
          setdropDown(false)
          setclick(false)
         }}><RxCross1/></div>
        }
        {click?<div className="w-fit h-fit p-[2px] hover:bg-gray-300 absolute
         left-0 top-0 z-30 rounded-md"onClick={()=>setclick(false)}><IoIosArrowRoundBack className="w-7 h-7"/></div>:null}

        <div
          className={`flex gap-5 lg:flex ${click?"lg:flex-row flex-wrap":"lg:flex-col"} lg:gap-8 lg:pt-10 lg:px-10 ${
            hamburger ? "lg:block" : "lg:hidden"
          }`}
        >
          {!click?
          
          menu.map((menu) => {
      
            return (
              
              <p
                key={menu.id}
                onMouseEnter={() => mouseHover(menu.id)}

                onClick={()=>{
                  setclick(true);
                  setid(menu.id)
                  console.log(menu.id)
                }}
                
                className={`cursor-pointer font-roboto font-[500] lg:text-xl p-2 lg:w-72 rounded-md transition-all relative z-30  ${
                  menu.id === id ? "bg-gray-200" : null
                }`}
              >
                {menu.title}
              </p>
              
            );
          }):menu[id].assets
          ? menu[id].assets.map((img, idx) => {
           
              return (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row cursor-pointer items-center"
                >
                  <img src={img.img} alt="" className="w-[230px] sm:w-[100px] relayive z-40 " />
                  <p className="text-xl relative z-40 font-medium">{img.title}</p>
                </div>
              );
            }):menu[id].des.map((desc,idx)=>{
              return(<p key={idx} className="w-[300px] relative z-30">{desc}</p>)
            })
          // : menu[id].des.map((desc, idx) => {
              
          //     return (
          //       <p key={idx} className="w-[300px] ">
          //         {desc}
          //       </p>
          //     );
          //   }):null
          }
        </div>
        {/* Account Section */}
        <div className={`flex gap-3 ${hamburger&&!click?"lg:inline flex-col absolute top-[410px] left-4 ":"lg:hidden"}`}>
        
        <div className={`flex gap-2 mb-6 `}>
        <FiHelpCircle className="w-6 h-6 text-gray-800 relative z-30" />
        <p className="relative z-30 text-xl font-semibold">Support</p>
        </div>
          
          <div className={`flex gap-2 mb-6`}>
          <MdLanguage className="w-6 h-6 text-gray-800 relative z-30" />
          <p className="relative z-30 text-xl font-semibold">Language</p>
          </div>
          <div className={`flex gap-2`}>
          <RiAccountCircleLine className="w-6 h-6 text-gray-800 relative z-30" />
          <p className="relative z-30 text-xl font-semibold">Account</p>
          </div>
         
        </div>
      </div>
        

      {/* Dropdown */}
      {dropDown ? (
        <div
          onMouseLeave={() => {
            
            handleMouseLeave();
          }}
          className={`bg-white w-full h-[550px] lg:h-screen absolute animate-dropdown z-20`}
        >
          <div className="w-full absolute top-[70px] h-fit grid grid-cols-[repeat(3,300px)] justify-center lg:hidden">
            {
              window.innerWidth > 1080?
            menu[id].assets
              ? menu[id].assets.map((img, idx) => {
               
                  return (
                    <div
                      key={idx}
                      className="flex flex-col cursor-pointer items-center"
                    >
                      <img src={img.img} alt="" className="w-[300px] " />
                      <p className="text-xl font-medium">{img.title}</p>
                    </div>
                  );
                })
              : menu[id].des.map((desc, idx) => {
                  
                  return (
                    <p key={idx} className="w-[300px] ">
                      {desc}
                    </p>
                  );
                }):null}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;
