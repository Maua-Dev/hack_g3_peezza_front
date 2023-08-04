import React from "react";
import './PizzaGraphic.css';
import { PieChart, Pie, Legend } from "recharts";

export default function PizzaGraphic ({tableData}) {

  const COLORS = ['#2F0037', '#006400', '#0000FF', '#FF0000', '#FFA500'];
  const newData = tableData.map((data, index) => {
    return {...data, fill: COLORS[index]};
  });

  function calcularMediaNotas(listaObjetos) {
    const somasNotas = [0, 0, 0, 0, 0];
    const contagemNotas = [0, 0, 0, 0, 0];
  
    for (const objeto of listaObjetos) {
      const nota = objeto.rating;
      if (nota >= 1 && nota <= 5) {
        somasNotas[nota - 1] += nota;
        contagemNotas[nota - 1]++;
      }
    }
  
    const mediasNotas = [];
    for (let i = 0; i < 5; i++) {
      if (contagemNotas[i] > 0) {
        let media = parseInt(somasNotas[i] / contagemNotas[i]);
        mediasNotas.push({
          nota: i + 1,
          media: media,
          fill: COLORS[media-1]
        });
      } else {
        mediasNotas.push({
          nota: i + 1,
          media: 0
        });
      }
    }
    console.log(mediasNotas);
  
    return mediasNotas;
  }

  const mediasNotas = calcularMediaNotas(tableData);

  return(
    <div className="PizzaGraphic">
      <>
        <PieChart width={400} height={400}>
            <Pie
              data={mediasNotas}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="media"
              label
            />
          <Legend />
        </PieChart>
      </>
    </div>
  );
}