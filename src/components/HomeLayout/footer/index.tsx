import * as React from "react"
import "./web.scss"
import "./mobile.scss"
import { useMediaQuery, Link } from "@material-ui/core"
export function Footer() {
  const leftList = [
    { name: "Home", url: "/" },
    { name: "CDoge", url: "/cdog" },
    { name: "CNFT", url: "/cnft" },
    { name: "CSwap", url: "/cswap" },
    { name: "Cerbs", url: "/cerbs" }
  ]
  const rightList = [
    { id: 1, imgUrl: require("../../../assets/home/tw2.svg") },
    { id: 1, imgUrl: require("../../../assets/home/tg2.svg") },
    { id: 1, imgUrl: require("../../../assets/home/git2.svg") },
    { id: 1, imgUrl: require("../../../assets/home/med2.svg") }
  ]
  const isSmallScreen = useMediaQuery("(max-width: 650px)")
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)")
  return (
    <div
      className={isSmallScreen || isVerySmallScreen ? "footer_box mobile_footer_box" : "footer_box"}
    >
      <div className="container">
        <div className="left">
          <ul>
            {leftList &&
              leftList.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.url} underline="none">
                      {item.name}
                    </Link>
                  </li>
                )
              })}
          </ul>
          <p>
            <span className="contact_title">Contact us:</span> xxx@cerberus.org
          </p>
        </div>
        {isSmallScreen || isVerySmallScreen ? null : (
          <div className="right">
            <ul>
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
        )}
      </div>
    </div>
  )
}
