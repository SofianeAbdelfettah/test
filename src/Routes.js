import React from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

import ProjectList from "./Components/ProjectList";
import UpdateProject from "./Components/UpdateProject";

export const createRoutes = () => (
         <Router history={createBrowserHistory()}>
           <h4>kek</h4>
           <Switch>
             <Route exact path="/">
               <ProjectList />
             </Route>
             <Route path="/update">
               <UpdateProject />
             </Route>
           </Switch>
         </Router>
       );

export default createRoutes;
