import "./App.css";
import About from "./components/About";
import NavBar from "./components/Navbar";
import { TextForm } from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("dark");

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message,
      type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const modeToggle = () => {
    if (mode === "dark") {
      setmode("light");
      document.querySelector("body").style.backgroundColor = "white";
      showAlert("Light mode enabled!!!", "success");
    } else {
      setmode("dark");
      document.querySelector("body").style.backgroundColor = "#696da1";
      showAlert("Dark mode enabled!!!", "success");
    }
    console.log("toggle called");
  };

  return (
    <>
      <Router>
        <NavBar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          modeToggle={modeToggle}
        />
        <Alert alert={alert} />
        <div className="container my-3"></div>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/">
            <TextForm
              heading="Enter the text to analyze below"
              mode={mode}
              showAlert={showAlert}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
