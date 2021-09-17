import React from "react";
import PropTypes from "prop-types";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";

function SurveyDetail(props) {
  const surveyId = props.match.params.id;
  console.log("survey id = " + surveyId);
  useFirestoreConnect([{ collection: "tickets", doc: surveyId }]);
  const survey = useSelector(
    ({ firestore: { data } }) => data.surveys[surveyId]
  );

  console.log("survey = " + JSON.stringify(survey));

  return (
    <React.Fragment>
      <h1>{survey.title} Details</h1>
      <h2>Title: {survey.title}</h2>
      <h3>Description: {survey.description}</h3>
      <p>Question One: {survey.questionOne}</p>
      <p>Question Two: {survey.questionTwo}</p>
      <p>Question Three: {survey.questionThree}</p>
    </React.Fragment>
  );
}

export default SurveyDetail;

//.collection("surveys")
// .where("id", "==", "")

// useFirestoreConnect([{ collection: "surveys" }]);
//   const surveys = useSelector((state) => state.firestore.ordered.surveys);

// useFirestoreConnect([{ collection: "surveys" }]);
// // const survey = useSelector((state) =>
// //   state.firestore.ordered.surveys.get({
// //     collection: "surveys",
// //     doc: surveyId,
// //   })
// // );
// const survey = useSelector((state) =>
//   state.firestore.ordered.surveys.where("id", "==", { surveyId })
// );

// useFirestoreConnect(() => [{ collection: "surveys", doc: { surveyId } }]);
// const survey = useSelector(
//   ({ firestore: { data } }) => data.surveys[{ surveyId }]
// );
