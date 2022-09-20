import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = (event) => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };

  const selColor = (event) => {
    console.log(event.target.value);
    document.body.style.backgroundColor = event.target.value;
  };
  return (
    <>
      <Router>
        <Navbar
          title="hola"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
          selColor={selColor}
        />

        <Alert message="Success" alert={alert} />

        <div className="container my-5">
          <Routes>
            <Route path="/" element={
                <TextForm heading="Enter Your Text" mode={mode} showAlert={showAlert}
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
