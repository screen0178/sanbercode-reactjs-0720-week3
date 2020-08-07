import React from "react";
import { Switch, Route } from "react-router";

import HargaBuah from './tugas11/tugas11';
import Timer from './tugas12/tugas12'
import HargaBuah13 from './tugas13/tugas13';
import HargaBuah14 from './tugas14/tugas14';
import Buah from './tugas15/Buah';

const Routes = () => {

  return (
    <Switch>
      <Route exact path="/tugas11">
        <HargaBuah />
      </Route>
      <Route path="/tugas12">
        <Timer />
      </Route>
      <Route exact path="/tugas13">
        <HargaBuah13 />
      </Route>
      <Route exact path="/tugas14">
        <HargaBuah14 />
      </Route>
      <Route exact path="/tugas15">
        <Buah />
      </Route>
    </Switch>
  );
};

export default Routes;