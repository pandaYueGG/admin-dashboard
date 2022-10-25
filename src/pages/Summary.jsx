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
    <div className="mt-8">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center ">
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
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-normal text-lg">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-400 hover:drop-shadow-lg">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-600 hover:drop-shadow-lg">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 gap-10 flex flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-2xl font-normal">$584,384</span>
                  <span className="p-1.5 hover:drop-shadow-lg cursor-pointer rounded-full text-white bg-green-600 ml-3 text-xs">
                    33%
                  </span>
                </p>
                <p className="text-gray-400 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-2xl font-normal">$84,384</span>
                </p>
                <p className="text-gray-400 mt-1">Expense</p>
              </div>

              {/* sparkline chart */}
              <div className="mt-5">
                <SparkLine
                  currentColor="green"
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color="green"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
