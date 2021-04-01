import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import MyEditor from "./components/MyEditor";
import MemoryList from "./components/MemoryList";
import Sidebar from "./components/Sidebar";
import Homepage from "./components/HomePage";
import MemoryForm from "./components/MemoryForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {/* <MemoryList /> */}
      <MemoryForm />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/recordMemory">
            <MyEditor />
          </Route>
          <Route path="/homepage">
            <Homepage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
