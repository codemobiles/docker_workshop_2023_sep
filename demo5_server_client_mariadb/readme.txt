Welcome to core docker for developers workshop
- original workshop and document: https://drive.google.com/file/d/1419prMxwlsia4ZVC-KF57jb-8Ww6BimX/view?usp=sharing
- vscode extension: sqltool

# Unix commands
$ ls -lrt

# basic docker commands
$ docker ps
$ docker ps -a
$ docker run <docker-image>
$ docker start/stop/restart <container-name>
$ docker start/stop/restart <container-id (partail or full)>
$ docker rm <container-name> or <container-id (partail or full)>
$ docker rm -f <container-name> or <container-id (partail or full)>
$ docker images
$ docker rmi <image-id>
$ docker pull <image-name:tag>
$ docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <container ID>
$ docker logs --follow <contain-name>
$ docker exec -it <contain-name> sh
