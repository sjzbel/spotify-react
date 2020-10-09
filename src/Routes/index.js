import React from "react";
import { Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Faq from "../Pages/Faq";
import Route from "./Route";
import Playlist from "../Pages/Playlist";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/faq" component={Faq} />
      <Route path="/playlist" component={Playlist} />
    </Switch>
  );
}

export default Routes;
