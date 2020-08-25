# Fitually backend

#### Config example

Add `.env` file with content:

```
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=password
DATABASE=fitually
JWT_SECRET=example
STRIPE_SECRET_KEY=example-key
STRIPE_API_VERSION=2020-03-02
STRIPE_MAX_NETWORK_RETRIES=10
STORAGE_ENDPOINT=sfo2.digitaloceanspaces.com
STORAGE_ACCESS_KEY_ID=example
STORAGE_SECRET_ACCESS_KEY=example
STORAGE_BUCKET=fitually

```

#### Install dependencies and launch server

1. Execute `npm install` or `yarn install` command.
2. Execute `npm run start` command.

#### Launch server for development in watch mode

Execute `npm run start:dev` command.

#### Generate migration script

Execute

`npm run migration:generate -- -n MigrationName`

or

`./create-migration.sh MigrationName`

command. 'MigrationName' is the name of migration script.

#### Update entities module from repository

1. The first time you clone a project, run the commands:

`git remote add -f entities https://git.omega-r.club/fitually/fitually-entities.git`

`git merge -s ours --no-commit entities/development`

2. Next, you can pull the changes from the entities repository with the command:

 `git pull -s subtree entities development`

