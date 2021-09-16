import React from "react";
//import Header from "./Header";
import NewSurveyForm from "./NewSurveyForm";
import { BrowserRouter, Link, Route, Router, Switch } from "react-router-dom";
import SurveyControl from "./SurveyControl";
import Signin from "./Signin";
// import Survey from "./Survey";
import SurveyDetail from "./SurveyDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* {/* <Header /> */}
        {/* <Switch> */}
        <Route path="/signin" component={Signin}></Route>
        <Route path="/newsurvey" component={NewSurveyForm}></Route>
        {/* <Route path="/survey/:id" component={Survey}></Route> */}
        <Route path="/surveydetail/:id" component={SurveyDetail}></Route>
        <Route path="/" component={SurveyControl} exact></Route>

        {/* </Switch> */}
      </BrowserRouter>
    </>
  );
}

export default App;
