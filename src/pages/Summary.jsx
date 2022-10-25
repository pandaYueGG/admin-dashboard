import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Button } from "../components";
import { PieChart, SparkLine, Stacked } from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Summary = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-48 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center ">
          <div className="flex justify-between">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$322,423.83</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor="green"
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.8 rounded-full p-4 hover:drop-shadow-md"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-medium">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Summary;
