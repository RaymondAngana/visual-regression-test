install:
	docker-compose build

stop:
	docker-compose stop

clean:
	docker rm $(docker ps --filter 'name=visualregressiontest' -aq)

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
	docker-compose run tests

comparisons: stop remove-comparison-images require-reference-images test

references: stop remove-all-images test
