import * as React from "react"
import { Link } from "@material-ui/core"
import "./mobile.scss"
export function Menu() {
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
  return (
    <div>
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
  )
}
