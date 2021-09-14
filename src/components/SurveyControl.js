import React from "react";
import NewSurveyForm from "./NewSurveyForm";
import SurveyList from "./SurveyList";
import PropTypes from "prop-types";
import * as a from "./../actions";
import { withFirestore, isLoaded } from "react-redux-firebase";
import { Link } from "react-router-dom";

class SurveyControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSurvey: null,
    };
  }

  render() {
    const auth = this.props.firebase.auth();

    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      );
    }

    if (isLoaded(auth) && auth.currentUser == null) {
      return (
        <React.Fragment>
          <SurveyList> </SurveyList>
        </React.Fragment>
      );
    }

    if (isLoaded(auth) && auth.current != null) {
      return (
        <React.Fragment>
          <SurveyList> </SurveyList>
          <Link to="/new-survey">Create New Survey</Link>
          <Link to="/signin">Sign Up / Sign In / Sign Out</Link>
        </React.Fragment>
      );
    }
  }
}

export default withFirestore(SurveyControl);
