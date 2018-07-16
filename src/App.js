import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./hoc/layout/Layout";
// import asyncComponent from './hoc/asyncComponent/asyncComponent';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

// const asyncAuth = asyncComponent(() => {
//   return import('./containers/Auth/Auth');
// });

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route path="/" exact component={() => <h1>Market component</h1>} />
        {/* <Route path="/auth" component={asyncAuth} /> */}
        <Route
          path="/liquidity"
          component={() => <h1>liquidity component</h1>}
        />
        {/* <Route path="/abc" render={()=><TestWidget num="2" someProp={100}/>}/> */}
        <Route component={() => <h1>404 - Page not found</h1>} />
      </Switch>
    );
    return (
      <div className="App">
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

export default App;
