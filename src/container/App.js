import ApiProgress from "../shared/ApiProgress";
import LoginPage from "../pages/LoginPage";
import LanguageSelector from "../components/LanguageSelector";
import React from "react";
import UserSignupPage from "../pages/UserSignupPage";


function App() {
  return (
    <div className="row">
      <div className="col">
          <LoginPage />
      </div>
      <div className="col">
          <UserSignupPage />
      </div>
      <LanguageSelector/>
    </div>
  );
}

export default App;
