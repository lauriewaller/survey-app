import React from "react";
import Survey from "./Survey";
import PropTypes from "prop-types";
import { useSelector } from "react-redux"; //The useSelector() hook from react-redux allows us to extract data from a Redux store.
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase"; //The useFirestoreConnect() hook from react-redux-firebase allows us to listen for changes to Firestore without using an HOC in a class component. isLoaded() and isEmpty() from react-redux-firebase allow us to check if a collection has been retrieved from Firestore.
import { Link } from "react-router-dom";

function SurveyList(props) {
  useFirestoreConnect([{ collection: "surveys" }]);
  const surveys = useSelector((state) => state.firestore.ordered.surveys);

  if (isLoaded(surveys)) {
    return (
      <React.Fragment>
        <hr />
        {surveys.map((survey) => {
          return (
            <>
              <Survey
                whenSurveyClicked={props.onSurveySelection}
                title={survey.title}
                description={survey.description}
                questionOne={survey.questionOne}
                questionTwo={survey.questionTwo}
                questionThree={survey.questionThree}
                id={survey.id}
                key={survey.id}
              />
              <Link to={`/survey/${survey.id}`} id={survey.id}>
                View Survey
              </Link>
              <br></br>
            </>
          );
        })}
      </React.Fragment>
    );
    // If the surveys aren't loaded yet, our fragment will return a "Loading..." message.
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    );
  }
}

SurveyList.propTypes = {
  onSurveySelection: PropTypes.func,
};

export default SurveyList;
