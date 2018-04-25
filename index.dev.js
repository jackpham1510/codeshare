const express = require('express')
const graphqlHTTP = require('express-graphql')
const fs = require('fs')

const cors = require('cors') // only for dev mode

const app = express()

const schema = require('./schemaQL')
const { generateID, saveCodeShareToDB } = require('./myLib')

const root = {
  getCodeShare({ id }){
    try{      
      return JSON.parse(fs.readFileSync(`${__dirname}/database/${id}.json`))
    } catch(e){
      throw new Error('There is nothing to show!')
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

// only for dev mode
app.use('/graphql', cors(), graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.get('/hello', function (req, res){
  return res.end('hello')
})

const port = process.env.PORT || 5000;

app.listen(port, function (){
  console.log('Server is listening on port ' + port)
})