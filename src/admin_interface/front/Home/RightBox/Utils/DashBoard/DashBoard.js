import React, { useState, useEffect, useCallback } from "react";
import './DashBoard.css';
import PizzaGraphic from "./Utils/PizzaGraphic";
import { fetchData } from "../../../../../../back_operation_mock/repo_mock";
import TableFeedBack from "./Utils/TableFeedback";

export default function DashBoard ({selectedOption}) {

  const [tableAttributes, setTableAttributes] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [medianGrade, setMedianGrade] = useState(0);

  const calculateMedianGrade = useCallback(() => {
    let sum = 0;
    if (tableData.length === 0) {
      setMedianGrade(0);
      return;
    }
    tableData.forEach((item) => {
      sum += item['Nota'];
    });
    setMedianGrade((sum / tableData.length).toFixed(2));
  }, [tableData]);

  useEffect(() => {
    const fetchDataAndUpdateTable = async () => {
      try {
        const response = fetchData("Feedbacks");
        setTableAttributes(response.attributes);
        setTableData(response.tuples);
      } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
      }
    };
    fetchDataAndUpdateTable();
    calculateMedianGrade();
    const interval = setInterval(() => {
      fetchDataAndUpdateTable();
      calculateMedianGrade();
    }, 10000);
    return () => clearInterval(interval);
  }, [selectedOption, calculateMedianGrade]);


  return(
    <div className="DashBoard">
      <div className="Chart">
        <div className="FirstPart">
          <div className="Median">
            <label id="tittle">Nota:</label>
            <label id='median'>{medianGrade}</label>
            <span id="subtittle">(Média das Avaliações)</span>
          </div>
          <div className="dividerBar" />
          <div id="grafico" className="BoxGraphic">
            <h1>Gráfico de Contagem de Notas</h1>
            <PizzaGraphic id='graphic' tableData={tableData} />
          </div>
        </div>
        <TableFeedBack tableAttributes={tableAttributes} tableData={tableData} />
      </div>
    </div>
  );
}
