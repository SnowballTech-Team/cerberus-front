import * as React from "react";
import "./web.scss";
export function Footer() {
  // const leftList = [
  //   { name: "Home", url: "" },
  //   { name: "CDoge", url: "" },
  //   { name: "CNFT", url: "" },
  //   { name: "CSwap", url: "" },
  //   { name: "Cerbs", url: "" },
  // ];
  const rightList = [
    { id: 1, imgUrl: require("../../../assets/home/tw2.svg") },
    { id: 1, imgUrl: require("../../../assets/home/tg2.svg") },
    { id: 1, imgUrl: require("../../../assets/home/git2.svg") },
    { id: 1, imgUrl: require("../../../assets/home/med2.svg") },
  ];
  return (
    <div className="footer_box">
      <div className="container">
        <div className="left">
          {/* <ul>
            {leftList &&
              leftList.map((item, index) => {
                return (
                  <li key={index}>
                    <p>{item.name}</p>
                  </li>
                );
              })}
          </ul> */}
          {/* <p>
            <span className="contact_title">Contact us:</span> xxx@cerberus.org
          </p> */}
        </div>
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
      </div>
    </div>
  );
}
