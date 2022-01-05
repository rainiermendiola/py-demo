from classes.DataAccess import DataAccess
from starlette.config import Config

# Config will be read from environment variables and/or ".env" files.
config = Config(".env")
CONNECTION_STRING = config('CONNECTION_STRING', cast=str)

da = DataAccess(CONNECTION_STRING)

class Items:
    
    def GetItems():
        data = da.GetData("PR_Items_Get", ["ItemCategoryId","ItemCategoryName","ItemId","ItemName","ItemPrice"])
        # print(data)
        return data
    def GetItemsById(id):
        data = da.GetData(f"PR_Items_Get_ById {id}", ["ItemCategoryId","ItemCategoryName","ItemId","ItemName","ItemPrice"])
        # print(data)
        return data
