from starlette import middleware
from starlette.applications import Starlette
# from starlette.middleware import httpsredirect
from starlette.routing import Route, Mount
from starlette.responses import JSONResponse
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware
from starlette.config import Config
from endpoints.Employees import Employees
from endpoints.Items import Items

config = Config(".env")
DEBUG = config('DEBUG', cast=bool)

# templates = Jinja2Templates(directory='templates')

# async def main(request):
#     emp = Employees.Get()
#     # print(emp)
#     # person = Person('Rainier', 'Mendiola')
#     items = Items.GetItems()
#     # return templates.TemplateResponse('home.html', {'request': request, 'employees':emp, 'items':items})

def GetEmployees(request):
    data = Employees.Get()
    # print(data)
    return JSONResponse(data)

def GetEmployeeById(request):
    id = request.path_params['id']
    # return JSONResponse(Employees.GetAll())
    return JSONResponse(Employees.Get(id))

def GetItems(request):
    items = Items.GetItems()
    # print(items)
    return JSONResponse(items)

    
routes = [
    # Route('/', main),
    Mount("/api", name="api", routes=[
        Route("/employees", GetEmployees, methods=["GET"]),
        Route("/employees/{id:int}", GetEmployeeById, methods=["GET"]),
        Route("/items", GetItems, methods=["GET"])
    ])
]

middleware = [
    Middleware(CORSMiddleware, allow_origins=['*'], allow_methods=['*'], allow_headers=['*'])
]

def startup():
    print("Application started.")
def shutdown():
    print("Application ended.")

app = Starlette(debug=DEBUG, routes=routes, middleware=middleware, on_startup=[startup], on_shutdown=[shutdown])