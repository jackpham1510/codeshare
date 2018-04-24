import { takeLatest } from 'redux-saga/effects'
import importPackage from './importPackage'
import saveCodeShare from './saveCodeShare'
import getCodeShare from './getCodeShare'

export default function* (){
  yield takeLatest('IMPORT_PACKAGE', importPackage)
  yield takeLatest('SAVE_CODESHARE', saveCodeShare)
  yield takeLatest('GET_CODESHARE', getCodeShare)
}