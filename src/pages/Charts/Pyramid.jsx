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
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded:2xl">
      <Header category="Pyramid" title="Foodie Pyramid" />
      <div className="w-full">
        <AccumulationChartComponent
          id="pyramid-chart"
          background={currentMode === "Dark" ? "#303236" : "#fff"}
          legendSettings={{ backtround: "white" }}
          tooltip={{ enable: true }}
        >
          <Inject
            services={[
              AccumulationDataLabel,
              AccumulationLegend,
              AccumulationTooltip,
              AccumulationSelection,
              PyramidSeries,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Foodie"
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              width="50%"
              height="90%"
              neckWidth="15%"
              gapRatio={0.03}
              explode
              emptyPointSetting={{ mode: "Drop", fill: "red" }}
              dataLabel={{ visibel: true, position: "Inside", name: "text" }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pyramid;
