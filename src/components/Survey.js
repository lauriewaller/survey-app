import PropTypes from "prop-types";
import React from "react";

function Survey(props) {
  return (
    <React.Fragment>
      <hr />
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>
      <p>{props.questionOne}</p>
      <p>{props.questionTwo}</p>
      <p>{props.questionThree}</p>
    </React.Fragment>
  );
}

Survey.propTypes = {
  survey: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  questionOne: PropTypes.string,
  questionTwo: PropTypes.string,
  questionThree: PropTypes.string,
};

export default Survey;
