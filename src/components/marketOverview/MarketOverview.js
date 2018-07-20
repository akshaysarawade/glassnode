import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class MarketOverview extends Component {
  render() {
    return (
      <div className="table-container">
        <ReactTable
          data={this.props.currencyData}
          noDataText="No records found!"
          columns={[
            {
              Header: "Rank",
              accessor: "rank",
              id: "rank"
            },
            {
              Header: "Name",
              accessor: "name",
              id: "name"
            },
            {
              Header: "Price",
              accessor: d => d.quotes.USD.price,
              id: "price",
              Cell: row => (
                `$ ${row.value}`
              )
            },
            {
              Header: "Price Change (24h)",
              accessor: d => d.quotes.USD.percent_change_24h,
              id: "percent_change_24h",
              Cell: row => (
                `${row.value} %`
              )
            },
            {
              Header: "Market Cap",
              accessor: d => d.quotes.USD.market_cap,
              id: "market_cap",
              Cell: row => (
                `$ ${row.value}`
              )
            },
            {
              Header: "Volume Change (24h)",
              accessor: d => d.quotes.USD.volume_24h,
              id: "volume_24h",
              Cell: row => (
                `$ ${row.value}`
              )
            }
          ]}
          defaultSorted={[
            {
              id: "rank",
              desc: false
            }
          ]}
          pageSize={this.props.rowCount}
          showPagination={false}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default MarketOverview;
