import PropTypes from "prop-types";
import React from "react";

function Survey(props) {
  return (
    <React.Fragment>
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>
      <p>{props.questionOne}</p>
      <p>{props.questionTwo}</p>
      <p>{props.questionThree}</p>
      <hr />
    </React.Fragment>
  );
}

Survey.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  questionOne: PropTypes.string,
  questionTwo: PropTypes.string,
  questionThree: PropTypes.string,
};

export default Survey;
