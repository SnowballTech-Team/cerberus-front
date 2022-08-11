import { useMediaQuery, Container, Box, Typography, Input } from "@material-ui/core";
import "./style/web.scss";
import "./style/mobile.scss";
import { useState } from "react";
import centerBg from "../../assets/cnft/center.png";
import arrvials1 from "../../assets/cnft/arrvials1.png";
import arrvials2 from "../../assets/cnft/arrvials2.png";
import arrvials3 from "../../assets/cnft/arrvials3.png";
import arrvials4 from "../../assets/cnft/arrvials4.png";
export function CNFT() {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  const [address, setAddress] = useState<string>("");
  console.log(isSmallScreen, isVerySmallScreen, "isVerySmallScreen");
  const handleChangeNum = (e: any) => {
    setAddress(e.target.value);
  };
  const arrvialsList = [
    { title: "Million Doge Club", num: "Million Doge Club #0001", imgUrl: arrvials1 },
    { title: "Million Doge Club", num: "Million Doge Club #0002", imgUrl: arrvials2 },
    { title: "Million Doge Club", num: "Million Doge Club #0003", imgUrl: arrvials3 },
    { title: "Million Doge Club", num: "Million Doge Club #0004", imgUrl: arrvials4 },
  ];
  return (
    <div className={isSmallScreen || isVerySmallScreen ? "cnft_box mobile_cnft_box" : "cnft_box"}>
      <div className="block1">
        <video
          src={isSmallScreen || isVerySmallScreen ? "/cnft_mobile.mp4" : "/block1.mp4"}
          muted
          autoPlay
          loop
          playsInline={true}
          controls={false}
          className="coin-vedio"
          style={{ width: "100%", height: isSmallScreen || isVerySmallScreen ? "115%" : "100%", objectFit: "fill" }}
        />
        <Container
          style={{
            display: isSmallScreen || isVerySmallScreen ? "block" : "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: isSmallScreen || isVerySmallScreen ? "100%" : "1200px",
          }}
          className="center_cont"
        >
          <Box className="left_cont">
            <Typography variant="h3" className="top_tile">
              NFT Market
            </Typography>
            <Typography variant="h5" className="bottom_content">
              Cerberus NFT is an NFT web3 platform supporting CDoge
            </Typography>
          </Box>
          <Box className="right_cont">
            <Input
              id="address"
              placeholder="Search Address"
              className="address_input"
              value={address}
              onChange={e => handleChangeNum(e)}
            />
          </Box>
          {isSmallScreen || isVerySmallScreen ? (
            <Box className="top_cont new_topcont">
              <Typography variant="h5" className="left_c">
                Newest Collections
              </Typography>
              <Box className="right_c">View All &gt;</Box>
            </Box>
          ) : null}
        </Container>
      </div>
      <div className="block2">
        <Container
          style={{
            width: isSmallScreen || isVerySmallScreen ? "100%" : "1200px",
          }}
          className="center_cont"
        >
          {isSmallScreen || isVerySmallScreen ? null : (
            <Box className="top_cont">
              <Typography variant="h5" className="left_c">
                Newest Collections
              </Typography>
              <Box className="right_c">View All &gt;</Box>
            </Box>
          )}
          <Box className="bottom_cont">
            <img src={centerBg} />
            <div className="coin_bg"></div>
            <Box className="bottom_word">
              <Typography variant="h5" className="top_c">
                Million Doge Club
              </Typography>
              <Typography variant="h6" className="bottom_c">
                Volume
              </Typography>
            </Box>
          </Box>
        </Container>
      </div>
      <div className="block2 block3">
        <Container
          style={{
            width: isSmallScreen || isVerySmallScreen ? "100%" : "1200px",
          }}
          className="center_cont"
        >
          <Box className="top_cont">
            <Typography variant="h5" className="left_c">
              Newest Arrivals
            </Typography>
            <Box className="right_c">View All &gt;</Box>
          </Box>
          <Box className="arrvial_bottom_cont">
            <ul>
              {arrvialsList &&
                arrvialsList.map((item, index) => {
                  return (
                    <li key={index}>
                      <img src={item.imgUrl} />
                      <div className="bottom">
                        <Typography variant="h5" className="title">
                          {item.title}
                        </Typography>
                        <Typography variant="h5" className="num">
                          {item.num}
                        </Typography>
                        <Typography variant="h5" className="bottom_word">
                          Asking price
                        </Typography>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </Box>
        </Container>
      </div>
    </div>
  );
}
