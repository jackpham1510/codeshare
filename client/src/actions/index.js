export function toggleSetting(){
  return { type: 'TOGGLE_SETTING' }
}

export function newCodeShare(key){
  return { type: 'NEW_CODESHARE', key }
}

export function importPackage(kind, option){
  return { type: 'IMPORT_PACKAGE', kind, option}
}

export function saveCodeShare(id, input){
  return { type: 'SAVE_CODESHARE', id, input }
}

export function getCodeShare(id){
  return { type: 'GET_CODESHARE', id }
}

export function closeModalBox(){
  return { type: 'CLOSE_MODALBOX' }
}