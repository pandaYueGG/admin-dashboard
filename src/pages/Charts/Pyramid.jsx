import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
  AccumulationSelection,
  PyramidSeries,
  Inject,
} from "@syncfusion/ej2-react-charts";
import { PyramidData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { Header } from "../../components";

const Pyramid = () => {
  const { currentMode } = useStateContext();
  return (
    <div>
      <Header category="Pyramid" title="Foodie Pyramid" />
    </div>
  );
};

export default Pyramid;
