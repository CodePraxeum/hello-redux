import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Index from '../components/Index'
import * as IndexActions from '../actions/index'

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(IndexActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)