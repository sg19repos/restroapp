import React from "react";
import LayoutContainer from "./Modules/Common/Pages/LayoutContainer";
import { BrowserRouter as Router } from "react-router-dom";
// import "./App.css";
import GlobalCSS from "../src/GlobalTheme";
import RoutesTemp from "./Routes";

function App() {
  // GlobalCSS();
  return (
    <Router>
      {/* {window.location.pathname !== "/" ? <Header /> : null} */}
      <GlobalCSS className={"mainBackground"}>
        <LayoutContainer>
          <RoutesTemp />
        </LayoutContainer>
      </GlobalCSS>
    </Router>
  );
}

export default App;
