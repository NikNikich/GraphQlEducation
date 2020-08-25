# Создает файл миграции и принимает в аргументе название таблицы
typeorm migration:create -n "$1MigrationSeed" -d src/modules/database/migrations
