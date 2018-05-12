export function toggleSetting(){
  return { type: 'TOGGLE_SETTING' }
}

export function newCodeShare(key){
  return { type: 'NEW_CODESHARE', key }
}

export function importPackage(kind, value){
  return { type: 'IMPORT_PACKAGE', kind, value}
}

export function updateCodeShare(value){
  return { type: 'UPDATE_CODESHARE', value }
}

export function saveCodeShare(id, input){
  return { type: 'SAVE_CODESHARE', id, input }
}

export function getCodeShare(id){
  return { type: 'GET_CODESHARE', id }
}

export function getListCodeShare(page){
  return { type: 'GET_LIST_CODESHARE', page }
}

export function closeModalBox(){
  return { type: 'CLOSE_MODALBOX' }
}

export function changePage(page){
  return { type: 'CHANGE_PAGE', page }
}