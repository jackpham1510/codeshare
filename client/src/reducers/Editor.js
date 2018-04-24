export default function (state = null, action){
  switch (action.type){
    case 'IMPORT_EDITOR_SUCCEED':
      return action.Editor
    default:
      return state
  }
}