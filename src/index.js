import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import firebase from "./firebase";
import rootReducer from "./reducers/index";
import { createStore } from "redux"; //The entry point file is where Webpack accesses the top level component in our application. Since we want the store to be available everywhere we need it, it needs to be in index.js.
import { Provider } from "react-redux";
import "firebase/auth";

const store = createStore(rootReducer);

const rrfProps = {
  firebase,
  config: {
    userProfile: "users",
    useFirestoreForProfile: true,
  },
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
