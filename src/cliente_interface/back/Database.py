from mysql.connector import connect
from mysql.connector import Error

class DataBase():
    def __init__(self):
        self.host = "localhost"
        self.user = "root"
        self.password = "Felipe134679"
        self.database = "dbpizzedusoleil"
        
class Connection(DataBase):
    def __init__(self):
        super().__init__()
        try:
            self.connection = connect(
                host=self.host,
                user=self.user,
                passwd=self.password,
                database=self.database
            )
            self.cursor = self.connection.cursor()

        except Error as e:
            return { e }

    def get_Cursor(self):
        return self.cursor
    
    def close_Connection(self):
        self.connection.close()

    def commit(self):
        self.connection.commit()

