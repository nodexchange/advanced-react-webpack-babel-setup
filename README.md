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
