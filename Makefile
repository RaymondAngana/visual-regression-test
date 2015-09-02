WEBSTORE_CONTAINER=$(shell docker ps --filter 'label=7d-webstore-stub' -q)
WEBSTORE_IP=$(shell docker inspect --format='{{.NetworkSettings.IPAddress}}' $(WEBSTORE_CONTAINER))

stop_containers:
	docker-compose stop

require_reference_images:
	@(ls ./screenshots/*.png &> /dev/null)\
		|| (echo 'No reference screenshots found' && exit 1)

remove_comparison_images:
	rm -f ./screenshots/*.diff.png
	rm -f ./screenshots/*.fail.png
	rm -f ./failures/*.png

remove_all_images:
	rm -f ./screenshots/*.png
	rm -f ./failures/*.png

test:
	docker-compose build
	HOST=https://$(WEBSTORE_IP):3000 docker-compose run tests

comparisons: stop_containers remove_comparison_images require_reference_images test

references: stop_containers remove_all_images test
