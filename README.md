**Reactjs and Nodejs Setup**
- [x] create client with "create-react-app"
- [x] Create server with Nodejs and Expressjs
- [x] Setup build command and start production command
- [x] Docker Setup
    - CMD: `docker run -p 49160:9000 -d --name crano fitfab/crano`
- [ ] Setup build and Heroku config
- [ ] Setup env variables support

**Remove docker containers (clean up)**

`docker rm $(docker ps -qa --no-trunc --filter "status=exited")`
