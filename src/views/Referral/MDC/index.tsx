import { useMediaQuery, Box, Container, Typography } from "@material-ui/core";
import "./style/web.scss";
import "./style/mobile.scss";
import nftImages from "../../../assets/referral/nft_logo.png";
import stakeImg from "../../../assets/referral/stake_bg.png";
import stakedImg from "../../../assets/referral/nft_img.png";
import CopyIcon from "../../../assets/icons/Copy.png";
import copy from "copy-to-clipboard";
import { useDispatch } from "react-redux";
import { error, info } from "../../../slices/MessagesSlice";
export function MDC() {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  const dispatch = useDispatch();
  const nftList = [
    { num: "#0001", imgUrl: nftImages },
    { num: "#0002", imgUrl: nftImages },
    { num: "#0003", imgUrl: nftImages },
    { num: "#0004", imgUrl: nftImages },
    { num: "#0005", imgUrl: nftImages },
    { num: "#0006", imgUrl: nftImages },
    { num: "#0007", imgUrl: nftImages },
    { num: "#0008", imgUrl: nftImages },
    { num: "#0009", imgUrl: nftImages },
    { num: "#0009", imgUrl: nftImages },
  ];
  const percentageList = [
    { name: "Doge Soldier", num: "15%" },
    { name: "Doge General", num: "20%" },
    { name: "Doge Chieftain", num: "25%" },
    { name: "Doge King", num: "50%" },
    { name: "Doge Astronaut", num: "60%" },
    { name: "Doge Alien", num: "70%" },
    { name: "Doge Martian", num: "80%" },
    { name: "Doge Collector", num: "100%" },
  ];
  const gotoCopy = (text: string) => {
    if (copy(text)) {
      dispatch(info("Copied!"));
    } else {
      dispatch(error("Failed, please click to Copy!"));
    }
  };
  return (
    <div className={isSmallScreen || isVerySmallScreen ? "mdc_box mobile_mdc_box" : "mdc_box"}>
      <Typography variant="h3" className="top_tile">
        Connected to 0xE9f4......zx12
      </Typography>
      <Container
        style={{
          display: isSmallScreen || isVerySmallScreen ? "block" : "flex",
          justifyContent: "space-between",
          width: isSmallScreen || isVerySmallScreen ? "100%" : "1200px",
          padding: 0,
        }}
        className="center_cont"
      >
        <Box className="left_container">
          <Box className="top">
            <Box className="left_cont">
              <Typography variant="h3" className="top_name">
                Purchase
              </Typography>
              <Typography variant="h3" className="top_num">
                690 Cdoge
              </Typography>
            </Box>
            <Box className="right_cont">
              <button>Purchase</button>
            </Box>
          </Box>
          <Box className="center">
            <Typography variant="h3" className="top_title">
              My NFTs
            </Typography>
            <Box className="list_box">
              <Box className="scroll_box">
                <ul>
                  {nftList &&
                    nftList.map((item, index) => {
                      return (
                        <li key={index}>
                          <img src={item.imgUrl} />
                          <Typography variant="h3" className="top_no">
                            {item.num}
                          </Typography>
                        </li>
                      );
                    })}
                </ul>
              </Box>
            </Box>
          </Box>
          <Box className="bottom">
            <Box className="top_cont">
              <Typography variant="h3" className="top_title">
                Referral
              </Typography>
              <button>CLAIM</button>
            </Box>
            <Box className="middle_cont">
              <Typography variant="h3" className="left_rewards">
                Referral rewards
              </Typography>
              <Box className="right_con">
                <Typography variant="h3" className="rewards_num">
                  00000
                </Typography>
                <Typography variant="h3" className="rewards_type">
                  CDoge
                </Typography>
              </Box>
            </Box>
            <Box className="bottom_cont">
              <Typography variant="h3" className="top_title">
                Referral Percentage
              </Typography>
              <ul>
                {percentageList &&
                  percentageList.map((item, index) => {
                    return (
                      <li key={index}>
                        <Typography variant="h5" className="top_title">
                          {item.name}
                        </Typography>
                        <Typography variant="h5" className="top_title add_margin">
                          {item.num}
                        </Typography>
                      </li>
                    );
                  })}
              </ul>
            </Box>
          </Box>
        </Box>
        <Box className="right_container">
          <Box className="top">
            <Box className="top_cont">
              <Typography variant="h3" className="top_title">
                Stake
              </Typography>
              <button>UNSTAKE</button>
            </Box>
            <Box className="middle_cont">
              <Typography variant="h3" className="left_rewards">
                Stake Rewards
              </Typography>
              <Box className="right_con">
                <Typography variant="h3" className="rewards_num">
                  00000
                </Typography>
                <Typography variant="h3" className="rewards_type">
                  Berus
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className="middle">
            <Box className="left">
              <img src={stakeImg} />
            </Box>
            <Box className="center">
              <Typography variant="h5" className="top_title">
                Your MDC Honor:
              </Typography>
              <Typography variant="h5" className="honer_box">
                Doge Alien
              </Typography>
            </Box>
            <Box className="center right">
              <Typography variant="h5" className="top_title">
                INVITE & EARN:
              </Typography>
              <Box className="address_box">
                <Typography variant="h5" className="address">
                  0xE9f4......zx12
                </Typography>
                <img src={CopyIcon} onClick={() => gotoCopy("123")} />
              </Box>
            </Box>
          </Box>
          <Box className="bottom">
            <Typography variant="h5" className="top_title">
              Staked NFTs
            </Typography>
            <Box className="nft_box">
              <Box className="nft_container">
                <img src={stakedImg} alt="" />
                <Typography variant="h5" className="nft_name">
                  MDC NFT #0008
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
