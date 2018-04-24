export default function (state = {}, action){
  switch (action.type){
    case 'SAVE_CODESHARE_FAILED':
      return { success: false, message: action.message}
    
    case 'SAVE_CODESHARE_SUCCEED':
      return { success: true, message: action.message}
    
    case 'IMPORT_PACKAGE_FAILED':
      return { success: false, message: action.message }

    case 'CLOSE_MODALBOX':
      return {}
    default:
      return state
  }
}