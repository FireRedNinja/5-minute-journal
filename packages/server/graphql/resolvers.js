const moment = require('moment');

const resolvers = {
  Query: {
    day: async (parent, {date}, {models}, info) => {
      const records = await models.Day.findOrCreate({
        where: {date: `${moment(date).format('YYYY-MM-DD')}`},
      });
      return records[0];
    },
    night: async (parent, {date}, {models}, info) => {
      const records = await models.Night.findOrCreate({
        where: {date: `${moment(date).format('YYYY-MM-DD')}`},
      });
      return records[0];
    },
    allDays: (parent, args, {models}, info) => {
      return models.Day.findAll();
    },
    allNights: (parent, args, {models}, info) => {
      return models.Night.findAll();
    },
  },

  Mutation: {
    saveDay: async (parent, args, {models}, info) => {
      const day = {
        date: args.date,
        grateful1: args.grateful1,
        grateful2: args.grateful2,
        grateful3: args.grateful3,
        great1: args.great1,
        great2: args.great2,
        great3: args.great3,
        iam: args.iam,
      };
      return models.Day.create(day);
    },
    saveNight: async (parent, args, {models}, info) => {
      const night = {
        date: args.date,
        amazing1: args.amazing1,
        amazing2: args.amazing2,
        amazing3: args.amazing3,
        dayBetter: args.dayBetter,
      };
      return models.Night.create(night);
    },
    deleteAll: async (parent, args, {models}, info) => {
      await models.Day.destroy({
        truncate: true,
      });
      await models.Night.destroy({
        truncate: true,
      });
      return 'Done';
    },
  },
};

module.exports = {resolvers};
