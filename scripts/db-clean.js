const models = require('../graphql/models');

(async () => {
  await models.Day.destroy({
    truncate: true,
  });
  await models.Night.destroy({
    truncate: true,
  });
})().then(() => console.log('Database Cleaned 🧹'));
