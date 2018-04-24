import { put } from 'redux-saga/effects'
import { modes } from '../others/Langues'

export default function* importPackage(action){
  try{
    yield put({ type: 'SHOW_LOADING'})
    
    const { theme, langue, mode, codeMirror } = action.option || {}

    switch (action.kind){
      case 'EDITOR': 
        const m = yield import('../containers/Editor');
        yield put({ type: 'IMPORT_EDITOR_SUCCEED', Editor: m.default }); break;

      case 'MODE':
        if (langue !== 'Plain Text'){
          const fileName = modes[langue].mode
          yield import(`codemirror/mode/${fileName}/${fileName}.js`)  
        } 
        codeMirror.setOption('mode', mode); break

      case 'THEME':
        if (theme !== 'default') {
          yield import(`codemirror/theme/${theme}.css`)
        } 
        codeMirror.setOption('theme', theme); break

      default: break
    }

    yield put({ type: 'HIDE_LOADING' })

  } catch(e) {
    yield put({ type: 'HIDE_LOADING' })
    yield put({ type: 'IMPORT_PACKAGE_FAILED', message: `Oop something went wrong :(` })
  }
}