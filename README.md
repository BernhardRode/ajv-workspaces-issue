# Issue with ajv with npm workspaces

## Preparation

* `npm i && npm i -ws`

## Run

* `npm run build -w apps/parser`
* `npm run start -w apps/parser`

## Findings

* change the import "import Ajv from 'ajv/dist/jtd'" to "import Ajv from 'ajv/dist/jtd.js'" in 'apps/parser/src/index.ts'
* build and run - it works but imho this is ugly 😜