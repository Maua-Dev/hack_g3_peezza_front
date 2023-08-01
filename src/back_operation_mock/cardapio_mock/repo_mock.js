import TableData from "./cardapio_mock.json";

export function addItemToCardapio (newItem) {
    try {
        const newID = TableData["Cardapio"].length > 1 ? TableData["Cardapio"][TableData["Cardapio"].length - 1]["ID"] + 1 : 1;
        const newItemWithID = { ...newItem, ID: newID };
        TableData["Cardapio"].push(newItemWithID);
        return TableData;
      } catch (error) {
        console.error(error);
        return null;
      }
}