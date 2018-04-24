import { combineReducers } from 'redux'
import setting from './setting'
import Editor from './Editor'
import loading from './loading'
import modalBox from './modalBox'
import codeShare from './codeShare'
import errMsg from './errMsg'

export default combineReducers({
  setting,
  Editor,
  loading,
  modalBox,
  codeShare,
  errMsg
})