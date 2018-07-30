import React, { Component } from "react";
import ReactHighcharts from "react-highcharts";
import Highcharts from "highcharts"; //core
import HC_more from "highcharts/highcharts-more"; //module
HC_more(Highcharts); //init module

class ScatterPlotChart extends Component {
  /**
   * generate chart data from currencyData
   * @param {*} currencyData
   */
  generateChartData(currencyData) {
    const chartData = [];
    currencyData.map(data => {
      const usd = data.quotes && data.quotes.USD;
      let chartObj = {};
      //  convert the numbers into millions to 2 decimals
      let marketCap = usd && usd.market_cap && usd.market_cap / 1000000;
      if (marketCap) {
        chartObj.x = parseFloat(marketCap.toFixed(2));
      }
      let volume24 = usd && usd.volume_24h && usd.volume_24h / 1000000;
      if (volume24) {
        chartObj.y = parseFloat(volume24.toFixed(2));
      }
      chartObj.z = (usd && usd.percent_change_24h && usd.percent_change_24h*usd.percent_change_24h);
      chartObj.symbol = data.symbol;
      chartObj.name = data.name;
      chartData.push(chartObj);
    });
    return chartData;
  }

  /**
   * render method to render the chart
   */
  render() {
    let chartData = [];
    if (this.props.currencyData) {
      chartData = this.generateChartData(this.props.currencyData);
    }
    const config = {
      chart: {
        type: "bubble",
        plotBorderWidth: 1,
        zoomType: "xy",
        spacingLeft: 20,
        spacingRight: 20,
        height: 500
      },
      bubble: {
        minSize: 2,
        maxSize: 10
      },
      legend: {
        enabled: false
      },

      title: {
        text: "Crypto Currency Chart"
      },

      xAxis: {
        tickPixelInterval: 150,
        type: "logarithmic",
        gridLineWidth: 1,
        title: {
          text: "Market Cap",
          style: {
            color: "#6aa4d8",
            "font-size": 13
          }
        },
        labels: {
          format: "$ {value}M",
          align: "left"
        }
      },

      yAxis: {
        startOnTick: false,
        type: "logarithmic",
        endOnTick: false,
        title: {
          text: "Volume",
          style: {
            color: "#6aa4d8",
            "font-size": 13
          }
        },
        labels: {
          format: "$ {value}M"
        },
        maxPadding: 0.2
      },

      //  custom tooltip to show on hover of a point
      tooltip: {
        useHTML: true,
        headerFormat: "<table>",
        pointFormat:
          "<tr><th><p>{point.name}</p></th></tr>" +
          "<tr><th>Market Cap: </th><td>$ {point.x}M</td></tr>" +
          "<tr><th>Volume (24h): </th><td>$ {point.y}M</td></tr>" +
          "<tr><th>Pecentage: </th><td>{point.z} %</td></tr>",
        footerFormat: "</table>",
        followPointer: true
      },

      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: "{point.symbol}"
          }
        }
      },
      series: [
        {
          data: chartData
        }
      ],
      //  remove the highcharts.com link from the chart
      credits: {
        enabled: false
      }
    };
    return (
      <div className="chart-container">
        <ReactHighcharts config={config} highcharts={Highcharts} />
      </div>
    );
  }
}

export default ScatterPlotChart;
