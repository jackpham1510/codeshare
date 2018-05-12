const { randomBytes } = require('crypto')
const { writeFileSync, readFileSync } = require('fs')

module.exports = {
  generateID(){
    let id = '', exist
    
    do{
      exist = true
      id = randomBytes(10).toString('HEX').substr(0, 5)
  
      try{
        readFileSync(`${__dirname}/database/${id}.json`)
      } catch(e){
        exist = false
      }
    }while (exist)

    return id
  },
  saveCodeShareToDB(id, input, newID){
    if (newID){
      let list = JSON.parse(readFileSync(`${__dirname}/database/list.json`))
      list.push(id)
      writeFileSync(`${__dirname}/database/list.json`, JSON.stringify(list), 'utf8')
    }

    const d = new Date()
    const lastUpdate = d.toLocaleDateString() + ' ' + d.toLocaleTimeString()
    const codeShare = {id, ...input, lastUpdate}

    writeFileSync(`${__dirname}/database/${id}.json`, JSON.stringify(codeShare), 'utf8')
    return codeShare
  }
}