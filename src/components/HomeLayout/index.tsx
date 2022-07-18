import * as React from "react";
import { Header } from "./header/header";
import { Footer } from "./footer";
import { Home } from "../../pages/Home";
import { CNFT } from "../../pages/CNFT";
import { CSwap } from "../../pages/CSwap";
import { CDog } from "../../pages/CDoge";
import "./style/web.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
export function HomeLayout() {
  return (
    <div className="homelayout_box">
      <Header />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/cswap" component={CSwap} />
        <Route path="/cnft" component={CNFT} />
        <Route path="/cdog" component={CDog} />
      </Router>
      <Footer />
    </div>
  );
}
