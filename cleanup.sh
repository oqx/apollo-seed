##!/usr/bin/env bash

rm -rf data seed

docker-compose down
docker volume rm $(docker volume ls -qf dangling=true | xargs)
docker system prune -a
