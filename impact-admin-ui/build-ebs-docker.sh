docker build -t impact-ui .
docker tag impact-ui:latest 396484764682.dkr.ecr.eu-west-1.amazonaws.com/impact-ui:latest
docker push 396484764682.dkr.ecr.eu-west-1.amazonaws.com/impact-ui:latest
