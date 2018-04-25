import { connect } from 'react-redux'
import { importPackage, getCodeShare } from '../actions'
import App from '../components/App'

const mapStateToProps = ({ Editor, errMsg, codeShare }) => ({ 
  Editor, errMsg, 
  keyEditor: codeShare.key
})

const mapDispatchToProps = dispatch => ({
  importEditor: () => dispatch(importPackage('editor')),
  getCodeShare: (id) => dispatch(getCodeShare(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
