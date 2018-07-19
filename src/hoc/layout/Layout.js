import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import asyncComponent from "../asyncComponent/asyncComponent";
import Header from "../../components/common/header/Header";
import { setRowCount, fetchCurrencies } from "../../store/actions/actions";

const AsyncMarketOverview = asyncComponent(() => {
  return import("../../components/marketOverview/MarketOverview");
});

const AsyncScatterChart = asyncComponent(() => {
  return import("../../components/common/charts/ScatterPlotChart");
});

class Layout extends Component {
  componentDidMount() {
    this.props.fetchCurrencies();
  }

  /**
   * drop down change handler
   * call the setRowCount action to update the row count in state
   */
  dropdownChange = rowCount => {
    if (this.props.rowCount !== rowCount) {
      this.props.setRowCount(rowCount);
      this.props.fetchCurrencies(rowCount);
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
            <AsyncMarketOverview
              rowCount={this.props.rowCount}
              currencyData={this.props.currencyData}
            />
          )}
        />
        <Route
          path="/liquidity"
          render={() => (
            <AsyncScatterChart
              rowCount={this.props.rowCount}
              currencyData={this.props.currencyData}
            />
          )}
        />
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
  fetchCurrencies: PropTypes.func.isRequired
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
      setRowCount,
      fetchCurrencies
    },
    dispatch
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Layout)
);
