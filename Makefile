PROD=-f docker-compose-base.yml -f docker-compose-prod.yml
DEV=-f docker-compose-base.yml -f docker-compose-dev.yml

run:
	docker-compose $(DEV) up

run-prod:
	docker-compose $(PROD) up

# Buidling things
build-dev:
	docker-compose $(DEV) build

build-prod:
	docker-compose $(PROD) build

clean:
	-rm -rf node_modules

docker-clean:
	docker-compose $(DEV) rm --force