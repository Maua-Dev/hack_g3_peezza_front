import pizzaData from './pizza_mock.json';
import bebidaData from './bebidas_mock.json';
import sobremesaData from './sobremesas_mock.json';

export const fetchData = () => {
  try {
    const pizza = pizzaData.cardapio;
    const bebida = bebidaData.cardapio;
    const sobremesa = sobremesaData.cardapio;

    return { pizza, bebida, sobremesa };


  } catch (error) {
    console.error(error);
    return null;
  }
};