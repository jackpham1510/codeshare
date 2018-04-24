export default function (state = false, action){
  switch (action.type){
    case 'TOGGLE_SETTING':
      return !state
    default:
      return state
  }
}