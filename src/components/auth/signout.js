import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUserOut } from '../../actions';

class Signout extends React.Component {
    componentDidMount() {
        this.props.signUserOut()
    }
  render() {
    return (
      <div className='welcome logout' style={{'height': '92vh'}}>
        <div className='content-container'>
          <div className='title'>
            See You Soon!
          </div>
          <div className='subtitle'>
            Come Back Soon.
          </div>
          <div  className='button-container'>
          <div>
            <Link style={{'cursor': 'pointer'}} className='btn btn-primary btn-block btn-lg' to='signin'>Sign Back In Now</Link>
            <Link style={{'cursor': 'pointer'}} className='btn btn-light btn-block btn-lg' to='company/contacts'>Any Feedback?</Link>
          </div>
          </div>
        </div>
      </div>)
  }
}

const mapStateToProps = ({ auth }) => ({
  isLoggedin: auth.authenticated
});

export default connect(mapStateToProps, {signUserOut})(Signout);

