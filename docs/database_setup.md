# Database setup guide

Guide: https://www.digitalocean.com/community/tutorials/how-to-set-up-a-graphql-server-in-node-js-with-apollo-server-and-sequelize

```bash
../node_modules/.bin/sequelize init
touch database.sqlite
../node_modules/.bin/sequelize model:create --name Day --attributes date:string,grateful1:text,grateful2:text,grateful3:text,great1:text,great2:text,great3:text,iam:text --force
../node_modules/.bin/sequelize model:create --name Night --attributes date:string,amazing1:text,amazing2:text,amazing3:text,dayBetter:text --force
../node_modules/.bin/sequelize db:migrate
```
