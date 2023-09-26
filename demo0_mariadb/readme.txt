- docker rm some-mariadb
- docker rm phpmyadmin

- https://hub.docker.com/_/mariadb
$ docker run -p 3306:3306  --name some-mariadb --env MARIADB_USER=example-user --env MARIADB_PASSWORD=my_cool_secret --env MARIADB_ROOT_PASSWORD=my-secret-pw  mariadb:latest
$ docker run -p 3306:3306 -d --rm  --name some-mariadb --env MARIADB_USER=example-user --env MARIADB_PASSWORD=my_cool_secret --env MARIADB_ROOT_PASSWORD=my-secret-pw  mariadb:latest
$ docker stop some-mariadb 
$ docker start some-mariadb 
$ docker restart some-mariadb 



- https://hub.docker.com/_/phpmyadmin
$ docker run --name  phpmyadmin -d --link some-mariadb:db -p 8083:80 phpmyadmin 
// some-mariadb is the mariadb container name
// --link some-mariadb: is container name to link
// --link :db is the hostname that phpmyadmin  use to connect the database
// docker exec -it phpmyadmin more /etc/hosts 

- username: is the root username of mariadb container (root)
- password: is the root password of mariadb container (my-secret-pw)

