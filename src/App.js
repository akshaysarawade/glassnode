import React, { Component } from "react";
import Layout from "./hoc/layout/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout></Layout>
      </div>
    );
  }
}

export default App;
