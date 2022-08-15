import { useMediaQuery, Container, Box, Typography, FormControl, Input } from "@material-ui/core";
import { useState } from "react";
import "./style/web.scss";
import "./style/mobile.scss";
export function Berus() {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  const [cdogValue, setCdogValue] = useState<string>("");
  const handleChangeCdogValue = (e: any) => {
    setCdogValue(e.target.value);
  };
  return (
    <div className={isSmallScreen || isVerySmallScreen ? "berus_box mobile_berus_box" : "berus_box"}>
      <div className="block1">
        <Container
          style={{
            display: isSmallScreen || isVerySmallScreen ? "block" : "flex",
            justifyContent: "space-between",
            // alignItems: "center",
            width: isSmallScreen || isVerySmallScreen ? "100%" : "1200px",
          }}
          className="center_cont"
        >
          <div className="left_box">
            <div className="top_human"></div>
            <div className="gif_box"></div>
          </div>
          <div className="right_box">
            <Box className="top_cont">
              <Typography variant="h3" className="top_tile">
                Berus
              </Typography>
              <Typography variant="h5" className="bottom_content">
                Sir Berus helps Doge destroy the fiat order and become the people's currency.
              </Typography>
              <Typography variant="h6" className="bottom_conten">
                BERUS is the governance token in Cerberus ecosystem, having high potential to support the doge
                multi-chain system. It can be acquired as an asset through VPool using CDOGE.
              </Typography>
            </Box>
            <Box className="bottom_cont">
              <div className="top_con">
                <Typography variant="h3" className="top_tile">
                  Exchange Rate
                </Typography>
                <div className="contaier_box">
                  <Typography variant="h4" className="tile_name">
                    CDoge
                  </Typography>
                  <FormControl variant="standard" className="input_box">
                    <Input id="component-simple" value={cdogValue} onChange={handleChangeCdogValue} />
                  </FormControl>
                  <span className="add_logo">:</span>
                  <FormControl variant="standard" className="input_box">
                    <Input id="component-simple" value={cdogValue} onChange={handleChangeCdogValue} />
                  </FormControl>
                  <Typography variant="h4" className="tile_name add_margin">
                    Berus
                  </Typography>
                  <FormControl variant="standard" className="input_box amount_box">
                    <Input
                      placeholder="amount"
                      id="component-simple"
                      value={cdogValue}
                      onChange={handleChangeCdogValue}
                    />
                  </FormControl>
                </div>
              </div>
              <div className="top_con bottom_con">
                <Typography variant="h3" className="top_tile">
                  Remaining at current level
                </Typography>
                <div className="contaier_box">
                  <Typography variant="h4" className="tile_name">
                    CDoge
                  </Typography>
                  <FormControl variant="standard" className="input_box">
                    <Input id="component-simple" value={cdogValue} onChange={handleChangeCdogValue} />
                  </FormControl>
                  <span className="add_logo">:</span>
                  <FormControl variant="standard" className="input_box">
                    <Input id="component-simple" value={cdogValue} onChange={handleChangeCdogValue} />
                  </FormControl>
                  <Typography variant="h4" className="tile_name add_margin">
                    Berus
                  </Typography>
                  <div className="btn_box">
                    <button className="collect">Connect Wallet</button>
                    <button className="deposit">Deposite</button>
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </Container>
      </div>
    </div>
  );
}
