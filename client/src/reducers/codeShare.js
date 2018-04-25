const initCodeShare = {
  fontSize: 13,
  tabSize: 2,
  theme: 'monokai',
  mode: 'Plain Text',
  content: 'Type some awesome code here!',
  lastUpdate: ''
}

export default function (state = {
  ...initCodeShare,
  key: (new Date()).getTime()
}, action){
  switch (action.type){
    case 'GET_CODESHARE_SUCCEED':
      return Object.assign({}, action.codeShare, {
        key: (new Date()).getTime()
      }) 

    case 'NEW_CODESHARE':
      return ({
        ...initCodeShare,
        key: action.key
      })

    case 'UPDATE_CODESHARE':
      return Object.assign({}, state, action.value)
    
    case 'NEW_SAVE':
      return Object.assign({}, state, {
        lastUpdate: action.lastUpdate
      })

    default:
      return state
  }
}