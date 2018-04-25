const { buildSchema } = require('graphql')

module.exports = buildSchema(`
  input CodeShareInput{
    fontSize: Int
    tabSize: Int
    theme: String
    mode: String
    content: String
    lastUpdate: String
  }

  type CodeShare{
    id: ID!
    fontSize: Int
    tabSize: Int
    theme: String
    mode: String
    content: String
    lastUpdate: String
  }

  type Query{
    getCodeShare(id: ID): CodeShare
  }

  type Mutation{
    saveCodeShare(id: ID, input: CodeShareInput): CodeShare
  }
`)