import React from "react";
import firebase from "firebase/app";
//this will give us access to firebase.auth() methods
import { withFirestore, isLoaded } from "react-redux-firebase";
import { useHistory } from "react-router";

function Signin() {
  const history = useHistory();

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function () {
        console.log("successfully signed up");
        //the .createUserWithEmailAndPassword method returns a promise, so we can attach then() to it
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function () {
        history.push("/");
        console.log("successfully signed in");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function doSignOut() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        history.push("/signin");
        console.log("successfully signed out");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  const auth = firebase.auth();
  if (!isLoaded(auth)) {
    return (
      <React.Fragment>
        <h1>Loading...</h1>
      </React.Fragment>
    );
  }
  if (isLoaded(auth) && auth.currentUser == null) {
    return (
      <React.Fragment>
        <h1>Sign Up</h1>
        <form onSubmit={doSignUp}>
          <input type="text" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>

        <h1>Sign In</h1>
        <form onSubmit={doSignIn}>
          <input type="text" name="signinEmail" placeholder="email" />
          <input type="password" name="signinPassword" placeholder="Password" />
          <button type="submit">Sign In</button>
        </form>
      </React.Fragment>
    );
  }

  if (isLoaded(auth) && auth.currentUser != null) {
    return (
      <React.Fragment>
        <h1>Sign Out</h1>
        <button onClick={doSignOut}>Sign Out</button>
      </React.Fragment>
    );
  }
}

export default withFirestore(Signin);
