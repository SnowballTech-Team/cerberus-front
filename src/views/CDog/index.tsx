import { useMediaQuery } from "@material-ui/core";
import { useState } from "react";
import "./style/web.scss";
export function CDog() {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  console.log(isSmallScreen, isVerySmallScreen, "isVerySmallScreen");
  const [titleType, setTitleType] = useState("Mint");
  const changeTitle = (type: string) => {
    console.log(type, "123");
    setTitleType(type);
  };
  return (
    <div className="dog_box">
      <div className="big_bg"></div>
      <div className={titleType == "Mint" ? "center_box" : "center_box release_center_box"}>
        <div className={titleType == "Mint" ? "content_box" : "content_box right_content_box"}>
          <div className="top">
            <button className="title" onClick={() => changeTitle("Mint")}>
              Mint
            </button>
            <button className="title" onClick={() => changeTitle("Release")}>
              Release
            </button>
          </div>
          {titleType == "Mint" ? (
            <div className="center_content">
              <p className="top_text">Select an asset and destination chain, to begin or resume a mint.</p>
              <div className="change_box">
                <div className="from_box"></div>
                <div className="from_box top_box"></div>
              </div>
            </div>
          ) : null}
        </div>
        <div className="bottom_btn">
          <button>Connect Wallet</button>
        </div>
      </div>
    </div>
  );
}
