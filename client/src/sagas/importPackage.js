import { put } from 'redux-saga/effects'
import { updateCodeShare } from '../actions'
import modes from '../others/Modes'

export default function* importPackage(action){
  try{
    yield put({ type: 'SHOW_LOADING'})
    
    const { theme, mode } = action.value || {}

    switch (action.kind){
      case 'editor': 
        const m = yield import('../containers/Editor');
        yield put({ type: 'IMPORT_EDITOR_SUCCEED', Editor: m.default }); break;

      case 'mode':
        const fileName = modes[mode]
        yield import(`brace/mode/${fileName}`)
        yield put(updateCodeShare({ mode })); break;

      case 'theme':
        yield import(`brace/theme/${theme}`)
        console.log(updateCodeShare({ theme }))
        yield put(updateCodeShare({ theme })); break;
        
      default: break
    }

    yield put({ type: 'HIDE_LOADING' })

  } catch(e) {
    console.log(e)
    yield put({ type: 'HIDE_LOADING' })
    yield put({ type: 'IMPORT_PACKAGE_FAILED', message: `Oop something went wrong :(` })
  }
}