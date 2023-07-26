import cardapioData from "./tables_mock.json";

export function createItem(selectedOption, newItem) {
  const data = cardapioData[selectedOption];
  const headers = data[0];
  const newItemObj = {};

  for (let i = 0; i < headers.length; i++) {
    newItemObj[headers[i]] = newItem[i];
  }
  data.push(newItemObj);
}

export function updateItemById(selectedOption, id, updatedItem) {
  const data = cardapioData[selectedOption];
  const headers = data[0];

  for (let i = 1; i < data.length; i++) {
    if (data[i][headers[0]] === id) {
      for (let j = 0; j < headers.length; j++) {
        if (updatedItem[j] !== undefined) {
          data[i][headers[j]] = updatedItem[j];
        }
      }
      return true; // Item updated successfully
    }
  }
  return false; // Item not found
}

export function fetchData(selectedOption) {
  try {
    const [attributes, ...data] = cardapioData[selectedOption];
    return { attributes: attributes, tuples: data };
  } catch (error) {
    console.error(error);
    return null;
  }
};