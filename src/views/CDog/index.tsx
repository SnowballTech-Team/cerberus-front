import { useMediaQuery } from "@material-ui/core";
import "./style/web.scss";
export function CDog() {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  console.log(isSmallScreen, isVerySmallScreen, "isVerySmallScreen");
  return (
    <div className="dog_box">
      <div className="bottom_bg"></div>
      <div className="top_bg"></div>
    </div>
  );
}
