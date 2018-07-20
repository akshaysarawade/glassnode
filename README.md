--------------------
Steps to run the app
--------------------
1. Go to the vrypto-currency-app folder and hit "npm install"
2. After step 1 is complete, hit "npm start"
3. Open a tab in your browser and hit "http://localhost:3000"

Problem Statement:
https://github.com/glassnode/code-challenges/blob/master/frontend-engineer-challenge.md


--------------------
Solution:
--------------------
1. The app has 3 routes: "/", "/liquidity" and the third one is for 404 - Page Not Found.
The "/" route will navigate the user to the "Markets Overview" page which is the home page and will show you the grid with crypto currency data.
The "/liquidity" route will navigate the user to the "Scatter Plot" chart.
Any other route will navigate the user to the "404 - Page Not Found" page.
2. The common components have been store under /components/common. 
The "asyncComponent" has been for lazy loading.
The "layout" component contains all the routes. It acts as a container to the "header" component and "marketOverview/chart" component.
3. The "header" component consists of links to "Market Overview", "Liquidity" and a dropdown to change the numbers of records to be shown in the grid or to be used for the chart.
4. Whenever the user navigates to "Liquidity" from "Market Overview", data is "reused" from the state and not fetched again. Same is the case when user navigates to "Market Overview" from "Liquidity".
5. The app has 1 action, 1 reducer and 1 saga file.

--------------------
Libraries used:
--------------------
1. react with redux to implement the app. Redux is used in most react projects and is gels well with react.
2. redux-saga and axios to do the api calls.
3. highcharts and react-highcharts to implement the Scatter plot chart as it is responsive and also the requirement was to show bubbles with different sizes depending on the percentage change. This was possible with highcharts.
4. bootstrap to used predefined components like Navbar which is again responsive.
5. react-table to implement the grid in the app as it is lightweight and I had used it before.
6. react-router-dom to do the routing.
7. finally, github repo for the codebase.

--------------------
TODOs:
--------------------
1. Add a loader/spinner when the api is called.
2. Add a proper 404 page with some image.
3. Add sass to the app.
4. Write reusable components for grid and charts.
5. Convert MarketOverview.js and ScatterPlotChart.js to functional components.
6. Add a constant.js file to hold all the constants used in the app.
