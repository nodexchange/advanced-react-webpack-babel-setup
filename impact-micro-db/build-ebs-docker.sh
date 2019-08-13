docker build -t impact-api .
docker tag impact-api:latest 396484764682.dkr.ecr.eu-west-1.amazonaws.com/impact-api:latest
docker push 396484764682.dkr.ecr.eu-west-1.amazonaws.com/impact-api:latest
