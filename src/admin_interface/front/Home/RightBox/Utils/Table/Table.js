import React, { useEffect, useState } from 'react';
import './Table.css';
import { fetchData } from '../../../../../../back_operation_mock/repo_mock';
import AddOption from './CRUDOptions/AddOption';
import AlterOption from './CRUDOptions/AlterOption';
import DeleteOption from './CRUDOptions/DeleteOption';

export default function Table({ selectedOption }) {

  const [tableAttributes, setTableAttributes] = useState([]);
  const [tableData, setTableData] = useState([]);

  const [showAddOption, setShowAddOption] = useState(false);
  const [showAlterOption, setShowAlterOption] = useState(false);
  const [showDeleteOption, setShowDeleteOption] = useState(false);

  useEffect(() => {
    const fetchDataAndUpdateTable = async () => {
      try {
        const response = fetchData(selectedOption);
        setTableAttributes(response.attributes);
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
          {tableAttributes.map((attribute, index) => (
            <th key={index}>{attribute}</th>
          ))}
        </tr>
      </thead>
    );
  }

  function renderTableData() {
    return (
      <tbody className="TableData">
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {tableAttributes.map((attribute, attributeIndex) => (
              <td key={attributeIndex}>{row[attribute]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }

  return (
    <>
      <div className={'TableTopContainer'}>
        <div className='TableOptions'>
          <button onClick={() => setShowAddOption(!showAddOption)}>ADICIONAR</button>
          <button onClick={() => setShowAlterOption(!showAlterOption)}>ALTERAR</button>
          <button id='delete' onClick={() => setShowDeleteOption(!showDeleteOption)}>DELETAR</button>
        </div>
        {showAddOption && <AddOption selectedOption={selectedOption} showAddOption={showAddOption} setShowAddOption={setShowAddOption} attributes={tableAttributes} />}
        {showAlterOption && <AlterOption setShowAlterOption={setShowAlterOption} attributes={tableAttributes} data={tableData} />}
        {showDeleteOption && <DeleteOption selectedOption={selectedOption} setShowDeleteOption={setShowDeleteOption} />}
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
