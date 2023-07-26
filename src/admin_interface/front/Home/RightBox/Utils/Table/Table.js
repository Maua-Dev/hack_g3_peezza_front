import React, { useEffect, useState } from 'react';
import './Table.css';
import { fetchData } from '../../../../../../back_operation_mock/repo_mock';

export default function Table({ selectedOption }) {

  const [tableAtributes, setTableAtributes] = useState([]);
  const [tableData, setTableData] = useState([]);

  const [showAddOption, setShowAddOption] = useState(false);

  useEffect(() => {
    const fetchDataAndUpdateTable = async () => {
      try {
        const response = fetchData(selectedOption);
        setTableAtributes(response.attributes);
        setTableData(response.tuples);
      } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
      }
    };
  
    fetchDataAndUpdateTable();
  }, [selectedOption]);

  function renderTableAtributes() {
    return (
      <thead className='.TableTittle'>
        <tr>
          {tableAtributes.map((attribute, index) => (
            <th key={index}>{attribute}</th>
          ))}
        </tr>
      </thead>

    );
  }

  function renderTableData() {
    return (
      <tbody className='TableData'>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {tableAtributes.map((attribute, attributeIndex) => (
              <td key={attributeIndex}>{row[attribute]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }

  function renderAddOption() {
    return (
      <div className='TableInputOptions'> 
        
      </div>
    );
  }
  return (
    <>
      <div className={`TableTopContainer ${!showAddOption && "hidden"}`}>
        <div className='TableOptions'>
          <button onClick={() => setShowAddOption(!showAddOption)}>ADICIONAR</button>
          <button>DELETAR</button>
          <button>ALTERAR</button>
        </div>
        {showAddOption && renderAddOption()}
      </div>
      <div className='TableBox'>
        <table className='Table'>
          {renderTableAtributes()}
          {renderTableData()}
        </table>
      </div>
    </>
  );
}
