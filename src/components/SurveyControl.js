import React from "react";
import PropTypes from "prop-types";
import * as a from "./../actions";
import { useSelector } from "react-redux";
import {
  useFirestoreConnect,
  withFirestore,
  isLoaded,
} from "react-redux-firebase";
import { Link } from "react-router-dom";
import Survey from "./Survey";

function SurveyControl() {
  // const auth = this.props.firebase.auth();

  // if (!isLoaded(auth)) {

  useFirestoreConnect([{ collection: "surveys" }]);
  const surveys = useSelector((state) => state.firestore.ordered.surveys);
  let sampleKey = 0;
  if (isLoaded(surveys)) {
    return (
      <React.Fragment>
        <Link to="/newsurvey">Create Survey</Link>
        <hr />
        {surveys.map((survey) => {
          return (
            <div key={survey.id}>
              <Survey
                // whenSurveyClicked={props.onSurveySelection}
                title={survey.title}
                description={survey.description}
                questionOne={survey.questionOne}
                questionTwo={survey.questionTwo}
                questionThree={survey.questionThree}
                id={survey.id}
                // key={survey.id}
              />
              <Link to={`/surveydetail/${survey.id}`}>View Survey</Link>
            </div>
          );
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    );
  }
}

//     return (
//       <React.Fragment>
//         <SurveyList> </SurveyList>
//         <Link to="/newsurvey">Create New Survey</Link>
//       </React.Fragment>
//     );
//   }
// }

export default withFirestore(SurveyControl);

// if (isLoaded(auth) && auth.currentUser == null) {
//   return (
//     <React.Fragment>

//       <Link to="/signin">Sign Up / Sign In / Sign Out</Link>
//     </React.Fragment>
//   );
// }

//     if (isLoaded(auth) && auth.current != null) {
//       return (
//         <React.Fragment>
//           <SurveyList> </SurveyList>
//           <Link to="/newsurvey">Create New Survey</Link>
//           <Link to="/signin">Sign Up / Sign In / Sign Out</Link>
//         </React.Fragment>
//       );
//     }
//   }
