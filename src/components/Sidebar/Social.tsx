import React from "react";
import { Link, SvgIcon } from "@material-ui/core";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as Github } from "../../assets/icons/github.svg";
import { ReactComponent as Medium } from "../../assets/icons/medium.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as MBTCTalk } from "../../assets/icons/bitcoin.svg";

const Social: React.FC = () => {
  return (
    <div className="social-row">
      <div className="social-row-icon">
        <Link href="https://metabitcointalk.com/" target="_blank" className="social-row-icon">
          <SvgIcon component={MBTCTalk} />
        </Link>
      </div>
      <div className="social-row-icon">
        <Link href="https://twitter.com/MetaMBTC" target="_blank" className="social-row-icon">
          <SvgIcon component={Twitter} />
        </Link>
      </div>
      <div className="social-row-icon">
        <Link href="https://t.me/MBTC_Official_Channel" target="_blank" className="social-row-icon">
          <SvgIcon component={Telegram} />
        </Link>
      </div>
      <div className="social-row-icon">
        <Link href="https://github.com/meta-btc" target="_blank">
          <SvgIcon component={Github} />
        </Link>
      </div>
      <div className="social-row-icon">
        <Link href="https://medium.com/@MetaBitcoin" target="_blank" className="social-row-icon">
          <SvgIcon component={Medium} />
        </Link>
      </div>
    </div>
  );
};

export default Social;
