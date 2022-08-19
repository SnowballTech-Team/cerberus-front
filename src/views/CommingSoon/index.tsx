import { useMediaQuery } from "@material-ui/core";
import "./style/web.scss";
import "./style/mobile.scss";
export function CommingSoon() {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  return (
    <div className={isSmallScreen || isVerySmallScreen ? "comming_box mobile_comming_box" : "comming_box"}>
      <div className="big_bg">
        {/* <p className="title_box">
          <p>COMING SOON</p>
        </p> */}
        <span className="sc-cBIieI gYgkvS">
          <span className="sc-czvZiG bfvNdl">COMING SOON</span>
          <span className="sc-kqnjJL cXKpZu">
            <span className="sc-czvZiG bfvNdl">COMING SOON</span>
          </span>
        </span>
      </div>
    </div>
  );
}
