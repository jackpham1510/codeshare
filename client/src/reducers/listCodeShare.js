const initalState = {
  total: 0,
  list: []
}

export default function (state = {...initalState}, action){
  switch (action.type){
    case 'GET_LIST_CODESHARE_SUCCEED':
      return action.listCodeShare
    default:
      return state
  }
}