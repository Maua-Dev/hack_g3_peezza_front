import React from "react";
import './PizzaGraphic.css';
import { PieChart, Pie, Legend } from "recharts";

export default function PizzaGraphic ({tableData}) {

  const COLORS = ['#FF0000', '#2F0037', '#006400', '#0000FF', '#FFA500'];
  const emojis = ["😡", "🙁", "😐", "😃", "😄"];

  function calcularMediaNotas(listaObjetos) {
    const contagemNotas = [0, 0, 0, 0, 0];
    for (const objeto of listaObjetos) {
      const nota = objeto.Nota;
      if (nota >= 1 && nota <= 5) {
        contagemNotas[nota - 1]++;
      }
    }
    const Notas = [];
    for (let i = 0; i < 5; i++) {
      if (contagemNotas[i] > 0) {
        Notas.push({
          nota: "Nota: " + emojis[i],
          contagem: contagemNotas[i],
          fill: COLORS[i]
        });
      } else {
        Notas.push({
          nota: "Nota: " + emojis[i],
          contagem: 0,
          fill: COLORS[i]
        });
      }
    }
    return Notas;
  }

  const Notas = calcularMediaNotas(tableData);

  return(
    <div className="PizzaGraphic">
      <>
        <PieChart width={400} height={300}>
            <Pie
              data={Notas}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={4}
              dataKey="contagem"
              label
            />
          <Legend formatter={(value, entry, index) => Notas[index].nota} />
        </PieChart>
        <h1>Avaliações Totais: {tableData.length}</h1>
        <span>| 😡 = 1 | 🙁 = 2 | 😐 = 3 | 😃 = 4 | 😄 = 5 |</span>
      </>
    </div>
  );
}