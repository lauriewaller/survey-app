import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from "react-redux-firebase";
import { useHistory } from "react-router";

function NewSurveyForm(props) {
  const history = useHistory();

  const firestore = useFirestore();
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={addSurveyToFirestore}
        buttonText="Create"
      />
    </React.Fragment>
  );

  function addSurveyToFirestore(event) {
    event.preventDefault();
    // props.onNewSurveyCreation();
    // props.history.push("/surveycontrol");
    history.push("/");
    return firestore.collection("surveys").add({
      title: event.target.title.value,
      description: event.target.description.value,
      questionOne: event.target.questionOne.value,
      questionTwo: event.target.questionTwo.value,
      questionThree: event.target.questionThree.value,
    });
  }
}

NewSurveyForm.propTypes = {
  onNewSurveyCreation: PropTypes.func,
};

export default NewSurveyForm;
