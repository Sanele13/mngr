#!/bin/bash

docker network rm mngr

docker network create \
  --driver=bridge \
  --subnet=${SUBNET}.0/16 \
  --gateway=${SUBNET}.1 \
  mngr
docker kill $(docker ps -q)

docker-compose up