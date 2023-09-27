# tag image
docker images
docker tag <image> <image:1.0>


# Dockerhub Registry
$ docker tag backend:1.0 chaiyasitt/backend:1.0
$ docker push chaiyasitt/backend:1.0
$ docker pull chaiyasitt/backend:1.0



# Private Docker Registry

1. **Run Docker Registry Container:**

Run a Docker Registry container without SSL/TLS:

```sh
docker run -d -p 6000:5000 --restart=always --name registry registry:2
```

This command starts a Docker Registry container and maps port 5000 on the host to port 5000 in the container.

2. **Configure Docker Daemon (On Client Machines):**

On client machines that will interact with your insecure registry, you need to allow Docker to connect to an insecure registry by editing or creating the `/etc/docker/daemon.json` file and adding the following content:

macos: ~/.docker/daemon.json
windows: %userprofile%\.docker\daemon.json

```json
{
  "insecure-registries": ["127.0.0.1:6000"]
}
```

Replace `127.0.0.1` with the hostname or IP address of your private registry.

3. **Tag and Push Images:**

Tag and push images to your insecure registry:

```sh
docker tag my-image:tag 127.0.0.1:6000/my-image:tag
docker push 127.0.0.1:6000/my-image:tag
```

4. **Pull Images:**

On other machines, you can pull images from your insecure registry:

```sh
docker pull 127.0.0.1:5000/my-image:tag
```


- curl -X GET 127.0.0.1:6000/v2/_catalog
- curl -X GET 127.0.0.1:6000/v2/<repository>/tags/list
