#!/bin/bash

./byfn.sh down 

docker stop $(docker ps -a -q)  ; docker rm -f $(docker ps -aq) ; docker system prune -a ; docker volume prune ; docker ps -a ; docker images -a ; docker volume ls

rm -rf ../web-app/server/wallet