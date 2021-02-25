import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Publications from "./pages/publications/index";
import ShareThoughtsPage from "./pages/share-thoughts/index";
const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Publications} />
        <Route path="/share" component={ShareThoughtsPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
