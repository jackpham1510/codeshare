const express = require('express')
const graphqlHTTP = require('express-graphql')
const fs = require('fs')
const path = require('path')

const app = express()

const schema = require('./schemaQL')
const { generateID, saveCodeShareToDB } = require('./myLib')

const root = {
  getCodeShare({ id }){
    try{      
      return JSON.parse(fs.readFileSync(`${__dirname}/database/${id}.json`))
    } catch(e){
      throw new Error('There is nothing to show :(')
    }
  },
  saveCodeShare({ id, input }){
    try{
      const _id = id || generateID()
      return saveCodeShareToDB(_id, input, id === undefined)
    } catch(e){
      throw new Error('Oop something went wrong in our server, please try again!')
    }
  }
}

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: false,
}));

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

const port = process.env.PORT || 5000;

app.listen(port)