## Descrição

```bash
DESAFIO RODOBENS
AGENDAR.COM -> Agendamento de serviços

API RESTFUL 
```

  

## Instalação

  

```bash

$  npm  install

```
## BD CONFIG
```bash
# credentials -> ./prisma/schema.prisma
	.
	.
	datasource db {
		 provider = "postgresql"
		 url :	"postgresql://<user>:<password>@db:5432/<db_name>"
	}
	.
	.
	.

```


## Prisma

```bash

# migrate

$	npx  prisma  migrate  dev  --name  init

 ```

## Iniciando api

  

```bash

# development

$  npm  run  start

  

# watch mode

$  npm  run  start:dev

  

# production mode

$  npm  run  start:prod

```

# agendar-api