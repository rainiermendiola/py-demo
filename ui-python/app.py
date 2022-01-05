from starlette import middleware
from starlette.applications import Starlette
from starlette.middleware import httpsredirect
from starlette.routing import Route, Mount
from starlette.templating import Jinja2Templates
from starlette.staticfiles import StaticFiles
from starlette.responses import JSONResponse
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware
from starlette.config import Config

import requests

config = Config(".env")
DEBUG = config('DEBUG', cast=bool)
API_URL = config('API_URL', cast=str)

templates = Jinja2Templates(directory='templates')

async def home(request):
    employees = requests.get(f"{API_URL}/api/employees").json()
    items = requests.get(f"{API_URL}/api/items").json()
    # print(data)
    return templates.TemplateResponse('home.html', {'request': request, 'employees':employees, 'items':items})
    
def notfound(request, exc):
    return templates.TemplateResponse('notfound.html', {'request': request})

routes = [
    Route('/', home),
    Mount('/static', StaticFiles(directory='static'), name='static'),
    Route('/*', notfound)

]

middleware = [
    Middleware(CORSMiddleware, allow_origins=['*'], allow_methods=['*'], allow_headers=['*'])
]

def startup():
    print("Application started.")
def shutdown():
    print("Application ended.")

exception_handlers = {
    404:notfound
}

app = Starlette(debug=DEBUG,
    routes=routes,
    middleware=middleware,
    on_startup=[startup],
    on_shutdown=[shutdown],
    exception_handlers=exception_handlers)