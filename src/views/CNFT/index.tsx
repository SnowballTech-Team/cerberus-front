import { useMediaQuery } from "@material-ui/core";
import "./style/web.scss";
import "./style/mobile.scss";
export function CNFT() {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  console.log(isSmallScreen, isVerySmallScreen, "isVerySmallScreen");
  return (
    <div className={isSmallScreen || isVerySmallScreen ? "dog_box mobile_dog_box" : "dog_box"}>
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
