
# Muino Email Management
The Muino email ISP admin management


# Start developing on Muino

## Installation
``` bash 
cd muino-angular/
npm install

cd ../

cd muino-smarthome-api/
npm install

# change .env to your need
cp .env.example .env

```

## Developing
Be aware that you need a MongDB, and Redis version running. 
``` bash 
cd muino-smarthome-api/
npm run start # This command build the frontend and start the backend

```

## Production
### Build a docker
For the production of pre-build docker on docker-hub.
``` bash 
./build_docker.sh

```

### Run on the docker
There are many environments variables, so it will be logical to add those in a docker compose file. Please, checkout docker compose and the `docker-compose.yml`. 
