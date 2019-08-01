# Events - basic micro events service
~~~
* npm dev
~~~
* npm start
~~~
- Micro backend at  `https://localhost:3443/`


## DOCKER ##
### {PROD}
docker build -t events-retrieve .
### {LOCAL DEV}
docker build -t events-retrieve . --file Dockerfile.dev

docker run --rm -it -v %cd%:/usr/src/app -v /usr/src/app/node_modules -p 127.0.0.1:3443:3443/tcp events-retrieve
