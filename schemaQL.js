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

  type ListCodeShare{
    total: Int,
    list: [CodeShare]
  }

  type Query{
    getCodeShare(id: ID): CodeShare,
    getListCodeShare(page: Int): ListCodeShare
  }

  type Mutation{
    saveCodeShare(id: ID, input: CodeShareInput): CodeShare
  }
`)