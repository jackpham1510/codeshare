const { buildSchema } = require('graphql')

module.exports = buildSchema(`
  input CodeShareInput{
    tabSize: Int
    theme: String
    mode: String
    langue: String
    content: String
    lastUpdate: String
  }

  type CodeShare{
    id: ID!
    tabSize: Int
    theme: String
    mode: String
    langue: String
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