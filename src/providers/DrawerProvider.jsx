import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Logo } from "../assets";
import { useNavigate } from "react-router-dom";
import routes from "../constants/route";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useState } from "react";
import clsx from "clsx";

export default function DrawerProvider({ toggleDrawer, isOpen }) {
  const handleNavigate = useNavigate();
  const [activeRoute, setActiveRoute] = useState("");

  const handleRoute = (route,childNavs) => {
    console.log(route,childNavs,route === activeRoute ? null : route)
    if (childNavs?.length > 0) {
      setActiveRoute(route === activeRoute ? null : route);
    } else {
      handleNavigate(route);
    }
  };

  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="left"
      className="w-full h-full"
      size="260px"
    >
      <div className="bg-textred w-full h-full p-3 flex flex-col items-start">
        <div className="cursor-pointer h-14 px-1 w-14 rounded-full bg-white flex items-center justify-center">
          <img
            src={Logo}
            alt="Logo Image"
            className="w-[80%] h-full object-contain"
            onClick={() => handleNavigate("/profile")}
          />
        </div>
        <div className="flex flex-col items-center space-y-6 w-full mt-10">
          {routes.map(({ icon, name, route, childNavs }, index) => (
            <>
              <div
                key={index}
                className="w-full flex items-center justify-between px-[15px] cursor-pointer"
                onClick={() => handleRoute(route,childNavs)}
              >
                <div className="w-full flex items-center space-x-4 ">
                  <img
                    src={icon}
                    alt={name}
                    className="w-6 h-auto cursor-pointer"
                  />
                  <p className="text-black">{name}</p>
                </div>
                <MdKeyboardArrowLeft
                  className={clsx("text-white", {
                    "-rotate-90": activeRoute === route,
                  })}
                  size={18}
                />
              </div>
              {activeRoute === route && childNavs?.length > 0 && (
                <div className="w-full flex flex-col items-start space-y-6">
                  {childNavs.map(
                    (
                      { icon: Icon, name: childName, route: childRoute },
                      childIndex
                    ) => (
                      <div
                        key={childIndex}
                        className="w-full flex items-center space-x-4 px-7 cursor-pointer"
                        onClick={() => {  handleNavigate(childNavs?.length > 0 ? childRoute : route);
                          handleNavigate(childRoute);
                          toggleDrawer();
                        }}
                      >
                        <Icon color="black" />
                        <p className="text-black">{childName}</p>
                      </div>
                    )
                  )}
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </Drawer>
  );
}
