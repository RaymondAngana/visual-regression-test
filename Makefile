WEBSTORE_CONTAINER=$(shell docker ps --filter 'label=7d-webstore-stub' -q)
WEBSTORE_IP=$(shell docker inspect --format='{{.NetworkSettings.IPAddress}}' $(WEBSTORE_CONTAINER))

install:
	docker-compose build

stop:
	docker-compose stop

down:
	docker-compose down

require-reference-images:
	@(ls ./screenshots/*.png &> /dev/null)\
		|| (echo 'No reference screenshots found' && exit 1)

remove-comparison-images:
	rm -f ./screenshots/*.diff.png
	rm -f ./screenshots/*.fail.png
	rm -f ./failures/*.png

remove-all-images:
	rm -f ./screenshots/*.png
	rm -f ./failures/*.png

test:
	HOST=https://$(WEBSTORE_IP):3000 docker-compose run tests

comparisons: stop remove-comparison-images require-reference-images test

references: stop remove-all-images test
