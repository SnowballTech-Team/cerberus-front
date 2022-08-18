import { useMediaQuery, Box, Typography, FormControl, Input } from "@material-ui/core";
import "./style/web.scss";
import "./style/mobile.scss";
import { useState } from "react";
export function ReferralAddress() {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  const [referralValue, setReferralValue] = useState<string>("");
  const changeReferralValue = (e: any) => {
    setReferralValue(e.target.value);
  };
  return (
    <div
      className={isSmallScreen || isVerySmallScreen ? "referral_address mobile_referral_address" : "referral_address"}
    >
      <Box className="input_box">
        <Typography variant="h3" className="top_tile">
          Referral
        </Typography>
        <Typography variant="h5" className="top_subtile">
          Not Connect
        </Typography>
        <Box className="input_container">
          <FormControl variant="standard" className="input_cont">
            <Input
              id="component-simple"
              placeholder="Please put in your referral's address"
              value={referralValue}
              onChange={changeReferralValue}
            />
          </FormControl>
          <button className="confirm_btn">CONFIRM</button>
        </Box>
        <Box className="bottom_cont">
          <Typography variant="h3" className="top_tile">
            BEFORE YOU START
          </Typography>
          <Typography variant="h5" className="sub_cont">
            1. Download Dapp Wallet app or extension
          </Typography>
          <Typography variant="h5" className="sub_cont">
            2. Switch to Binance Smart Chain Network
          </Typography>
          <Typography variant="h5" className="sub_cont">
            3. Transfer BNB tokens to your Dapp wallet
          </Typography>
          <Typography variant="h5" className="sub_cont">
            4. Get an invitation code
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
