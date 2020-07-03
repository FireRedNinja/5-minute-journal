const {gql} = require('apollo-server-express');

const typeDefs = gql`
  type Day {
    id: Int!
    date: String
    grateful1: String
    grateful2: String
    grateful3: String
    great1: String
    great2: String
    great3: String
    iam: String
  }

  type Night {
    id: Int!
    date: String
    amazing1: String
    amazing2: String
    amazing3: String
    dayBetter: String
  }

  type Query {
    day(date: String!): Day
    night(date: String!): Night
    allDays: [Day]!
    allNights: [Night]!
  }

  type Mutation {
    saveDay(
      date: String!
      grateful1: String
      grateful2: String
      grateful3: String
      great1: String
      great2: String
      great3: String
      iam: String
    ): Day
    saveNight(
      date: String!
      amazing1: String
      amazing2: String
      amazing3: String
      dayBetter: String
    ): Night
    deleteAll: String!
  }
`;

module.exports = {
  typeDefs,
};
