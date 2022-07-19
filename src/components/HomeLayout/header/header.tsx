import * as React from "react"
import { useState } from "react"
import "./web.scss"
import "./mobile.scss"
import { useMediaQuery, Link } from "@material-ui/core"
export function Header() {
  const isSmallScreen = useMediaQuery("(max-width: 650px)")
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)")
  // const topList = [
  //   { name: "Home", url: "/" },
  //   { name: "CDoge", url: "/cdog" },
  //   { name: "CNFT", url: "/cnft" },
  //   { name: "CSwap", url: "/cswap" },
  //   { name: "Cerbs", url: "/cerbs" }
  // ]
  const mobileTopList = [
    { name: "Home", url: "/" },
    { name: "CDoge", url: "/cdog" },
    { name: "CNFT", url: "/cnft" },
    { name: "CSwap", url: "/cswap" },
    { name: "Cerbs", url: "/cerbs" },
    { name: "Referral", url: "/cerbs" }
  ]
  const rightList = [
    { id: 1, imgUrl: require("../../../assets/home/tw2.svg") },
    { id: 1, imgUrl: require("../../../assets/home/tg2.svg") },
    { id: 1, imgUrl: require("../../../assets/home/git2.svg") },
    { id: 1, imgUrl: require("../../../assets/home/med2.svg") }
  ]
  const [menuStatus, setMenuStatus] = useState(false)
  // const openMenu = () => setMenuStatus(!menuStatus)
  return (
    <div
      className={isSmallScreen || isVerySmallScreen ? "header_box mobile_header_box" : "header_box"}
    >
      {isSmallScreen || isVerySmallScreen ? (
        <div className="mobile_header_container">
          {/* <div className="left">
            <img
              src={require("../../../assets/mobile/header/menu_box.png")}
              alt=""
              onClick={openMenu}
            />
          </div> */}
          <div className="center_box">
            <img src={require("../../../assets/header/logo.svg")} alt="" />
          </div>
          {/* <div className="right_box">
            <button className="Wallet_box">Wallet</button>
          </div> */}
          <div
            className={menuStatus ? "shadow_box open_shadow_box" : "shadow_box"}
            onClick={() => setMenuStatus(false)}
          >
            <div className={menuStatus ? "left_menu open_left_menu" : "left_menu"}>
              <ul>
                {mobileTopList &&
                  mobileTopList.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link href={item.url} underline="none">
                          {item.name}
                        </Link>
                      </li>
                    )
                  })}
              </ul>
              <ul className="link_nav">
                {rightList &&
                  rightList.map((item, index) => {
                    return (
                      <li key={index}>
                        <img src={item.imgUrl} alt="" />
                      </li>
                    )
                  })}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="container_box">
          <div className="left">
            <img src={require("../../../assets/header/logo.svg")} alt="" />
          </div>
          {/* <div className="right">
            <ul>
              {topList &&
                topList.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link href={item.url} underline="none">
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
            </ul>
            <div className="btn_box">
              <button className="Referral_box">Referral</button>
              <button className="Wallet_box">Wallet</button>
            </div>
          </div> */}
        </div>
      )}
    </div>
  )
}
