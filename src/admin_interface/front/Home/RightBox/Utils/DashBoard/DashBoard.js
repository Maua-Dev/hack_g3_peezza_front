import {React, useState, useEffect} from "react";
import './DashBoard.css';
import PizzaGraphic from "./Utils/PizzaGraphic";
import GraphicBar from "./Utils/GraphicBar";
import { fetchData } from "../../../../../../back_operation_mock/repo_mock";

export default function DashBoard ({selectedOption}) {

  const [tableAttributes, setTableAttributes] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [updateTrigger, setUpdateTrigger] = useState(false);

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
    const interval = setInterval(() => {
      fetchDataAndUpdateTable();
    }, 10000);
    return () => clearInterval(interval);
  }, [selectedOption, updateTrigger]);

  return(
    <div className="DashBoard">
      <h1>EM CONSTRUÇÃO</h1>
      <div className="Chart">
        <PizzaGraphic tableData={tableData} />
      </div>
    </div>
  );
} 