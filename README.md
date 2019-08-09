# Bachata Events - basic project

## Installation
### DEV ###
local dependencies in the folders via the standard npm i

- `docker-compose up` || `docker-compose up --build`
- `docker-compose up -d` (detached)
- `docker-compose ps`
- `docker-compose run api`
- `docker-compose build`s

- `git clone git@git@github.com:nodexchangeadvanced-react-webpack-babel-setup.git`
- cd advanced-react-webpack-babel-setup
- npm install
- npm dev
- visit `http://localhost:8080/`
- Micro backend at  `https://localhost:3443/`

### Production ####
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d

https://medium.com/vteam/configure-docker-project-for-different-environments-using-docker-compose-3-bfbef37d951c



### DOCKER ###
- Clean everything unused
docker system prune -a


### EB - AWS ===
1.) First install aws cli (official) on restricted Windows machine do it via pip3 without elevated rights
2.) Create a new API credentials (https://console.aws.amazon.com/iam/home?#/security_credentials)
3.) in terminal (windows -> powershell) aws configure
4.) $(aws ecr get-login --no-include-email --region us-east-1)
5.) docker-compose -f docker-compose.yml -f docker-compose.prod.yml build
6.) docker-compose -f docker-compose.yml -f docker-compose.prod.yml push

===
5.) docker build -t oup-impact .
6.) docker tag oup-impact:latest 396484764682.dkr.ecr.us-east-1.amazonaws.com/oup-impact:latest
7.) docker push 396484764682.dkr.ecr.us-east-1.amazonaws.com/oup-impact:latest


