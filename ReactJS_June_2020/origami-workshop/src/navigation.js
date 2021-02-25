import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import ErrorPage from "./pages/error";
import LoginPage from "./pages/login";
import ProfilePage from "./pages/profile";
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
        <Route path="/profile/:id" component={ProfilePage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};

const LazyPublications = React.lazy(() => import("./pages/publications"));
const LazyShareThoughtsPage = React.lazy(() =>
  import("./pages/share-thoughts")
);
const LazyRegisterPage = React.lazy(() => import("./pages/register"));
const LazyLoginPage = React.lazy(() => import("./pages/login"));
const LazyProfilePage = React.lazy(() => import("./pages/profile"));

const LazyNavigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Route path="/" exact component={LazyPublications} />
          <Route path="/share" component={LazyShareThoughtsPage} />
          <Route path="/register" component={LazyRegisterPage} />
          <Route path="/login" component={LazyLoginPage} />
          <Route path="/profile/:id" component={LazyProfilePage} />
          <Route component={ErrorPage} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
};

export default LazyNavigation;
