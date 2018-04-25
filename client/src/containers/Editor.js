import { connect } from 'react-redux'
import { toggleSetting, importPackage, saveCodeShare, newCodeShare, updateCodeShare } from '../actions'

import Editor from '../components/Editor'

const mapStateToProps = ({ setting, codeShare }) => ({ setting, codeShare })

const mapDispatchToProps = dispatch => ({
  toggleSetting: () => dispatch(toggleSetting()),

  newCodeShare: () => {
    const key = (new Date()).getTime()
    window.history.replaceState({ key }, key, '/')
    dispatch(newCodeShare(key))
  },

  updateCodeShare: e => {
    const type = e.target.id
    let value = e.target.value

    switch (type){
      case 'theme':
      case 'mode':
        dispatch(importPackage(type, {
          [type]: value
        })); break;
      
      
      case 'tabSize':
      case 'fontSize':
        value = Number(value)
      // eslint-disable-next-line
      case 'content':
        dispatch(updateCodeShare({
          [type]: value
        })); break;

      default: break;
    }
  },

  saveCodeShare: (codeShare) => {
    let id = undefined
    
    if (window.location.pathname !== '/'){
      id = window.location.pathname.slice(1)
    }

    dispatch(saveCodeShare(id, {
      fontSize: codeShare.fontSize,
      tabSize: codeShare.tabSize,
      theme: codeShare.theme,
      mode: codeShare.mode,
      content: codeShare.content,
      lastUpdate: codeShare.lastUpdate
    }))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Editor)