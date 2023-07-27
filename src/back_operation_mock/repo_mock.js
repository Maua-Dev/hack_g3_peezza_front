import TableDataCardapio from './cardapio_mock/cardapio_mock.json';
import TableDataFuncionarios from './funcionarios_mock/funcionarios.json'; 
import TableDataPedidos from './pedidos_mock/pedidos_mock.json';

export function fetchData(selectedOption) {
  try {
    let attributes = [];
    let data = [];

    if (selectedOption === 'Cardapio') {
      [attributes, ...data] = TableDataCardapio[selectedOption];
    } else if (selectedOption === 'Funcionario') {
      [attributes, ...data] = TableDataFuncionarios[selectedOption];
    } else if (selectedOption === 'Pedidos') {
      [attributes, ...data] = TableDataPedidos[selectedOption];
    }

    return { attributes, tuples: data };
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function addItem(selectedOption, newItem) {
  
  function addNewItemToData(data, newItem) {
    const dataList = data[selectedOption];
    const newId = dataList.length > 0 ? dataList[dataList.length - 1]['ID'] + 1 : 1;
    const newItemWithId = { ID: newId, ...newItem };
    dataList.push(newItemWithId);
  }

  switch (selectedOption) {
    case 'Cardapio':
      addNewItemToData(TableDataCardapio, newItem);
      break;
    case 'Funcionarios':
      addNewItemToData(TableDataFuncionarios, newItem);
      break;
    case 'Pedidos':
      addNewItemToData(TableDataPedidos, newItem);
      break;
    default:
      console.error('Invalid selectedOption:', selectedOption);
  }
}