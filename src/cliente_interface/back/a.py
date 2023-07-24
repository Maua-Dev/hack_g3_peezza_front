content = {'name': 'Felipe Carillo', 'number': '11971774845', 'cart': [{'id': 54, 'nome': 'Pizza Margherita', 'descricao': 'Molho de tomate, mussarela, tomate e manjericão fresco.', 'valor': 29.99, 'imagem': 'https://i.pinimg.com/564x/e5/d5/22/e5d522b870b947283bf98f10b599e2be.jpg', 'quantidade': 13}, {'id': 69, 'nome': 'Refrigerante Coca-Cola', 'descricao': 'Refrigerante de cola tradicional.', 'valor': 5, 'imagem': 'https://i.pinimg.com/564x/c2/e6/fc/c2e6fc6e062f87815ea6b892e602e83a.jpg', 'quantidade': 1}], 'payment': 'cartaodebito'}

name = content['name']
number = content['number']
payment = 'Cartão Débito' if 'debito' in content['payment'].lower() else 'Pix' if content['payment'].lower() == 'pix' else 'Cartão Crédito'
cart = content['cart']
for item in cart:
    idItem, quantity = item['id'], item['quantidade']
    print(idItem, quantity)