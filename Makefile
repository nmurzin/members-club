pwd=${CURDIR}
tag=node:lts-alpine

start:
	docker run -it -v $(pwd):/usr/src/app -w /usr/src/app -p 3000:3000 -t $(tag) npm run start

dev-start:
	docker run -it -v $(pwd):/usr/src/app -w /usr/src/app -p 3000:3000 -t $(tag) npm run start:dev

install:
	docker run -it -v $(pwd):/usr/src/app -w /usr/src/app -t $(tag) npm install

format:
	docker run -it -v $(pwd):/usr/src/app -w /usr/src/app -t $(tag) npm run format