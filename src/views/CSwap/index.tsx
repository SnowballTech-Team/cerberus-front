import { useMediaQuery, Input, FormControl } from "@material-ui/core";
import { useState } from "react";
import BTCCoin from "../../assets/cdog/btc_bg.png";
import SettingIcon from "../../assets/cswap/Union.png";
import TransformIcon from "../../assets/cswap/transform.png";
import "./style/web.scss";
import "./style/mobile.scss";
export function CSwap() {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  const relsaseList = [
    { id: 1, name: "BTC", coin: BTCCoin },
    { id: 2, name: "ETH", coin: BTCCoin },
    { id: 3, name: "DOG", coin: BTCCoin },
  ];
  const [moveValue, setMoveValue] = useState("");
  const [releaseValue, setReleaseValue] = useState("");
  const moveValueChange = (event: any) => {
    setMoveValue(event.target.value);
  };
  const handleChangeReleaseValue = (e: any) => {
    setReleaseValue(e.target.value);
  };
  return (
    <div className={isSmallScreen || isVerySmallScreen ? "swap_box mobile_swap_box" : "swap_box"}>
      <div className="big_bg"></div>
      <div className="center_box">
        <div className="top_container">
          <p className="left_cont">CSwap</p>
          <img src={SettingIcon} />
        </div>
        <div className="input_container">
          <FormControl variant="standard" className="input_box">
            <Input placeholder="0.00" id="component-simple" value={releaseValue} onChange={handleChangeReleaseValue} />
          </FormControl>
          <FormControl variant="standard" className="input_box add_margin">
            <Input placeholder="0.00" id="component-simple" value={releaseValue} onChange={handleChangeReleaseValue} />
          </FormControl>
          <div className="arrow_container">
            <div className="arr_box">
              <img src={TransformIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="bottom_btn">
          <button>Connect Wallet</button>
        </div>
      </div>
    </div>
  );
}
