from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from Database import Connection
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["GET", "POST", "PUT", "DELETE"],
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

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000,reload=True)





