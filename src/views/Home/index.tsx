import * as React from "react";
// import { Header } from "../../components/HomeLayout/header/header";
// import { Footer } from "../../components/HomeLayout/footer/index";
import "./style/web.scss";
import "./style/mobile.scss";
import { useMediaQuery } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import center_bg from "../../assets/home/center_bg.png";

import manifestoo from "../../assets/mobile/home/manifestoo.png";
import block_bg from "../../assets/home/block_bg.png";

import joinList1 from "../../assets/home/tw.png";
import joinList2 from "../../assets/home/tg.png";
import joinList3 from "../../assets/home/git.png";
import joinList4 from "../../assets/home/med.png";

import partnerList1 from "../../assets/home/doge.png";
import partnerList2 from "../../assets/home/Etherum.png";
import partnerList3 from "../../assets/home/images.png";
import partnerList4 from "../../assets/home/lbank-logo-freelogovectors.png";
import partnerList5 from "../../assets/home/bitcoin.png";
import partnerList6 from "../../assets/home/Binance-Logo.png";

// import partnerPhoneList1 from "../../assets/mobile/home/doge.png";
// import partnerPhoneList2 from "../../assets/mobile/home/Etherum.png";
// import partnerPhoneList3 from "../../assets/mobile/home/sharkteam.png";
// import partnerPhoneList4 from "../../assets/mobile/home/lbank-logo-freelogovectors.png";
// import partnerPhoneList5 from "../../assets/mobile/home/bitcoin.png";
// import partnerPhoneList6 from "../../assets/mobile/home/Binance-Logo.png";

