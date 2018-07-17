import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import asyncComponent from "../asyncComponent/asyncComponent";
import Header from "../../components/common/header/Header";
import { setRowCount } from "../../store/actions/actions";

const AsyncMarketOverview = asyncComponent(() => {
  return import("../../components/marketOverview/MarketOverview");
});

class Layout extends Component {
  /**
   * drop down change handler
   * call the setRowCount action to update the row count in state
   */
  dropdownChange = rowCount => {
    if (this.props.rowCount !== rowCount) {
      this.props.setRowCount(rowCount);
    }
  };

  /**
   * render the component jsx
   */
  render() {
    const routes = (
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <AsyncMarketOverview currencyData={this.props.currencyData} />
          )}
        />
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
      <div>
        <Header dropdownChange={this.dropdownChange} />
        <main>{routes}</main>
      </div>
    );
  }
}

/**
 * Proptypes for the component
 */
Layout.propTypes = {
  rowCount: PropTypes.number.isRequired,
  setRowCount: PropTypes.func.isRequired,
  currencyData: PropTypes.shape({})
};

/**
 * State props tp be accessed in the component
 * @param {*} state
 */
const mapStateToProps = state => {
  return {
    rowCount: state.currencyReducer.rowCount,
    currencyData: state.currencyReducer.currencyData
  };
};

/**
 * bind the action creators, to be dispatched from the component
 */
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setRowCount
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
