import { connect } from 'react-redux'
import { importPackage, getCodeShare, getListCodeShare } from '../actions'
import App from '../components/App'

const mapStateToProps = ({ Editor, List, errMsg, codeShare }) => ({ 
  Editor, List, errMsg, 
  keyEditor: codeShare.key
})

const mapDispatchToProps = dispatch => ({
  importEditor: () => dispatch(importPackage('editor')),
  getListCodeShare: () => dispatch(getListCodeShare(0)),
  getCodeShare: (id) => dispatch(getCodeShare(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
