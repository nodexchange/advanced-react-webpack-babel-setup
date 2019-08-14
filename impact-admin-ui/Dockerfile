FROM mhart/alpine-node:10 as builder

RUN npm install webpack -g
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

#RUN if [ "$NODE_ENV" = "development" ]; \
#	then npm install;  \
#	else npm install --only=production; \
#	fi

#RUN npm install --quiet --only=production

# npm run build
# && npm prune --production
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
# COPY . .

#RUN ["npm", "run", "build"]
# RUN ["npm", "prune", "--production"]

#CMD ["echo", "'<< STATIC WEBPACK served from /dist >>'"]
#CMD ["npm", "run", "build"]

ARG API_URL="http://oupimpactdev-env.dzvmm2pjcu.eu-west-1.elasticbeanstalk.com/api/"
ARG API_IP="IP ARG"
ARG API_PORT=3443
ARG BASE_ENV=env_test
ARG NODE_ENV=stage
ARG ECR_REPO_URL

RUN npm install
COPY . .
RUN npm run build
# RUN npm prune --production

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
