import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";

import Navigation from "./components/Navigation";
import MemoryList from "./components/MemoryList";
import Sidebar from "./components/Sidebar";
import Homepage from "./components/HomePage";
import MemoryForm from "./components/MemoryForm";
import Splash from "./components/Splash"
import MemoryDisplay from "./components/MemoryDisplay"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {/* <Navigation isLoaded={isLoaded} /> */}
      {/* <MemoryList /> */}
      {/* <MemoryForm /> */}
      {isLoaded && (
        <Switch>
          <Route path="/" exact>
            <Splash />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/homepage">
            <Homepage isLoaded={isLoaded} />
          </Route>
          <Route path="/memoryForm">
            <MemoryForm />
          </Route>
          <Route path="/memories/:memoryId">
            <MemoryDisplay />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
