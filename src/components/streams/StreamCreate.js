import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  renderForm() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <div>
          <h3>Create a Stream</h3>
          <StreamForm onSubmit={this.onSubmit} />
        </div>
      );
    } else {
      return <h3>Please Sign In to Create a Stream</h3>;
    }
  }

  render() {
    return <div>{this.renderForm()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { createStream })(StreamCreate);
