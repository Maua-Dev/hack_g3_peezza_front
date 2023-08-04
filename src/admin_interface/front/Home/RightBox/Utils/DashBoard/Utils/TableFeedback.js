import React from "react";
import "./TableFeedback.css";

export default function TableFeedBack({ tableAttributes, tableData }) {
  return (
    <div className="BoxTable">
      <h1>Tabela de Avaliações</h1>
      <table>
        <thead>
          <tr>
            {tableAttributes.map((attribute, index) => (
              <th key={index}>{attribute}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((tuple, index) => (
            <tr key={index}>
              {tableAttributes.map((attribute, index) => (
                <td key={index}>{tuple[attribute]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}