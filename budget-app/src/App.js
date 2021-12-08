import React, { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Expenses from "./pages/expenses/expenses";
import Home from "./pages/home/home";
import Income from "./pages/income/income";
import Balance from "./pages/balance/balance";
import FourZeroFour from "./pages/fourZeroFour/fourZeroFour";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee);

function App() {
  const links = [
    {
      key: "1",
      path: "/",
      label: "Home",
      component: () => <Home />,
    },
    {
      key: "2",
      path: "/income",
      label: "Income",
      component: () => <Income />,
    },
    {
      key: "3",
      path: "/expenses",
      label: "Expenses",
      component: () => <Expenses />,
    },
    {
      key: "4",
      path: "/balance",
      label: "Balance",
      component: () => <Balance />,
    },
  ];

  const initObj = {
    daily: [0, 0, 0],
    monthly: [0, 0, 0],
    yearly: [0, 0, 0],
    name: ["", "", ""],
    total: {
      daily: 0,
      monthly: 0,
      yearly: 0,
    }
  };

  const incomeTotalObj = {
      totalDaily: 0,
      totalMonthly: 0,
      totalYearly: 0,
    
  }
  const expensesTotalObj = {
      totalDaily: 0,
      totalMonthly: 0,
      totalYearly: 0,
  }

  useEffect(() => {
    sessionStorage.clear()
    document.title = "Buget-app";
    sessionStorage.setItem("incomeactive", JSON.stringify(initObj));
    sessionStorage.setItem("incomepasive", JSON.stringify(initObj));
    sessionStorage.setItem("expensesvital", JSON.stringify(initObj));
    sessionStorage.setItem("expenseshouse", JSON.stringify(initObj));
    sessionStorage.setItem("expensestransport", JSON.stringify(initObj));
    sessionStorage.setItem("expensesinvestments", JSON.stringify(initObj));
    sessionStorage.setItem("expensescharity", JSON.stringify(initObj));
    sessionStorage.setItem("expensesother", JSON.stringify(initObj));
    sessionStorage.setItem("expenseswaisted", JSON.stringify(initObj));
    sessionStorage.setItem("incomeTotal", JSON.stringify(incomeTotalObj));
    sessionStorage.setItem("expensesTotal", JSON.stringify(expensesTotalObj));
  }, []);

  return (
    <div>
      <Router>
        <Header links={links} />
        <Switch>
          {links.map((link) => (
            <Route key={link.label} exact path={link.path} initObj={initObj}>
              {link.component}
            </Route>
          ))}
          <Route>
            <FourZeroFour />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;