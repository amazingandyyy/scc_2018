import React from 'react';
import { connect } from 'react-redux';

class Welcome extends React.Component {
  render() {
    return (
      <div className='welcome'>
        Hello
      </div>)
  }
}

const mapStateToProps = ({ auth }) => ({
  isLoggedin: auth.authenticated
});

export default connect(mapStateToProps, null)(Welcome);