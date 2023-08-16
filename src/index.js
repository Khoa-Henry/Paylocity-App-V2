import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PageRoute from "./app/PageRoute";
import DashBoard from "./pages/Dashboard";
import { Provider } from "react-redux";
import store from "./app/store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path={PageRoute.HomePage} element={<HomePage />} />
        <Route path={PageRoute.LoginPage} element={<LoginPage />} />
        <Route path={PageRoute.SignupPage} element={<SignupPage />} />
        <Route path={PageRoute.DashBoardPage} element={<DashBoard />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById("root")
);
