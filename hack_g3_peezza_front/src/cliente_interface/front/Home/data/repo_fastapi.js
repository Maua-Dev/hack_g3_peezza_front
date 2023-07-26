const fetchData = async () => {
  try {
    const pizzaResponse = await fetch("http://localhost:8000/cardapio/pizzas");
    const pizzaData = await pizzaResponse.json();
    setPizza(pizzaData.cardapio);

    const bebidaResponse = await fetch("http://localhost:8000/cardapio/bebidas");
    const bebidaData = await bebidaResponse.json();
    setBebida(bebidaData.cardapio);

    const sobremesaResponse = await fetch("http://localhost:8000/cardapio/sobremesas");
    const sobremesaData = await sobremesaResponse.json();
    setSobremesa(sobremesaData.cardapio);
  } catch (error) {
    console.error(error);
  }
};