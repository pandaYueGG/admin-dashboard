import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  Tooltip,
  DateTime,
  Zoom,
  Logarithmic,
  Crosshair,
} from "@syncfusion/ej2-react-charts";
import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { Header } from "../../components";

const startDate = new Date("2000, 1, 1");

const valueFilter = (value) => {
  if (value.x >= startDate) {
    return value.x, value.high, value.low;
  }
};

const filteredValues = financialChartData.filter(valueFilter);

const Financial = () => {
  const { currentColor, currentMode } = useStateContext();
  return (
    <div>
      <Header category="Financial" title="Financial Summary" />
      <div className="w-full"></div>
    </div>
  );
};

export default Financial;
