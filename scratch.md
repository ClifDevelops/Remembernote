npx sequelize-cli model:generate --name <ModelName> --attributes <column1>:<type>,<column2>:<type>,...

npx sequelize-cli model:generate --name Memory --attributes title:string,dateOfMemory:dateonly,location:string,memoryRating:integer,body:text,userId:integer

npx sequelize-cli model:generate --name Tag --attributes tagName:string

npx sequelize-cli model:generate --name memoryTag --attributes memoryId:integer,tagId:integer

npx dotenv sequelize-cli db:migrate

npx sequelize-cli seed:generate --name <descriptiveName>

npx sequelize-cli seed:generate --name DemoUserContent