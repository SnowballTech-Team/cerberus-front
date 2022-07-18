import * as React from "react";
import { Header } from "./header/header";
import { Footer } from "./footer";
import { Home } from "../../pages/Home";
import { CNFT } from "../../pages/CNFT";
import { CSwap } from "../../pages/CSwap";
import { CDog } from "../../pages/CDoge";
import "./style/web.scss";
import "./style/mobile.scss"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";
export function HomeLayout() {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
    const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  return (
    <div className={isSmallScreen || isVerySmallScreen ? "homelayout_box mobile_homelayout_box":"homelayout_box"}>
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
