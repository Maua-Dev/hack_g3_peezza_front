from fastapi import FastAPI
from fastapi import Request
from fastapi.middleware.cors import CORSMiddleware
import json
from Database import Connection

app=FastAPI()

app.add_middleware(
            CORSMiddleware,
            allow_origins=["*"],
            allow_methods=["*"],
            allow_headers=["*"],
        )

@app.get("/cardapio/pizzas")
async def get_menu():
    # connection = Connection()
    # cursor = connection.get_Cursor()
    # query = "SELECT * FROM cardapio WHERE categoriaItem = 1"
    # cursor.execute(query)
    # result = cursor.fetchall()
    # connection.close_Connection()
    
    # cardapio = []
    # for item in result:
    #     menu_item = {
    #         'id': item[0],
    #         'nome': item[1],
    #         'descrição': item[2],
    #         'valor': item[3],
    #         'imagem': item[4]
    #     }
    #     cardapio.append(menu_item)

    # Retornar os resultados como JSON
    
    # return {'cardapio':cardapio}
    return json.load(open('pizza_mock.json'))

@app.get("/cardapio/bebidas")
async def get_menu():
    # connection = Connection()
    # cursor = connection.get_Cursor()
    # query = "SELECT * FROM cardapio WHERE categoriaItem = 2"
    # cursor.execute(query)
    # result = cursor.fetchall()
    # connection.close_Connection()
    
    # cardapio = []
    # for item in result:
    #     menu_item = {
    #         'id': item[0],
    #         'nome': item[1],
    #         'descrição': item[2],
    #         'valor': item[3],
    #         'imagem': item[4]
    #     }
    #     cardapio.append(menu_item)

    # Retornar os resultados como JSON

    # return {'cardapio':cardapio}
    return json.load(open('bebidas_mock.json'))

@app.get("/cardapio/sobremesas")
async def get_menu():
    # connection = Connection()
    # cursor = connection.get_Cursor()
    # query = "SELECT * FROM cardapio WHERE categoriaItem = 3"
    # cursor.execute(query)
    # result = cursor.fetchall()
    # connection.close_Connection()
    
    # cardapio = []
    # for item in result:
    #     menu_item = {
    #         'id': item[0],
    #         'nome': item[1],
    #         'descrição': item[2],
    #         'valor': item[3],
    #         'imagem': item[4]
    #     }
    #     cardapio.append(menu_item)

    # Retornar os resultados como JSON

    # return {'cardapio':cardapio}
    return json.load(open('sobremesas_mock.json'))

import pandas as pd
from mysql.connector import Error


@app.post("/api/order/")
async def save_order(order: Request):
    content = await order.json()

    name = content['name']
    number = content['number']
    payment = 'Cartão Débito' if 'debito' in content['payment'].lower() else 'Pix' if content['payment'].lower() == 'pix' else 'Cartão Crédito'
    cart = content['cart']

    try:
        # Connecting to DataBase
        connection = Connection()
        cursor = connection.get_Cursor()

        # Getting idClient
        cursor.execute(f"SELECT idClient FROM Client WHERE (nameClient = '{name}' AND celphoneClient = '{number}')")
        result = cursor.fetchone()
        if result:
            idClient = result[0]
        else:
            cursor.execute("SELECT max(idClient) FROM Client")
            result = cursor.fetchone()
            idClient = result[0]+1 if result[0] is not None else 0
            # Insert Client
            cursor.execute(f"INSERT INTO Client VALUE ({idClient},'{name}','{number}')")

        # Getting idOrder
        cursor.execute("SELECT max(idOrder) FROM Orders;")
        result = cursor.fetchone()
        idOrder = result[0]+1 if result[0] is not None else 0

        # Insert Order
        cursor.execute(f"INSERT INTO Orders (idOrder,idClient,idMethodPay) VALUE ({idOrder},{idClient},(SELECT idPayMethods FROM PaymentMethods WHERE nameMethod = '{payment}'))")

        # Insert Itens in Order
        for item in cart:
            idItem, quantityItem = item['id'], item['quantidade']
            cursor.execute(f"INSERT INTO itemorder VALUE ({idOrder}, {idItem}, {quantityItem})")

        # Closing Connection
        connection.commit()
        connection.close_Connection()
    
    except Error as e:
        return { "error": str(e) }

    



      


if __name__ == "__main__":
    import uvicorn

    uvicorn.run('main:app', host="0.0.0.0", port=8000,reload=True)
