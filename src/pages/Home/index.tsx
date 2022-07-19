import * as React from "react"
// import { Header } from "../../components/HomeLayout/header/header";
// import { Footer } from "../../components/HomeLayout/footer/index";
import "./style/web.scss"
import "./style/mobile.scss"
import { useMediaQuery } from "@material-ui/core"
export function Home() {
  const isSmallScreen = useMediaQuery("(max-width: 650px)")
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)")
  console.log(isSmallScreen, isVerySmallScreen, "isVerySmallScreen")
  const list = [
    {
      title: "CDoge",
      content:
        "CDoge (CDoge bridge) is the core extension of dogecoin to the Web69 dogeverse. It brings dogecoin greater liquidity to DEX, DeFi, NFT, GameFi, and infinite cross-chain DApps."
    },
    {
      title: "CNFT",
      content:
        "CNFT is a marketplace created on Cerberus to allow users to mint and exchange NFTs with CDOGE as a payment option."
    },
    {
      title: "CSwap",
      content:
        "CSwap is a DEX (Decentralized Exchange) that allows shibes to start pairing their CDOGE with other tokens."
    },
    {
      title: "Cerbs",
      content:
        "Cerbs is a decentralized application platform, supporting Doge DApps built by Cerberus, communities, and partners."
    }
  ]
  const joinList = [
    { name: "Twitter", imgurl: require("../../assets/home/tw.png") },
    { name: "Telegram", imgurl: require("../../assets/home/tg.png") },
    { name: "Github", imgurl: require("../../assets/home/git.png") },
    { name: "Discord", imgurl: require("../../assets/home/med.png") }
  ]
  const roadmapList = [
    {
      name: "Milestone 1:",
      list: [
        "Cerberus universe launch",
        "CDoge deployment and open source",
        "CBridge launch for Doge<>CDoge",
        "Cerberus Proof of Asset"
      ]
    },
    {
      name: "Milestone 2:",
      list: [
        "Berus deployment and open source",
        "CDoge>>Berus vpool launch on BSC",
        "CDoge>>Berus vpool launch on ETH",
        "CSwap launch",
        "Berus lockdrop system for CSwap LPs",
        "Berus burn mechanism for CBridge/CSwap fee"
      ]
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
        "Cerberus hackathon"
      ]
    },
    {
      name: "Milestone 4:",
      list: [
        "Cerberus doge multi-chain Web3 protocol",
        "Cerberus multi-chain CSwap",
        "Cerberus multi-chain DApp",
        "Invest in Elon Musk projects in 100 years"
      ]
    }
  ]
  const partnerList = [
    { id: 1, imgurl: require("../../assets/home/doge.png") },
    { id: 1, imgurl: require("../../assets/home/Etherum.png") },
    { id: 1, imgurl: require("../../assets/home/images.png") },
    { id: 1, imgurl: require("../../assets/home/lbank-logo-freelogovectors.png") },
    { id: 1, imgurl: require("../../assets/home/bitcoin.png") },
    { id: 1, imgurl: require("../../assets/home/Binance-Logo.png") }
  ]
  const partnerPhoneList = [
    { id: 1, imgurl: require("../../assets/mobile/home/doge.png") },
    { id: 1, imgurl: require("../../assets/mobile/home/Etherum.png") },
    { id: 1, imgurl: require("../../assets/mobile/home/sharkteam.png") },
    { id: 1, imgurl: require("../../assets/mobile/home/lbank-logo-freelogovectors.png") },
    { id: 1, imgurl: require("../../assets/mobile/home/bitcoin.png") },
    { id: 1, imgurl: require("../../assets/mobile/home/Binance-Logo.png") }
  ]
  const toWhitePaper = () => window.open("https://whitepaper.cerbs.org/")
  return (
    <div className={isSmallScreen || isVerySmallScreen ? "home_box mobile_home_box" : "home_box"}>
      <div className="block1">
        <video
          src={
            isSmallScreen || isVerySmallScreen
              ? require("../../assets/mobile/home/mobile.mp4")
              : require("../../assets/home/block1.mp4")
          }
          muted
          autoPlay
          loop
          playsInline={true}
          controls={false}
          className="coin-vedio"
        />
        <div className="center_box">
          <div className="content_box">
            <img src={require("../../assets/home/center_bg.png")} alt="" />
            <p className="word_content">
              Cerberus is an open source dogecoin Web69&EVM infrastructure, designed for the
              multi-chain dogeverse
            </p>
            <div className="bottom_centent">
              <button className="start_box">Get Started</button>
              {isSmallScreen || isVerySmallScreen ? null : (
                <div className="more_box">Learn more</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="block2">
        <div className="container_box">
          <img
            src={
              isSmallScreen || isVerySmallScreen
                ? require("../../assets/mobile/home/manifestoo.png")
                : require("../../assets/home/block_bg.png")
            }
            alt=""
          />
          {isSmallScreen || isVerySmallScreen ? (
            <div>
              <p className="first">
                Save your lonely doge; let it join the fight for global adoption
              </p>
              <p className="second">Bridging and leading dogecoin to the multi-chain dogeverse</p>
              <p className="third">
                Paving the path for the next-generation dogecoin Web69 infrastructure
              </p>
              <p className="forth">1D=1D</p>
              <div className="white_paper_mobile" onClick={toWhitePaper}>
                WHITEPAPER
              </div>
            </div>
          ) : (
            <div className="posti_box">
              <p className="first_box">
                Save your lonely doge; let it join the fight for global adoption
              </p>
              <p className="second_box">
                Bridging and leading dogecoin to the multi-chain dogeverse
              </p>
              <p className="third_box">
                Paving the path for the next-generation dogecoin Web69 infrastructure
              </p>
              <p className="forth_box">1D=1D</p>
              {isSmallScreen || isVerySmallScreen ? null : (
                <button className="white_box" onClick={toWhitePaper}>
                  WHITEPAPER
                </button>
              )}
              <p className="ball1" />
              <p className="ball2" />
              <p className="ball3" />
              <p className="ball4" />
              <p className="ball5" />
            </div>
          )}
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
                    <div className="bottom">
                      <p>Get Started</p>
                      <p className="arrow" />
                    </div>
                  </li>
                )
              })}
          </ul>
          <div className="berus_box">
            <div className="left" />
            <div className="right">
              <p className="title">Berus</p>
              <p className="content">
                BERUS is the best friend of doge. Sir Berus helps Doge destroy the fiat order and
                become the people's currency.
              </p>
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
                  )
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
                          )
                        })}
                      </div>
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      </div>
      <div className="block5">
        <p className="title">Partners</p>
        <div className="container_box">
          <ul>
            {isSmallScreen || isVerySmallScreen
              ? partnerPhoneList &&
                partnerPhoneList.map((item, index) => {
                  return (
                    <li key={index}>
                      <img src={item.imgurl} alt="" />
                    </li>
                  )
                })
              : partnerList &&
                partnerList.map((item, index) => {
                  return (
                    <li key={index}>
                      <img src={item.imgurl} alt="" />
                    </li>
                  )
                })}
          </ul>
        </div>
        <div className="bottom_bg" />
      </div>
      {/* <Footer /> */}
    </div>
  )
}
