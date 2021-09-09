import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" title="title" placeholder="Survey Title" />
        <input
          type="text"
          name="description"
          placeholder="Survey Description"
        />
        <input
          type="text"
          name="questionOne"
          placeholder="Type question one here."
        />
        <input
          type="text"
          name="questionTwo"
          placeholder="Type question two here."
        />
        <input
          type="text"
          name="questionThree"
          placeholder="Type question three here."
        />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
