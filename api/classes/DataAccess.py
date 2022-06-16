import pyodbc

class DataAccess:
    """
    Use this class to get data from SQL using PYODBC.\n
    Initialize with connection string.\n
    Use method "GetData" to query from database.\n
    Use method "PostData" to insert data to database.
    """
    def __init__(self, connectionString:str):
        self.connectionString = connectionString

    def GetData(self, cmd:str, cols:list, *params:str) -> list:
        """
        Gets data from the database.\n\n
        Parameters:\n
        - cmd: For the SQL command string. You may use the SELECT query or a STORED PROCEDURE\n
        - cols: Provide a list of columns in order to map the retrieved data.\n\n
        Returns:\n
        A List (JSON).
        """
       
        with pyodbc.connect(self.connectionString) as conn:
            with conn.cursor() as cursor:
                if params != None:
                    print(params)
                    cursor.execute(cmd,params)
                else:
                    cursor.execute(cmd)
                # print(cursor.description)
                # return cursor
                row = cursor.fetchone()
                resultList = []
                while row: 
                
                    resultItem = {}
                    for i, col in enumerate(cols):
                        # print(row[i])
                        value = row[i]
                        # print(value, type(value))
                        # print(str(value).isdecimal())
                        resultItem[col] = value
                    
                    # print(resultItem)
                    resultList.append(resultItem)
                    row = cursor.fetchone()
                
                return resultList

    def PostData(self, cmd:str, *params:str) -> int:
        """
        Posts data to the database.\n\n
        Parameters:\n
        - cmd: For the SQL command string. You may use the INSERT query or a STORED PROCEDURE\n
        Returns:\n
        The count of inserted records.
        """
        #Sample insert query
        #"""INSERT INTO SalesLT.Product (Name, ProductNumber, StandardCost, ListPrice, SellStartDate) 
        #VALUES (?,?,?,?,?)""", 'SQL Server Express New 20', 'SQLEXPRESS New 20', 0, 0, CURRENT_TIMESTAMP
        
        with pyodbc.connect(self.connectionString) as conn:
            with conn.cursor() as cursor:
                if params != None:
                    count = cursor.execute(cmd, params).rowcount
                else:
                    count = cursor.execute(cmd).rowcount
                conn.commit()
                # print('Rows inserted: ' + str(count))
                return count