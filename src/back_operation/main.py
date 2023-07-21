from fastapi import FastAPI, Request
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
    
@app.post('/api/get-Table')
async def get_table(request: Request):
    content = await request.json()

    connection = Connection()
    cursor = connection.get_Cursor()
    result = []

    if content['request'] == 'Pedidos':
        cursor.execute('''
            SELECT o.idOrder as Pedido, 
            c.idClient as 'ID Cliente', 
            c.nameClient as Nome, 
            c.celphoneClient as Contato, 
            CONCAT('R$ ', SUM(ito.quantityItem * it.valorItem )) as 'Valor Total',
            py.nameMethod as 'Método de Pagamento',
            o.dateOrder as 'Data e Hora'
            FROM dbpizzedusoleil.client c 
            JOIN orders o on c.idClient = o.idClient
            JOIN itemorder ito on ito.idOrder = o.idOrder
            JOIN itens it on it.idItem = ito.idItem
            JOIN paymentmethods py on py.idPayMethods = o.idMethodPay 
            GROUP BY o.idOrder
            ORDER BY o.idOrder;
        ''')
        data = cursor.fetchall()
        column_names = [desc[0] for desc in cursor.description]
        for tuple in data:
            result.append(dict(zip(column_names, tuple)))
    
    if content['request'] == 'Funcionario':
        cursor.execute('''
            SELECT f.idFuncionario as 'ID Funcionário',
            f.nameFuncionario as Nome,
            f.cpfFuncionario as CPF,
            f.senhaFuncionario as Senha,
            c.nomeCargo as Cargo,
            CONCAT('R$ ', c.salarioCargo) as Salario
            FROM dbpizzedusoleil.funcionarios f
            JOIN cargos c on f.cargoFuncionario = c.idCargo
            ORDER BY f.idFuncionario;
        ''')
        data = cursor.fetchall()
        column_names = [desc[0] for desc in cursor.description]
        for tuple in data:
            result.append(dict(zip(column_names, tuple)))

    if content['request'] == 'Cardapio':
        cursor.execute('''
            SELECT i.idItem as 'ID Item',
            i.nomeItem as Item,
            i.descricaoItem as Descrição,
            CONCAT('R$ ', i.valorItem) as Preço,
            c.nomeCategoria as Categoria 
            FROM dbpizzedusoleil.itens i
            JOIN categoryitem c on c.idCategoria = i.categoriaItem
            ORDER BY i.idItem;
        ''')
        data = cursor.fetchall()
        column_names = [desc[0] for desc in cursor.description]
        for tuple in data:
            result.append(dict(zip(column_names, tuple)))

    connection.close_Connection()

    return {'atributes':column_names,'tuples':result}




if __name__ == "__main__":
    import uvicorn

    uvicorn.run('main:app', host="0.0.0.0", port=8000,reload=True)






    