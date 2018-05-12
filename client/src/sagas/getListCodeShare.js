import { put, call } from 'redux-saga/effects'
import { importPackage, changePage } from '../actions'

export default function* getListCodeShare(action){
  try{
    yield put({ type: 'SHOW_LOADING'})

    const res = yield call(fetch, '/graphql', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        query: `query GetListCodeShare($page: Int){
          getListCodeShare(page: $page){
            total,
            list{
              id, mode, content, lastUpdate
            }
          }
        }`,
        variables: {
          page: action.page
        }
      })
    })
    
    const { errors, data } = yield res.json()

    if (errors){
      yield put({ type: 'GET_LIST_CODESHARE_FAILED', message: errors[0].message })
    } else {
      yield put({ type: 'GET_LIST_CODESHARE_SUCCEED', listCodeShare: data.getListCodeShare })
      yield put(changePage(action.page))
      yield put(importPackage('list'))
    }

    yield put({ type: 'HIDE_LOADING' })
  } catch(e) {
    console.log(e)
    yield put({ type: 'HIDE_LOADING' })
    yield put({ type: 'GET_LIST_CODESHARE_FAILED', message: 'Something went wrong :(' })
  }
}