FROM nginx:1.21.6

# Update all packages
RUN apt-get update && apt-get -y upgrade

# Use a custom startpage
RUN echo '<html><bod>My New Custom Startpage</body></html>' > /usr/share/nginx/html/index.html