WEBSTORE_CONTAINER=$(shell docker ps --filter 'label=7d-webstore-stub' -q)
WEBSTORE_IP=$(shell docker inspect --format='{{.NetworkSettings.IPAddress}}' $(WEBSTORE_CONTAINER))

stop_containers:
	docker-compose stop

comparisons: stop_containers
	@(ls ./screenshots/*.png &> /dev/null) || (echo 'No reference screenshots found' && exit 1)
	docker-compose build
	HOST=http://$(WEBSTORE_IP):3000 docker-compose run tests

references: stop_containers
	rm -f ./screenshots/*.png
	docker-compose build
	HOST=http://$(WEBSTORE_IP):3000 docker-compose run tests
