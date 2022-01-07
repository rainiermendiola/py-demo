FROM python:3.10-buster
# FROM tiangolo/uvicorn-gunicorn-starlette:python3.8
# SQL Dependency
RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add -
    #Download appropriate package for the OS version
    #Choose only ONE of the following, corresponding to your OS version
    # #Debian 8 (only supported up to driver version 17.6)
    # curl https://packages.microsoft.com/config/debian/8/prod.list > /etc/apt/sources.list.d/mssql-release.list
    # #Debian 9
    # curl https://packages.microsoft.com/config/debian/9/prod.list > /etc/apt/sources.list.d/mssql-release.list
    #Debian 10
RUN curl https://packages.microsoft.com/config/debian/10/prod.list > /etc/apt/sources.list.d/mssql-release.list
RUN exit
RUN apt-get update
# optional: for unixODBC development headers
RUN apt-get install -y unixodbc-dev
RUN ACCEPT_EULA=Y apt-get install -y msodbcsql17
# optional: for bcp and sqlcmd
RUN ACCEPT_EULA=Y apt-get install -y mssql-tools
# RUN echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bashrc
# RUN source ~/.bashrc
# # optional: kerberos library for debian-slim distributions
# sudo apt-get install -y libgssapi-krb5-2
COPY ./requirements.txt requirements.txt
RUN python -m pip install --upgrade pip
RUN python -m pip install -r ./requirements.txt
COPY . .
EXPOSE 80
# CMD [ "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80" ]
CMD [ "gunicorn", "-k", "uvicorn.workers.UvicornWorker", "-b", "0.0.0.0:80", "--reload", "app:app" ]