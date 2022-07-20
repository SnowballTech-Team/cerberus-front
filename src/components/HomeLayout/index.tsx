import * as React from "react";
import { Header } from "./header/header";
import { Footer } from "./footer";
import { useState } from "react";
import { Menu } from "./menu";
import "./style/web.scss";
import "./style/mobile.scss";
import { useMediaQuery } from "@material-ui/core";
function HomeLayout(props: any) {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  const [menuStatus, setMenuStatus] = useState(false);
  const openMenu = () => {
    setMenuStatus(!menuStatus);
  };
  const closeMenu = () => {
    setMenuStatus(false);
  };
  return (
    <div className={isSmallScreen || isVerySmallScreen ? "homelayout_box mobile_homelayout_box" : "homelayout_box"}>
      <Header openMenu={openMenu} />
      <div className={menuStatus ? "shadow_box open_shadow_box" : "shadow_box"} onClick={closeMenu}>
        <div className={menuStatus ? "left_menu open_left_menu" : "left_menu"}>
          <Menu />
        </div>
      </div>
      {props.children}
      <Footer />
    </div>
  );
}

export default HomeLayout;
