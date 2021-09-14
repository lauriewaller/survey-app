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

  //<Link to="/newSurveyForm">

  render() {
    return (
      <React.Fragment>
        <Link to="/new-survey">Create New Survey</Link>
      </React.Fragment>
    );
  }
}

export default SurveyControl;
