install: install-deps

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci

link:
	npm link

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

publish:
	npm publish --dry-run

prettier:
	npx prettier --write .

build:
	rm -rf dist
	NODE_ENV=production npx webpack

develop:
	rm -rf dist
	NODE_ENV=development npx webpack

webpack:
	npx webpack --config webpack.config.cjs

.PHONY: test
