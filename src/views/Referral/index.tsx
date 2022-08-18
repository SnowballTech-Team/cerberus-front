import { useMediaQuery, Container } from "@material-ui/core";
import "./style/web.scss";
import "./style/mobile.scss";
// import { ReferralAddress } from "./ReferralAddress";
import { MDC } from "./MDC";
export function Referral() {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  return (
    <div className={isSmallScreen || isVerySmallScreen ? "referral_box mobile_referral_box" : "referral_box"}>
      <Container
        style={{
          width: isSmallScreen || isVerySmallScreen ? "100%" : "1200px",
          padding: 0,
        }}
        className="center_cont"
      >
        {/* <ReferralAddress /> */}
        <MDC />
      </Container>
    </div>
  );
}
