import * as React from "react";
import "./web.scss";
import "./mobile.scss";
import { useMediaQuery, Link } from "@material-ui/core";
import rightList1 from "../../../assets/home/tw2.svg";
import rightList2 from "../../../assets/home/tg2.svg";
import rightList3 from "../../../assets/home/git2.svg";
import rightList4 from "../../../assets/home/med2.svg";

export function Footer() {
  const leftList = [
    { name: "Home", url: "/" },
    { name: "CDoge", url: "/commingsoon" },
    { name: "CNFT", url: "/commingsoon" },
    { name: "CSwap", url: "/commingsoon" },
    { name: "Cerbs", url: "/commingsoon" },
  ];
  const rightList = [
    { id: 1, imgUrl: rightList1 },
    { id: 1, imgUrl: rightList2 },
    { id: 1, imgUrl: rightList3 },
    { id: 1, imgUrl: rightList4 },
  ];
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  return (
    <div className={isSmallScreen || isVerySmallScreen ? "footer_box mobile_footer_box" : "footer_box"}>
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
                );
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
                  );
                })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
