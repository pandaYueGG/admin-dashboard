import React from "react";
import { pieChartData } from "../../data/dummy";
import { Header, PieChart } from "../../components";

const Pie = () => {
  return (
    <div>
      <Header category="Pie" title="Bussiness Cost Breakdown" />
      <div className="w-full">
        <PieChart
          id="chart-pie"
          data={pieChartData}
          legendVisibility
          height="full"
        />
      </div>
    </div>
  );
};

export default Pie;
