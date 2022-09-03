import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#313543";
      document.body.style.color = "#fff";
      showAlert("Dark Mode has been enabled!", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#333";
      showAlert("Light Mode has been enabled!", "Danger");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Text Utilities"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        ></Navbar>
        <Alert alert={alert}></Alert>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <TextForm
                heading="Format Your Texts"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
