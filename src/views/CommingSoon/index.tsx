import { useMediaQuery } from "@material-ui/core";
import "./style/web.scss";
export function CommingSoon() {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  console.log(isSmallScreen, isVerySmallScreen, "isVerySmallScreen");
  return (
    <div className="dog_box">
      <div className="big_bg">
        <p>COMING SOON</p>
      </div>
    </div>
  );
}
