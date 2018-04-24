import { connect } from 'react-redux'
import Loading from '../components/Loading'

const mapStateToProps = ({ loading }) => ({ loading })

export default connect(
  mapStateToProps,
)(Loading)