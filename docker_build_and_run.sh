#!/usr/bin/env bash
# ###########################################################################################################
# building the docker file
# sample usage
# if just wants to build the latest and run the latest
#   ./docker_build_and_run.sh
#
# if you want to update the image you need to provide version as argument.
# if argument was provided script takes first argument as version and continue the docker
# image build and will push to remote
#   ./docker_build_and_run.sh 0.01
#
#############################################################################################################
if [ $# -eq 0 ]; then
  docker build -t rebirthbridge/client-bff . &&
    docker run -p 6379:6379 -p 8081:8080 -d rebirthbridge/client-bff:latest
else
  docker build -t rebirthbridge/client-bff:${1} . &&
    docker run -p 6379:6379 -p 8081:8080 -d rebirthbridge/client-bff:${1}
fi