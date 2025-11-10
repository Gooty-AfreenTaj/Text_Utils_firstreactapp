import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./Mycomponents/Navbar";
import Alert from "./Mycomponents/Alert";
import Textform from "./Mycomponents/Textform";
// import About from "./Mycomponents/About";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";




function App() {
  const [mode, setMode] = useState("light");
  const [button, setButton] = useState("secondary");
  const [isChecked, setIsChecked] = useState(false);
  const [colors, setColors] = useState("white");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
    setAlert(null);
  }, 1000);
  };
 

  const toggleMode = () => {
    setIsChecked(!isChecked);
    if (mode === "light") {
      setMode("dark");
      setButton("light");
      document.body.style.backgroundColor = "#38383bff";
      document.body.style.color = "white";
      setColors("#57575aff");
      showAlert('Dark Mode Enabled','Success')
    }
    else if (mode === "primary") {
      setMode("dark");
      setButton("light");
      document.body.style.backgroundColor = "#38383bff";
      document.body.style.color = "white";
      setColors("#57575aff");
      showAlert('Dark Mode Enabled','Success')
    } else if (mode === "purple") {
      setMode("dark");
      setButton("light");
      document.body.style.backgroundColor = "#38383bff";
      document.body.style.color = "white";
      showAlert('Dark Mode Enabled','Success')
      setColors("#57575aff");
    } else if (mode === "success") {
      setMode("dark");
      setButton("light");
      document.body.style.backgroundColor = "#38383bff";
      document.body.style.color = "white";
      setColors("#57575aff");
      showAlert('Dark Mode Enabled','Success')
    } else {
      setMode("light");
      setButton("secondary");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setColors("white");
      showAlert(`light Mode is Enabled` ,'Success')

    }
  };
  const greenMode = () => {
    setIsChecked(false);
    if (mode === "light") {
      setMode("success");
      setButton("success");
      document.body.style.backgroundColor = "#93ee93ff";
      document.body.style.color = "black";
      setColors("#198754");
      showAlert(`Green Mode is Enabled` ,'Success')
      
    } else if (mode === "dark") {
      setMode("success");
      setButton("success");
      document.body.style.backgroundColor = "#93ee93";
      document.body.style.color = "black";
      setColors("#198754");
      showAlert(`Green Mode is Enabled` ,'Success')

    } else if (mode === "primary") {
      setMode("success");
      setButton("success");
      document.body.style.backgroundColor = "#93ee93";
      document.body.style.color = "black";
      setColors("#198754");
      showAlert(`Green Mode is Enabled` ,'Success')

    } else if (mode === "purple") {
      setMode("success");
      setButton("success");
      document.body.style.backgroundColor = "#93ee93";
      document.body.style.color = "black";
      setColors("#198754");
      showAlert(`Green Mode is Enabled` ,'Success')

    } else {
      setMode("light");
      setButton("secondary");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setColors("white");
      showAlert(`Light Mode is Enabled` ,'Success')

    }
  };
  const blueMode = () => {
    setIsChecked(false);
    if (mode === "light") {
      setMode("primary");
      setButton("primary");
      document.body.style.backgroundColor = "#9399eeff";
      document.body.style.color = "black";
      setColors("#646bd4ff");
      showAlert(`Primary Mode is Enabled` ,'Success')

    } else if (mode === "dark") {
      setMode("primary");
      setButton("primary");
      document.body.style.backgroundColor = "#9399eeff";
      document.body.style.color = "black";
      setColors("#646bd4ff");
      showAlert(`Primary Mode is Enabled` ,'Success')

    } else if (mode === "success") {
      setMode("primary");
      setButton("primary");
      document.body.style.backgroundColor = "#9399eeff";
      document.body.style.color = "black";
      setColors("#646bd4ff");
      showAlert(`Primary Mode is Enabled` ,'Success')

    } else if (mode === "purple") {
      setMode("primary");
      setButton("primary");
      document.body.style.backgroundColor = "#9399eeff";
      document.body.style.color = "black";
      setColors("#646bd4ff");
      showAlert(`Primary Mode is Enabled` ,'Success')

    } else {
      setMode("light");
      setButton("secondary");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setColors("white");
      showAlert(`Light Mode is Enabled` ,'Success')

    }
  };
  const purpleMode = () => {
    setIsChecked(false);
    if (mode === "light") {
      setMode("purple");
      setButton("purple");
      document.body.style.backgroundColor = "#da83f5ff";
      document.body.style.color = "black";
      setColors("#c745eeff");
      showAlert(`Purple Mode is Enabled` ,'Success')

    } else if (mode === "dark") {
      setMode("purple");
      setButton("purple");
      document.body.style.backgroundColor = "#da83f5ff";
      document.body.style.color = "black";
      setColors("#c745eeff");
      showAlert(`Purple Mode is Enabled` ,'Success')

    } else if (mode === "success") {
      setMode("purple");
      setButton("purple");
      document.body.style.backgroundColor = "#da83f5ff";
      document.body.style.color = "black";
      setColors("#c745eeff");
      showAlert(`Purple Mode is Enabled` ,'Success')

    } else if (mode === "primary") {
      setMode("purple");
      setButton("purple");
      document.body.style.backgroundColor = "#da83f5ff";
      document.body.style.color = "black";
      setColors("#c745eeff");
      showAlert(`Purple Mode is Enabled` ,'Success')

    } else {
      setMode("light");
      setButton("secondary");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setColors("white");
      showAlert(`Light Mode is Enabled` ,'Success')

    }
  };
 
 return (
  <>
    {/* <Router  basename="/Text_Utils_firstreactapp"> */}
      <Navbar
        title="TextSwag"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
        purpleMode={purpleMode}
        greenMode={greenMode}
        blueMode={blueMode}
        button={button}
        checked={isChecked}
      />
      <Alert mode={mode} alert={alert} />

      <div className="container">
        {/* <Routes>
          <Route
            path="/about"
            element={<About mode={mode} colors={colors} />}
          />
          <Route
            path="/"
            element={ */}
              <Textform
                heading="Enter Your Text to analyze"
                mode={mode}
                button={button}
              />
        {/*    }
          /> */}
         {/* </Routes> */}
      </div>
    {/* </Router> */}
  </>
);

}

export default App;