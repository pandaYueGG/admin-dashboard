import React from "react";
import { Header, Stacked as StackedChart } from "../../components";

const Stacked = () => {
  return (
    <div className="m-3 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg roundex-2xl">
      <Header category="Stacked" title="Profit Breakdown" />
      <div className="w-full">
        <StackedChart />
      </div>
    </div>
  );
};

export default Stacked;
