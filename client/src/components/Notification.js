import React from "react";
import { connect } from "react-redux";
import { Message } from "semantic-ui-react";
const Notification = props => {
  if (props.notification.length === 0) {
    return null;
  }

  return <Message>{props.notification.message}</Message>;
};
const mapStateToProps = state => {
  return {
    notification: state.notification
  };
};

export default connect(mapStateToProps)(Notification);
