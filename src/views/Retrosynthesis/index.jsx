import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from './actions';
import Header from '@/components/Header';

class Retrosynthesis extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <h1>retrosynthesis</h1>
      </div>
    );
  }
}

export default Retrosynthesis;

// export default connect(
//   (state) => ({ Retrosynthesis: state.Retrosynthesis}),
//   (dispatch) => ({
//     ...bindActionCreators(actions, dispatch),
//   })
// )(Retrosynthesis);
