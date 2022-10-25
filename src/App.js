import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Sidebar, Footer, ThemeSettings } from "./components";
import {
  Area,
  Bar,
  ColorMapping,
  ColorPicker,
  Calendar,
  Customers,
  Summary,
  Editor,
  Employees,
  Financial,
  Kanban,
  Orders,
  Pie,
  Pyramid,
  Stacked,
  Line,
} from "./pages";

import { useStateContext } from "./contexts/ContextProvider";

function App() {
  const { activeMenu } = useStateContext();

  return (
    <div className="App">
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: 999 }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                style={{ backgroundColor: "green", borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-60 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-60" : "flex-2"
            }`}
          >
            <div className="fixex md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            <div>
              <Routes>
                {/* dashboard - homepage */}
                <Route path="/" element={<Summary />} />
                <Route path="/summary" element={<Summary />} />

                {/* pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="'/customers" element={<Customers />} />

                {/* Apps */}
                <Route path="kanban" element={<Kanban />} />
                <Route path="editor" element={<Editor />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="color-picker" element={<ColorPicker />} />

                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyrimid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
