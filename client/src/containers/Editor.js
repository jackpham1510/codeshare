import { connect } from 'react-redux'
import { toggleSetting, importPackage, saveCodeShare, newCodeShare } from '../actions'
import { modes } from '../others/Langues'

import Editor from '../components/Editor'

const mapStateToProps = ({ setting, codeShare }) => ({ setting, codeShare })

const mapDispatchToProps = dispatch => ({
  toggleSetting: () => dispatch(toggleSetting()),

  newCodeShare: () => {
    const key = (new Date()).getTime()
    window.history.replaceState({ key }, key, '/')
    dispatch(newCodeShare(key))
  },

  saveCodeShare: (id, input) => dispatch(saveCodeShare(id, input)),

  handleSetting: (codeMirror, type, value) => {
    switch (type){
      case 'theme':
        dispatch(importPackage('THEME', {
          codeMirror,
          theme: value
        })); break;

      case 'mode':
        dispatch(importPackage('MODE', {
          codeMirror,
          langue: value,
          mode: modes[value].mime || modes[value].mode
        })); break;
      
      case 'tabsize':
        codeMirror.setOption('tabSize', value); break;

      default: break;
    }
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Editor)