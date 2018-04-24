import { put, call } from 'redux-saga/effects'
import { importPackage } from '../actions'
import { modes } from '../others/Langues'

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
            id, tabSize, theme, mode, langue, content, lastUpdate
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
      yield put({ type: 'GET_CODESHARE_SUCCEED', codeShare: data.getCodeShare })
      const { langue, theme } = data.getCodeShare
      
      if (langue !== 'Plain Text'){
        const fileName = modes[langue].mode
        yield import(`codemirror/mode/${fileName}/${fileName}.js`)
      }
      
      if (theme !== 'default'){
        yield import(`codemirror/theme/${theme}.css`)
      }
      
      yield put(importPackage('EDITOR'))
    }

    yield put({ type: 'HIDE_LOADING' })
  } catch(e) {
    yield put({ type: 'HIDE_LOADING' })
    yield put({ type: 'GET_CODESHARE_FAILED', message: 'Something went wrong :(' })
  }
}