Make:
	node --experimental-json-modules index.js

lint-fix:
	npx eslint --fix ./

lint:
	npx eslint -f unix ./
