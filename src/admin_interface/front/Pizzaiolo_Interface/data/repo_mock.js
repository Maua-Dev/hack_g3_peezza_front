import Orders from "./order_mock.json";

export const fetchData = () => {
  try {
    const orders = Orders.orders; 
    return orders;
  } 
  catch (error) {
    console.error(error);
    return null;
  }
};