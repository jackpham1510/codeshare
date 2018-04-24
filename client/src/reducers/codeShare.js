export default function (state = {}, action){
  switch (action.type){
    case 'GET_CODESHARE_SUCCEED':
      return Object.assign({}, action.codeShare, {
        key: (new Date()).getTime()
      }) 
    
    case 'NEW_UPDATE':
      return Object.assign({}, state, {
        lastUpdate: action.lastUpdate
      })
    case 'NEW_CODESHARE':
      return ({
        key: action.key
      })
    
    default:
      return state
  }
}