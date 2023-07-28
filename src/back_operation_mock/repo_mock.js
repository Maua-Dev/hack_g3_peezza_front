import TableDataCardapio from './cardapio_mock/cardapio_mock.json';
import TableDataFuncionarios from './funcionarios_mock/funcionarios.json'; 
import TableDataPedidos from './pedidos_mock/pedidos_mock.json';

export function fetchData(selectedOption) {
  try {
    let attributes = [];
    let data = [];

    const savedData = localStorage.getItem(selectedOption);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      attributes = parsedData.attributes;
      data = parsedData.tuples;
    } else {

    if (selectedOption === 'Cardapio') {
      [attributes, ...data] = TableDataCardapio[selectedOption];
    } else if (selectedOption === 'Funcionario') {
      [attributes, ...data] = TableDataFuncionarios[selectedOption];
    } else if (selectedOption === 'Pedidos') {
      [attributes, ...data] = TableDataPedidos[selectedOption];
    }
    
    localStorage.setItem(selectedOption, JSON.stringify({ attributes, tuples: data }));
    }

    return { attributes, tuples: data };
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function addItem(selectedOption, newItem) {
  try {
    const jsonData = localStorage.getItem(selectedOption);
    const data = jsonData ? JSON.parse(jsonData) : [];
    const lastId = data['tuples'].length > 0 ? data['tuples'][data['tuples'].length - 1].ID : 0;
    const newItemWithId = { ID: lastId + 1, ...newItem };
    data['tuples'].push(newItemWithId);
    const novaStringJson = JSON.stringify(data);
    localStorage.setItem(selectedOption, novaStringJson);
  } catch (error) {
    console.error(error);
  }
}

export function deleteItem(selectedOption, itemId) {
  try {
    const jsonData = localStorage.getItem(selectedOption);
    console.log(jsonData)
    if (!jsonData) {
      throw new Error(`No data found for selectedOption: ${selectedOption}`);
    }
    const data = JSON.parse(jsonData);
    data.tuples = data.tuples.filter((item) => parseInt(item["ID"]) !== parseInt(itemId));
    
    const updatedJsonData = JSON.stringify(data);
    localStorage.setItem(selectedOption, updatedJsonData);

    return data;
  } catch (error) {
    console.error('Error deleting item:', error.message);
    return null;
  }
}








