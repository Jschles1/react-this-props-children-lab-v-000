// Code Invitation Component Here
import React from 'react';
// import PropTypes from 'prop-types';

class Invitation extends React.Component {
  render() {
    return (
      <div>
        <h1>You've been invited!</h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Invitation;