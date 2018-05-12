import { combineReducers } from 'redux'
import setting from './setting'
import Editor from './Editor'
import loading from './loading'
import modalBox from './modalBox'
import codeShare from './codeShare'
import errMsg from './errMsg'
import listCodeShare from './listCodeShare'
import List from './List'
import page from './page'

export default combineReducers({
  setting,
  Editor,
  loading,
  modalBox,
  codeShare,
  errMsg,
  listCodeShare,
  List,
  page
})