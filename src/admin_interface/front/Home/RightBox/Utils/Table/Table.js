import React, { useEffect, useState } from 'react';
import './Table.css';
import { fetchData, createItem, updateItemById } from '../../../../../../back_operation_mock/repo_mock';

export default function Table({ selectedOption }) {

  const [tableAtributes, setTableAtributes] = useState([]);
  const [tableData, setTableData] = useState([]);

  const [showAddOption, setShowAddOption] = useState(false);

  useEffect(() => {
    handleResquestTable();
  }, [selectedOption]);

  async function handleResquestTable() {
    try {
      const response = fetchData(selectedOption);
      setTableAtributes(response.attributes)
      setTableData(response.tuples)
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
