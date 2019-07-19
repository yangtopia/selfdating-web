pushd ../selfdating-web

echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

docker build -t yangtopia/selfdating-web .

docker push yangtopia/selfdating-web
