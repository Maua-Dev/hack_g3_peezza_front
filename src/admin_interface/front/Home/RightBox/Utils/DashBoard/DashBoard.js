import React from "react";
import './DashBoard.css';
import { PieChart, Pie } from "recharts";
import GraphicBar from "./utils/grafico-bar";

export default function DashBoard () {
  
  const data = [
    { name: "Grupo 1", value: 400 },
    { name: "Grupo 2", value: 300 },
    { name: "Grupo 3", value: 300 },
    { name: "Grupo 4", value: 200 },
  ];

  return(
    <div className="DashBoard">
      <h1>EM CONSTRUÇÃO</h1>
      <div className="Chart">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          />
        </PieChart>
      </div>
      <GraphicBar></GraphicBar>
    </div>
  );
} 