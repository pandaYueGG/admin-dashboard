import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { themeColors } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const ThemeSettings = () => {
  return (
    <div className="nav-item bg-half-transparent w-screen fixed top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-[#5a5e67] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-medium text-lg">Settings</p>
          <button
            className="text-2xl p-3 hover:drop-shadow hover:bg-lgiht-gray"
            type="button"
            onClick={() => console.log("setting btn clicked")}
            style={{ color: "green", borderRadius: "50%" }}
          >
            <AiOutlineClose />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-medium text-lg">Theme Options</p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={() => console.log("set mode btn clicked")}
              checked={true}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
