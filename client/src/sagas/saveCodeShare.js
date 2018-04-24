import { put, call } from 'redux-saga/effects'

export default function* saveCodeShare(action){
  try{
    yield put({ type: 'SHOW_LOADING'})

    const res = yield call(fetch, '/graphql', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        query: `mutation SaveCodeShare($id: ID, $input: CodeShareInput){
          saveCodeShare(id: $id, input: $input){
            id, lastUpdate
          }
        }`,
        variables: {
          id: action.id,
          input: action.input
        }
      })
    })

    yield put({ type: 'HIDE_LOADING' })

    const { errors, data } = yield res.json()
    
    if (errors){
      yield put({ type: 'SAVE_CODESHARE_FAILED', message: errors[0].message })
    } else {
      if (!action.id){
        const { id } = data.saveCodeShare
        window.history.replaceState({ id }, id, id)
      }
      yield put({ 
        type: 'SAVE_CODESHARE_SUCCEED',
        message: 'Save succeed! Now you can copy current link to share your code', 
      })
      yield put({
        type: 'NEW_UPDATE',
        lastUpdate: data.saveCodeShare.lastUpdate
      })
    }

  } catch(e) {
    yield put({ type: 'HIDE_LOADING' })
    yield put({ type: 'SAVE_CODESHARE_FAILED', message: `Can't save your CodeShare` })
  }
}