export default function (state = 0, action){
  switch (action.type){
    case 'CHANGE_PAGE':
      return action.page
    default:
      return state
  }
}