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


### AWS ECR ####
docker build -t impact-api .

docker tag impact-api:latest 396484764682.dkr.ecr.eu-west-1.amazonaws.com/impact-ui:latest

docker push 396484764682.dkr.ecr.eu-west-1.amazonaws.com/impact-api:latest

