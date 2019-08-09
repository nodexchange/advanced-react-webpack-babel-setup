docker build -t impact-nginx .
docker tag impact-nginx:latest 396484764682.dkr.ecr.eu-west-1.amazonaws.com/impact-nginx:latest
docker push 396484764682.dkr.ecr.eu-west-1.amazonaws.com/impact-nginx:latest
