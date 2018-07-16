import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/common/header/Header";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  render() {
    return (
      <div>
        <Header />
        <h1> Dropdown </h1>
        <h1> Grid / Chart Component </h1>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     isAuthenticated: state.auth.token !== null
//   };
// };

export default connect(
  null,
  null
)(Layout);
