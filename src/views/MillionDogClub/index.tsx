import { useMediaQuery, Container, Typography, Box } from "@material-ui/core";
import "./style/web.scss";
import "./style/mobile.scss";
import millionLogo from "../../assets/cnft/million_logo.png";
import rank1 from "../../assets/cnft/rank1.png";
import rank2 from "../../assets/cnft/rank2.png";
import rank3 from "../../assets/cnft/rank3.png";
import rank4 from "../../assets/cnft/rank4.png";
import rank5 from "../../assets/cnft/rank5.png";
import rank6 from "../../assets/cnft/rank6.png";
import rank7 from "../../assets/cnft/rank7.png";
import rank8 from "../../assets/cnft/rank8.png";
export function MillionDogClub() {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  console.log(isSmallScreen, isVerySmallScreen, "isVerySmallScreen");
  const rankList = [
    { name: "Doge Soldier", codge: "0-1,000", berus: "1k-10k", imgUrl: rank1 },
    { name: "Doge General", codge: "1,001-2,000", berus: "10k-20k", imgUrl: rank2 },
    { name: "Doge Chieftain", codge: "2,001-10,000", berus: "20k-100k", imgUrl: rank3 },
    { name: "Doge King", codge: "10,001-50,000", berus: "100k-500k", imgUrl: rank4 },
    { name: "Doge Astronaut", codge: "0-1,000", berus: "1k-10k", imgUrl: rank5 },
    { name: "Doge Alien", codge: "1,001-2,000", berus: "10k-20k", imgUrl: rank6 },
    { name: "Doge Martian", codge: "2,001-10,000", berus: "20k-100k", imgUrl: rank7 },
    { name: "Doge Collector", codge: "10,001-50,000", berus: "100k-500k", imgUrl: rank8 },
  ];
  return (
    <div className={isSmallScreen || isVerySmallScreen ? "million_box mobile_million_box" : "million_box"}>
      <div className="big_bg"></div>
      <Container
        style={{
          width: isSmallScreen || isVerySmallScreen ? "100%" : "1200px",
        }}
        className="center_cont"
      >
        <div className="top_content">
          <img src={millionLogo} />
          <Typography variant="h5" className="accord">
            Million Doge Club (MDC) is the official NFT collection released by Cerberus. MDC is not only a delicate NFT
            fine art but a certificate of being an honorable shareholder of Cerberus as well. Whoever owns MDC owns
            certain shares of Cerberus.
          </Typography>
        </div>
        <div className="content_box">
          <Typography variant="h3" className="title">
            Honor & Ranking
          </Typography>
          <ul>
            {rankList &&
              rankList.map((item, index) => {
                return (
                  <li key={index}>
                    <div className="left">
                      <img src={item.imgUrl} alt="" />
                    </div>
                    <div className="right">
                      <Typography variant="h3" className="title">
                        {item.name}
                      </Typography>
                      <Box className="sec_ond">
                        <Typography variant="h3" className="title_sec">
                          CDOGE Contained
                        </Typography>
                        <Typography variant="h3" className="num">
                          {item.codge}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="h3" className="title_sec">
                          BERUS Contained
                        </Typography>
                        <Typography variant="h3" className="num">
                          {item.berus}
                        </Typography>
                      </Box>
                    </div>
                  </li>
                );
              })}
          </ul>
          <button className="start_btn">START NOW</button>
        </div>
      </Container>
    </div>
  );
}
