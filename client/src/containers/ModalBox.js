import { connect } from 'react-redux'
import { closeModalBox } from '../actions'
import ModalBox from '../components/ModalBox'

const mapStateToProps = ({ modalBox }) => modalBox

const mapDispatchToProps = dispatch => ({
  closeModalBox: () => dispatch(closeModalBox())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalBox)