export default function (state = null, action){
  switch (action.type){
    case 'IMPORT_LIST_SUCCEED':
      return action.List
    default:
      return state
  }
}