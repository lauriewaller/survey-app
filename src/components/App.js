import React from "react";
//import Header from "./Header";
import NewSurveyForm from "./NewSurveyForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SurveyControl from "./SurveyControl";
import Signin from "./Signin";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <SurveyControl></SurveyControl>

        {/* <Header /> */}
        <Route path="/signin" component={Signin}></Route>
        <Route path="/new-survey" component={NewSurveyForm}></Route>
      </Router>
    </>
  );
}

export default App;
