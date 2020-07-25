const moment = require('moment');

const resolvers = {
  Query: {
    day: async (parent, { date }, { models }, info) => {
      const record = await models.Day.findOne({
        where: { date: `${moment(date).format('YYYY-MM-DD')}` },
      });
      return record;
    },
    night: async (parent, { date }, { models }, info) => {
      const record = await models.Night.findOne({
        where: { date: `${moment(date).format('YYYY-MM-DD')}` },
      });
      return record;
    },
    allDays: (parent, args, { models }, info) => {
      return models.Day.findAll();
    },
    allNights: (parent, args, { models }, info) => {
      return models.Night.findAll();
    },
  },

  Mutation: {
    saveDay: async (parent, args, { models }, info) => {
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

      const record = await models.Day.findOne({
        where: {
          date: args.date,
        },
      });
      if (record) {
        return record.update(day);
      }
      return models.Day.create(day);
    },
    saveNight: async (parent, args, { models }, info) => {
      const night = {
        date: args.date,
        amazing1: args.amazing1,
        amazing2: args.amazing2,
        amazing3: args.amazing3,
        dayBetter: args.dayBetter,
      };

      const record = await models.Day.findOne({
        where: {
          date: args.date,
        },
      });
      if (record) {
        return record.update(night);
      }
      return models.Night.create(night);
    },
  },
};

module.exports = resolvers;
