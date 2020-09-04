dockerfile = -f docker-compose.yml

build:
	docker-compose ${dockerfile} build
	make dev

dev:
	docker-compose ${dockerfile} up -d

install-frontend-deps:
	npm --prefix ./frontend install
	