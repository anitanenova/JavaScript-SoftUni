import React from "react";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import LoginPage from "./pages/login";
import Publications from "./pages/publications/index";
import RegisterPage from "./pages/register";
import ShareThoughtsPage from "./pages/share-thoughts/index";
const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Publications} />
        <Route path="/share" component={ShareThoughtsPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
