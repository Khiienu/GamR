// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";
import Photo from "./components/Photo"
import SingleImage from "./components/SingleImage";
import Upload from "./components/UploadImage";
import EditImage from "./components/EditImage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/photos">
            <Photo />
          </Route>
          <Route path="/photos/:id">
            <SingleImage />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route path="/edit">
            <EditImage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;