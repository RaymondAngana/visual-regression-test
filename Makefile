WEBSTORE_CONTAINER=$(shell docker ps --filter 'label=7d-webstore-stub' -q)
WEBSTORE_IP=$(shell docker inspect --format='{{.NetworkSettings.IPAddress}}' $(WEBSTORE_CONTAINER))

stop_containers:
	docker-compose stop

test: stop_containers
	docker-compose build
	HOST=http://$(WEBSTORE_IP):3000 docker-compose run tests
