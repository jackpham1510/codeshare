import { connect } from 'react-redux'
import { getListCodeShare } from '../actions'
import List from '../components/List'

function paginate(total){
  if (total < 30) return null
  let n = Math.floor(total/30) + (total%30 !== 0)
  let a = []
  for (let i = 1; i <= n; i++) a.push(i)
  return a
}

const mapStateToProps = ({ listCodeShare, page }) => ({ 
  ...listCodeShare, page,
  pagination: paginate(listCodeShare.total) 
})

const mapDispatchToProps = dispatch => ({
  getListCodeShare: (page) => dispatch(getListCodeShare(page))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List)
