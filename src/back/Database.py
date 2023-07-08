from mysql.connector import connect
from mysql.connector import Error

class DataBase():
    def __init__(self):
        self.host = "database-1.cprbhtxuedqd.us-east-1.rds.amazonaws.com"
        self.port = 3306
        self.user = "admin"
        self.password = "Felipesql134679-"
        self.database = "dbpizzedusoleil"
        
class Connection(DataBase):
    def __init__(self):
        super().__init__()
        try:
            self.connection = connect(
                host=self.host,
                port = self.port,
                user=self.user,
                passwd=self.password,
                database=self.database
            )
            self.cursor = self.connection.cursor()

        except Error as e:
            print(f"Erro ao conectar ao banco de dados: {e}")

    def get_Cursor(self):
        return self.cursor
    
    def close_Connection(self):
        self.connection.close()