export function Home() {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  const history = useHistory();
  const list = [
    {
      title: "CDoge",
      content:
        "CDoge  portal is the core extension of dogecoin to the Web69 dogeverse. It brings dogecoin greater liquidity to DEX, DeFi, NFT, GameFi, and infinite DApps.",
    },
    {
      title: "CNFT",
      content:
        "CNFT is a marketplace created on Cerberus to allow users to mint and exchange NFTs with cDOGE as a payment option. ",
    },
    {
      title: "CSwap",
      content: "CSwap is a DEX that allows shibes to start pairing their cDOGE with other tokens. ",
    },
    {
      title: "Cerbs",
      content:
        "Cerbs is a decentralized application platform, supporting Doge DApps built by communities, and partners.",
    },
  ];
  const joinList = [
    { name: "Twitter", imgurl: joinList1 },
    { name: "Telegram", imgurl: joinList2 },
    { name: "Github", imgurl: joinList3 },
    { name: "Discord", imgurl: joinList4 },
  ];
  const roadmapList = [
    {
      name: "Milestone 1:",
      list: [
        "Cerberus universe launch",
        "CebrsCore deployment and open source",
        "CDoge Portal launch for DOGE<>cDOGE",
        "Cerberus Proof of Asset",
        "Million Doge Club NFT",
        "Berus token and mining launch",
      ],
    },
    {
      name: "Milestone 2:",
      list: [
        "CDoge>>Berus vpool launch",
        "Referral system",
        "CCNFT partners and collaborations",
        "Berus burning mechanism",
        "CSwap launch",
        "CSwap LP incentives",
        "Cerbs ecosystem development",
      ],
    },
    {
      name: "Milestone 3:",
      list: [
        "Cerberus doge EVM chain launch",
        "Cerberus doge EVM chain testnet",
        "Cerberus doge EVM chain mainnet",
        "Cerberus doge EVM chain node",
        "Cerberus doge EVM chain DApp",
        "Cerberus global investments and partners",
        "Cerberus hackathon",
      ],
    },
    {
      name: "Milestone 4:",
      list: [
        "Cerberus doge multi-chain Web3 protocol",
        "Cerberus multi-chain CSwap",
        "Cerberus multi-chain DApp",
        "Invest in Elon Musk's Mars projects and support humanity's new civilizations",
      ],
    },
  ];
  const partnerList = [
    { id: 1, imgurl: partnerList1 },
    { id: 1, imgurl: partnerList2 },
    { id: 1, imgurl: partnerList3 },
    { id: 1, imgurl: partnerList4 },
    { id: 1, imgurl: partnerList5 },
    { id: 1, imgurl: partnerList6 },
  ];
  // const partnerPhoneList = [
  //   { id: 1, imgurl: partnerPhoneList1 },
  //   { id: 1, imgurl: partnerPhoneList2 },
  //   { id: 1, imgurl: partnerPhoneList3 },
  //   { id: 1, imgurl: partnerPhoneList4 },
  //   { id: 1, imgurl: partnerPhoneList5 },
  //   { id: 1, imgurl: partnerPhoneList6 },
  // ];
  const toWhitePaper = () => window.open("https://whitepaper.cerbs.org/");
  const toBerus = () => {
    history.push("/commingsoon");
  };
  return (
    <div className={isSmallScreen || isVerySmallScreen ? "home_box mobile_home_box" : "home_box"}>
      <div className="block1">
        <video
          src={isSmallScreen || isVerySmallScreen ? "/mobile.mp4" : "/block1.mp4"}
          muted
          autoPlay
          loop
          playsInline={true}
          controls={false}
          className="coin-vedio"
        />
        <div className="center_box">
          <div className="content_box">
            <img src={center_bg} alt="" />
            <p className="word_content">
              Cerberus is an open source dogecoin Web69&EVM infrastructure, designed for the multi-chain dogeverse
            </p>
            <div className="bottom_centent">
              <button className="start_box">Get Started</button>
              {/* {isSmallScreen || isVerySmallScreen ? null : <div className="more_box">Learn more</div>} */}
            </div>
          </div>
        </div>
      </div>
      <div className="block2">
        <div className="container_box">
          <img src={isSmallScreen || isVerySmallScreen ? manifestoo : block_bg} alt="" />
          <div className="posti_box">
            <p className="first_box add_mation">Save your lonely doge; let it join the fight for global adoption</p>
            <p className="second_box add_mation">Bridging and leading dogecoin to the multi-chain dogeverse</p>
            <p className="third_box add_mation">
              Paving the path for the next-generation dogecoin Web69 infrastructure
            </p>
            <p className="forth_box add_mation">1D=1D</p>
            <button className="white_box" onClick={toWhitePaper}>
              WHITEPAPER
            </button>
            <p className="ball1" />
            <p className="ball2" />
            <p className="ball3" />
            <p className="ball4" />
            <p className="ball5" />
          </div>
        </div>
      </div>
      <div className="block3">
        <div className="container">
          <ul className="first_nav">
            {list &&
              list.map((item, index) => {
                return (
                  <li key={index}>
                    <div className="top">
                      <p className="title">{item.title}</p>
                      <p className="content">{item.content}</p>
                    </div>
                    {index == 0 || index == 1 ? (
                      <div className="bottom">
                        <p>Get Started</p>
                        {/* <p className="arrow" /> */}
                      </div>
                    ) : null}
                  </li>
                );
              })}
          </ul>
          <div className="berus_box" onClick={toBerus}>
            <div className="left" />
            <div className="right">
              <div className="top_contan">
                <p className="title">Berus</p>
                <p className="content">
                  BERUS is the best friend of doge. Sir Berus helps Doge destroy the fiat order and become the people's
                  currency.
                </p>
                <div className="bottom_contan">
                  <p>Get Started</p>
                </div>
              </div>
            </div>
          </div>
          <div className="join_box">
            <p className="title">JOIN US</p>
            <ul>
              {joinList &&
                joinList.map((item, index) => {
                  return (
                    <li key={index}>
                      <img src={item.imgurl} alt="" />
                      <p>{item.name}</p>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className="bg_box" />
      </div>
      <div className="block4">
        <p className="title">Roadmap</p>
        <div className="content_box">
          <div className="container_box">
            <ul>
              {roadmapList &&
                roadmapList.map((item, index) => {
                  return (
                    <li key={index}>
                      <p className="title_name">{item.name}</p>
                      <div className="content_contain">
                        {item.list.map((ite, inx) => {
                          return (
                            <p className="content" key={inx + "_content"}>
                              {ite}
                            </p>
                          );
                        })}
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="block5">
        <p className="title">Partners</p>
        <div className="container_box">
          <ul>
            {partnerList &&
              partnerList.map((item, index) => {
                return (
                  <li key={index}>
                    <img src={item.imgurl} alt="" />
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="bottom_bg" />
      </div> */}
      {/* <Footer /> */}
      <div className="bottom_bg" />
    </div>
  );
}
