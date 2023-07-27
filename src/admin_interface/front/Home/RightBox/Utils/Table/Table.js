import React, { useEffect, useState } from 'react';
import './Table.css';
import { fetchData } from '../../../../../../back_operation_mock/repo_mock';
import AddOption from './CRUDOptions/AddOption';
import AlterOption from './CRUDOptions/AlterOption';

export default function Table({ selectedOption }) {

  const [tableAtributes, setTableAtributes] = useState([]);
  const [tableData, setTableData] = useState([]);

  const [showAddOption, setShowAddOption] = useState(false);
  const [showAlterOption, setShowAlterOption] = useState(false);
  const [showDeleteOption, setShowDeleteOption] = useState(false);

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

    setShowAddOption(false);
    setShowAlterOption(false);
    setShowDeleteOption(false);

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
      <tbody className="TableData">
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

  return (
    <>
      <div className={'TableTopContainer'}>
        <div className='TableOptions'>
          <button onClick={() => setShowAddOption(!showAddOption)}>ADICIONAR</button>
          <button onClick={() => setShowAlterOption(!showAlterOption)}>ALTERAR</button>
          <button id='delete' onClick={() => setShowDeleteOption(!showDeleteOption)}>DELETAR</button>
        </div>
        {showAddOption && <AddOption selectedOption={selectedOption} showAddOption={showAddOption} setShowAddOption={setShowAddOption} attributes={tableAtributes} />}
        {showAlterOption && <AlterOption setShowAlterOption={setShowAlterOption} attributes={tableAtributes} data={tableData} />}
        {showDeleteOption && <AddOption showAddOption={showDeleteOption} setShowAddOption={setShowDeleteOption} attributes={tableAtributes} />}
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
