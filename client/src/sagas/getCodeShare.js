import { put, call } from 'redux-saga/effects'
import { importPackage } from '../actions'
// eslint-disable-next-line
import brace from 'brace'
import modes from '../others/Modes'

export default function* getCodeShare(action){
  try{
    yield put({ type: 'SHOW_LOADING'})

    const res = yield call(fetch, '/graphql', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        query: `query GetCodeShare($id: ID){
          getCodeShare(id: $id){
            id, fontSize, tabSize, theme, mode, content, lastUpdate
          }
        }`,
        variables: {
          id: action.id
        }
      })
    })

    const { errors, data } = yield res.json()
  
    if (errors){
      yield put({ type: 'GET_CODESHARE_FAILED', message: errors[0].message })
    } else {
      const { mode, theme } = data.getCodeShare
      const fileName = modes[mode]

      yield import(`brace/theme/${theme}`)

      yield import(`brace/mode/${fileName}`)

      yield put(importPackage('editor'))
      yield put({ type: 'GET_CODESHARE_SUCCEED', codeShare: data.getCodeShare })
    }

    yield put({ type: 'HIDE_LOADING' })
  } catch(e) {
    console.log(e)
    yield put({ type: 'HIDE_LOADING' })
    yield put({ type: 'GET_CODESHARE_FAILED', message: 'Something went wrong :(' })
  }
}