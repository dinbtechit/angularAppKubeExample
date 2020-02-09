#! /bin/bash

version=$1
if [ -z "$version" ]
then
  # Get the last version of the image.
  version = `docker images | awk '{print $2}' | awk 'NR==2'`
fi
echo "Building $version ..."
# -----------------------------------------------------------------

# 1. Build the `myapp` docker image.
docker build -t myapp:$version .

# 2. Load docker image into Kind cluster ()
kind load docker-image myapp:$version
