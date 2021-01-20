import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import ListData from "../pages/ListData";
const AppRouter = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={ListData} />
        </Switch>
    </Router>
  );
};

export default AppRouter;
