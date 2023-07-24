import React, { useEffect, useState } from 'react';
import './Table.css';
import axios from 'axios';

export default function Table ({selectedOption}) {
  
  const [tableAtributes, setTableAtributes] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    handleResquestTable();
  }, [selectedOption]);

  async function handleResquestTable() {
    try {
      const response = await axios.post('http://localhost:8000/api/get-Table', { request : selectedOption });
      setTableAtributes(response.data.atributes)
      setTableData(response.data.tuples)
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  }

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
        {tableData.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((value, idx) => (
              <td key={idx}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
  
  return (
    <>
      <div className='TableOptions'>
        <button>ADICIONAR</button> 
        <button>ADICIONAR</button> 
        <button>ADICIONAR</button> 
        <button>ADICIONAR</button> 
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
