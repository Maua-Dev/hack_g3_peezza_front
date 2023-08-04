import React from "react";
import "./GraphicBar.css";
import { BarChart, Bar, XAxis, YAxis, 
CartesianGrid} from 'recharts';

  
export default function GraphicBar({tableData}){
    const data = [
        { name: "Grupo 1", value: 400, fill: "#FF5733" },
        { name: "Grupo 2", value: 300, fill: "#33FF57" },
        { name: "Grupo 3", value: 300, fill: "#5733FF" },
        { name: "Grupo 4", value: 200, fill: "#FFFF33" }
    ];
    console.log(tableData);

    return (
        <BarChart width={500} height={500} data={data} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="value"/>
            <Bar dataKey="value" stackId="a" fill="#8884d8" />
        </BarChart>
    );
}
