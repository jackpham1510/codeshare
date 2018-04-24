export default function (state = false, action){
  switch (action.type){
    case 'GET_CODESHARE_FAILED':
    case 'IMPORT_EDITOR_FAILED':
      return action.message
    default:
      return state
  }
}