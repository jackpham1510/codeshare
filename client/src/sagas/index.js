import { takeLatest } from 'redux-saga/effects'
import importPackage from './importPackage'
import saveCodeShare from './saveCodeShare'
import getCodeShare from './getCodeShare'
import getListCodeShare from './getListCodeShare'

export default function* (){
  yield takeLatest('IMPORT_PACKAGE', importPackage)
  yield takeLatest('SAVE_CODESHARE', saveCodeShare)
  yield takeLatest('GET_CODESHARE', getCodeShare)
  yield takeLatest('GET_LIST_CODESHARE', getListCodeShare)
}