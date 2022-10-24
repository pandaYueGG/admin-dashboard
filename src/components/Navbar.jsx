import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { BsChatLeftText } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { BiDownArrow } from "react-icons/bi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfole } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ backgroundColor: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      >
        {icon}
      </span>
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  const handleClick = (type) => {
    console.log(type);
  };

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color="green"
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color="green"
          icon={<BsCart3 />}
        />
        <NavButton
          title="Chat"
          customFunc={() => handleClick("chat")}
          color="green"
          dotColor="#03c9D7"
          icon={<BsChatLeftText />}
        />
        <NavButton
          title="Notification"
          customFunc={() => handleClick("notification")}
          color="green"
          dotColor="#03c9D7"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          ></div>
        </TooltipComponent>
      </div>
    </div>
  );
};

export default Navbar;
