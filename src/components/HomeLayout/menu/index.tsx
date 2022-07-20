import * as React from "react";
import { Link } from "@material-ui/core";
import "./mobile.scss";

import rightList1 from "../../../assets/home/tw2.svg";
import rightList2 from "../../../assets/home/tg2.svg";
import rightList3 from "../../../assets/home/git2.svg";
import rightList4 from "../../../assets/home/med2.svg";

export function Menu() {
  const mobileTopList = [
    { name: "Home", url: "/" },
    { name: "CDoge", url: "/cdog" },
    { name: "CNFT", url: "/cnft" },
    { name: "CSwap", url: "/cswap" },
    { name: "Cerbs", url: "/cerbs" },
    { name: "Referral", url: "/cerbs" },
  ];
  const rightList = [
    { id: 1, imgUrl: rightList1 },
    { id: 1, imgUrl: rightList2 },
    { id: 1, imgUrl: rightList3 },
    { id: 1, imgUrl: rightList4 },
  ];
  return (
    <div>
      <ul>
        {mobileTopList &&
          mobileTopList.map((item, index: any) => {
            return (
              <li key={index}>
                <Link href={item.url} underline="none">
                  {item.name}
                </Link>
              </li>
            );
          })}
      </ul>
      <ul className="link_nav">
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
  );
}
