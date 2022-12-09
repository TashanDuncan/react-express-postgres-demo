** Install PostgesSQL **

    brew update
    brew install postgresql@14
    brew services start postgresql@14
    brew services stop postgresql@14

** Setup database **

Go to terminal:
    
    cd {root of project}    

    psql postgres
    CREATE ROLE {user} WITH LOGIN PASSWORD 'password';
    ALTER USER {user} WITH SUPERUSER;
    CREATE DATABASE demo;
    exit
    
    psql demo
    CREATE SCHEMA demo;

    \i server/sql/setup.sql

** Front end **

http://localhost:3000/

** API **

http://localhost:3001/
