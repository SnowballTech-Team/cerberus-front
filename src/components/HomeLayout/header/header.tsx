import * as React from "react";
import { useState } from "react";
import "./web.scss";
import "./mobile.scss";
import { useMediaQuery, Link, Select, MenuItem, FormControl } from "@material-ui/core";
import menu_box from "../../../assets/mobile/header/menu_box.png";
import logo from "../../../assets/header/logo.svg";
import { useHistory, useLocation } from "react-router-dom";
export function Header({ openMenu }: { openMenu: () => void }) {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  const history = useHistory();
  const location = useLocation();
  const [selectValue, setValue] = useState<string>("/cnft");
  console.log(location, "123");
  const topList = [
    { name: "Home", url: "/home" },
    { name: "CDoge", url: "/cdog" },
    { name: "CNFT", url: "/cnft" },
    // { name: "CSwap", url: "/commingsoon" },
    // { name: "Cerbs", url: "/commingsoon" },
  ];

  //   const [menuStatus, setMenuStatus] = useState(false)
  //   const openMenu = () => {
  //     setMenuStatus(!menuStatus)
  //   }
  const toHome = () => {
    history.push("/home");
  };
  const handleChange = (e: any) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className={isSmallScreen || isVerySmallScreen ? "header_box mobile_header_box" : "header_box"}>
      {isSmallScreen || isVerySmallScreen ? (
        <div className="mobile_header_container">
          <div className="left">
            <img src={menu_box} alt="" onClick={openMenu} />
          </div>
          <div className="center_box">
            <img src={logo} alt="" />
          </div>
          <div className="right_box">
            <button className="Wallet_box">Wallet</button>
          </div>
        </div>
      ) : (
        <div className="container_box">
          <div className="left">
            <img src={logo} alt="" onClick={toHome} />
          </div>
          <div className="right">
            <ul>
              {topList &&
                topList.map((item, index) => {
                  return (
                    <li key={index} className={location.pathname === item.url ? "actived_link" : ""}>
                      {item.url == "/cnft" ? (
                        <Link href={item.url} underline="none">
                          <FormControl variant="outlined" color="primary" size="small" className="select_box">
                            <Select value={selectValue} onChange={handleChange} displayEmpty>
                              <MenuItem value={"/cnft"}>CNFT</MenuItem>
                              <MenuItem value={"/nftmarket"}>Nft market</MenuItem>
                              <MenuItem value={"/milliongogeclub"}>Million Doge Club</MenuItem>
                            </Select>
                          </FormControl>
                        </Link>
                      ) : (
                        <Link href={item.url} underline="none">
                          {item.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
            </ul>
            <div className="btn_box">
              <button className="Referral_box">Referral</button>
              <button className="Wallet_box">Wallet</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
