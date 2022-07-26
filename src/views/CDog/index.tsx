import { useMediaQuery, Select, MenuItem, Input, FormControl } from "@material-ui/core";
import { useState } from "react";
import BTCCoin from "../../assets/cdog/btc_bg.png";
import "./style/web.scss";
export function CDog() {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  console.log(isSmallScreen, isVerySmallScreen, "isVerySmallScreen");
  const [titleType, setTitleType] = useState("Release");
  const relsaseList = [
    { id: 1, name: "BTC", coin: BTCCoin },
    { id: 2, name: "ETH", coin: BTCCoin },
    { id: 3, name: "DOG", coin: BTCCoin },
  ];
  const changeTitle = (type: string) => {
    console.log(type, "123");
    setTitleType(type);
  };
  const [moveValue, setMoveValue] = useState("");
  const [releaseValue, setReleaseValue] = useState("");
  const moveValueChange = (event: any) => {
    setMoveValue(event.target.value);
  };
  const handleChangeReleaseValue = (e: any) => {
    setReleaseValue(e.target.value);
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
                <div className="from_box">
                  <p>Mint</p>
                  <Select
                    labelId="move-select"
                    value={moveValue}
                    onChange={moveValueChange}
                    disableUnderline
                    className="select_box"
                    name="move"
                  >
                    {relsaseList &&
                      relsaseList.map((item, index) => {
                        return (
                          <MenuItem value={item.id} key={index}>
                            <p className={"logo_box logo_box" + item.name}>
                              <img src={item.coin} alt="" />
                            </p>
                            <p className="name_box ">{item.name}</p>
                          </MenuItem>
                        );
                      })}
                  </Select>
                </div>
                <div className="from_box top_box">
                  <p>To</p>
                  <Select
                    labelId="move-select"
                    value={moveValue}
                    onChange={moveValueChange}
                    disableUnderline
                    className="select_box"
                    name="move"
                  >
                    {relsaseList &&
                      relsaseList.map((item, index) => {
                        return (
                          <MenuItem value={item.id} key={index}>
                            <p className={"logo_box logo_box" + item.name}>
                              <img src={item.coin} alt="" />
                            </p>
                            <p className="name_box ">{item.name}</p>
                          </MenuItem>
                        );
                      })}
                  </Select>
                </div>
              </div>
            </div>
          ) : (
            <div className="center_content">
              <div className="top_cont">
                <p className="cdoge_num">0 CDoge</p>
                <p className="dollar_num"> = $0.00</p>
              </div>
              <div className="bottom_cont">
                <div className="title_box">
                  <p className="left">Minimum amount:</p>
                  <p className="left">1 CDoge</p>
                </div>
                <div className="change_box">
                  <div className="from_box">
                    <p>Move</p>
                    <Select
                      labelId="move-select"
                      value={moveValue}
                      onChange={moveValueChange}
                      disableUnderline
                      className="select_box"
                      name="move"
                    >
                      {relsaseList &&
                        relsaseList.map((item, index) => {
                          return (
                            <MenuItem value={item.id} key={index}>
                              <p className={"logo_box logo_box" + item.name}>
                                <img src={item.coin} alt="" />
                              </p>
                              <p className="name_box ">{item.name}</p>
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </div>
                  <div className="from_box top_box">
                    <p>From</p>
                    <Select
                      labelId="move-select"
                      value={moveValue}
                      onChange={moveValueChange}
                      disableUnderline
                      className="select_box"
                      name="move"
                    >
                      {relsaseList &&
                        relsaseList.map((item, index) => {
                          return (
                            <MenuItem value={item.id} key={index}>
                              <p className={"logo_box logo_box" + item.name}>
                                <img src={item.coin} alt="" />
                              </p>
                              <p className="name_box ">{item.name}</p>
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </div>
                  <div className="from_box adress_box">
                    <p className="title">Releasing to</p>
                    <FormControl variant="standard" className="input_box">
                      <Input
                        placeholder="Enter a Destination Address"
                        id="component-simple"
                        value={releaseValue}
                        onChange={handleChangeReleaseValue}
                      />
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="bottom_btn">
          <button>Connect Wallet</button>
        </div>
      </div>
    </div>
  );
}
