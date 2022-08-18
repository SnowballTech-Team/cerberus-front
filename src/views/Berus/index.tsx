import {
  useMediaQuery,
  Container,
  Box,
  Typography,
  FormControl,
  Input,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import { useState, useEffect } from "react";
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./style/web.scss";
import "./style/mobile.scss";
import { useWeb3Context } from "src/hooks/web3Context";
import { CUR_NETWORK_ID } from "src/constants/network";
import { ethers } from "ethers";
import { VPOOL_ADDRESS, VPOOL_ABI, ERC20_ADDRESS, ERC20_ABI } from "src/contract";
import { error } from "../../slices/MessagesSlice";
import { bnToNum } from "src/helpers";
import { useDispatch } from "react-redux";
import BerusGif from "../../assets/berus/berus_gif.gif";
import { t } from "@lingui/macro";
import BN from "bignumber.js";
export function Berus() {
  const maxInt = new BN("2").pow(new BN("256").minus(new BN("1")));
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  const [cdogValue, setCdogValue] = useState<number>(0);
  const { connected, provider, address, networkId } = useWeb3Context();
  const [berusLevl, setBerusLevel] = useState<number>(0);
  const [letBerusLevel, setLetBerusLevel] = useState<number>(0);
  const [amountValue, setAmountValue] = useState<number>(1);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const signer = provider.getSigner();
  const handleChangeAmountValue = (e: any) => {
    setAmountValue(e.target.value);
  };
  const data = [
    { name: "CerbsDAO Treasury", value: "5%" },
    { name: "Community rewards and airdrops", value: "5%" },
    {
      name: "is time-locked then linearly released in 100 years to invest in Elon Musk's Mars projects.",
      value: "42%",
    },
    { name: "Development team", value: "10%" },
    { name: "Private investors", value: "15%" },
    { name: "BERUS VPool for public investors", value: "22%" },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#0088FE", "#FFBB28"];

  // get level
  const getCurrentLevel = async () => {
    setLoading(true);
    try {
      const poolContract = new ethers.Contract(VPOOL_ADDRESS, VPOOL_ABI, signer);
      const tx = await poolContract.getCurLevel();
      const tx2 = await poolContract.getLeftToken();
      setBerusLevel(bnToNum(tx));
      setLetBerusLevel(bnToNum(tx2));
      setCdogValue(bnToNum(tx2) / bnToNum(tx));
      setLoading(false);
    } catch (err) {
      console.log({ err });
      setLoading(false);
      dispatch(error(t`Fail to getCurLevel`));
    }
  };

  // deposit
  const depositBerus = async () => {
    setLoading(true);
    try {
      const approvalInfo = new ethers.Contract(ERC20_ADDRESS, ERC20_ABI, signer);
      const txOne = await approvalInfo.approve(VPOOL_ADDRESS, maxInt.c?.join(""));
      const txCB = await txOne.wait();
      if (txCB.status) {
        const poolContract = new ethers.Contract(VPOOL_ADDRESS, VPOOL_ABI, signer);
        const submitValue = new BN(amountValue).multipliedBy(new BN(10).pow(18)).toString();
        const txThree = await poolContract.depositAnchor(submitValue);
        const txCB2 = await txThree.wait();
        if (txCB2.status) {
          getCurrentLevel();
        }
      }
      setLoading(false);
    } catch (err) {
      console.log({ err });
      setLoading(false);
      dispatch(error(t`Fail to depositAnchor`));
    }
  };

  useEffect(() => {
    if (provider && networkId === CUR_NETWORK_ID && address) {
      getCurrentLevel();
    }
  }, [connected]);
  return (
    <div className={isSmallScreen || isVerySmallScreen ? "berus_box mobile_berus_box" : "berus_box"}>
      <div className="block1">
        <Container
          style={{
            display: isSmallScreen || isVerySmallScreen ? "block" : "flex",
            justifyContent: "space-between",
            // alignItems: "center",
            width: isSmallScreen || isVerySmallScreen ? "100%" : "1200px",
            padding: 0,
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
              {isSmallScreen || isVerySmallScreen ? null : (
                <Typography variant="h6" className="bottom_conten">
                  BERUS is the governance token in Cerberus ecosystem, having high potential to support the doge
                  multi-chain system. It can be acquired as an asset through VPool using CDOGE.
                </Typography>
              )}
            </Box>
            {isSmallScreen || isVerySmallScreen ? (
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
                      <Input id="component-simple" value={1} disabled />
                    </FormControl>
                    <span className="add_logo">:</span>
                    <FormControl variant="standard" className="input_box">
                      <Input id="component-simple" value={berusLevl} disabled />
                    </FormControl>
                    <Typography variant="h4" className="tile_name add_margin">
                      Berus
                    </Typography>
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
                      <Input id="component-simple" value={cdogValue} disabled />
                    </FormControl>
                    <span className="add_logo">:</span>
                    <FormControl variant="standard" className="input_box">
                      <Input id="component-simple" value={letBerusLevel} disabled />
                    </FormControl>
                    <Typography variant="h4" className="tile_name add_margin">
                      Berus
                    </Typography>
                  </div>
                  <FormControl variant="standard" className="input_box amount_box">
                    <Input
                      placeholder="amount"
                      id="component-simple"
                      value={amountValue}
                      onChange={handleChangeAmountValue}
                    />
                  </FormControl>
                  <div className="btn_box">
                    {connected ? (
                      <button className="deposit">{address.slice(0, 7) + "..." + address.slice(-4)}</button>
                    ) : (
                      <button className="collect">Connect Wallet</button>
                    )}
                    <button className="deposit" onClick={depositBerus}>
                      Deposite
                    </button>
                  </div>
                  <Typography variant="h6" className="bottom_conten">
                    BERUS is the governance token in Cerberus ecosystem, having high potential to support the doge
                    multi-chain system. It can be acquired as an asset through VPool using CDOGE.
                  </Typography>
                </div>
              </Box>
            ) : (
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
                      <Input id="component-simple" value={1} disabled />
                    </FormControl>
                    <span className="add_logo">:</span>
                    <FormControl variant="standard" className="input_box">
                      <Input id="component-simple" value={berusLevl} disabled />
                    </FormControl>
                    <Typography variant="h4" className="tile_name add_margin">
                      Berus
                    </Typography>
                    <FormControl variant="standard" className="input_box amount_box">
                      <Input
                        placeholder="amount"
                        id="component-simple"
                        value={amountValue}
                        onChange={handleChangeAmountValue}
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
                      <Input id="component-simple" value={cdogValue} disabled />
                    </FormControl>
                    <span className="add_logo">:</span>
                    <FormControl variant="standard" className="input_box">
                      <Input id="component-simple" value={letBerusLevel} disabled />
                    </FormControl>
                    <Typography variant="h4" className="tile_name add_margin">
                      Berus
                    </Typography>
                    <div className="btn_box">
                      {connected ? (
                        <button className="deposit">{address.slice(0, 7) + "..." + address.slice(-4)}</button>
                      ) : (
                        <button className="collect">Connect Wallet</button>
                      )}
                      <button className="deposit" onClick={depositBerus}>
                        Deposite
                      </button>
                    </div>
                  </div>
                </div>
              </Box>
            )}
          </div>
        </Container>
      </div>
      <div className="block2">
        <Container
          style={{
            width: isSmallScreen || isVerySmallScreen ? "100%" : "1200px",
            padding: 0,
          }}
          className="center_cont"
        >
          <Typography variant="h3" className="top_tile">
            Tokenomics
          </Typography>
          <Typography variant="h5" className="top_other">
            Total Supply: 6,900,000,000,000
          </Typography>
          <Box className="content_box">
            <Box className="top_word">
              <ul>
                {data &&
                  data.map((item, index) => {
                    if (index < 3) {
                      return (
                        <li key={index}>
                          <Typography variant="h3" className="top_num">
                            {item.value}
                          </Typography>
                          <Typography variant="h5" className="top_name">
                            {item.name}
                          </Typography>
                        </li>
                      );
                    }
                  })}
              </ul>
            </Box>
            <Box className="center_chart">
              {/* <ResponsiveContainer
                width={isSmallScreen || isVerySmallScreen ? 360 : 838}
                height={isSmallScreen || isVerySmallScreen ? 360 : 838}
              >
                <PieChart
                  width={isSmallScreen || isVerySmallScreen ? 360 : 838}
                  height={isSmallScreen || isVerySmallScreen ? 360 : 838}
                >
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={isSmallScreen || isVerySmallScreen ? 180 : 300}
                    fill="#8884d8"
                    dataKey="value"
                    cornerRadius={10}
                    innerRadius={0}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer> */}
              <img src={BerusGif} />
            </Box>
            <Box className="top_word bottom_word">
              <ul>
                {data &&
                  data.map((item, index) => {
                    if (index > 2) {
                      return (
                        <li key={index}>
                          <Typography variant="h3" className="top_num">
                            {item.value}
                          </Typography>
                          <Typography variant="h5" className="top_name">
                            {item.name}
                          </Typography>
                        </li>
                      );
                    }
                  })}
              </ul>
            </Box>
          </Box>
        </Container>
      </div>
      <Backdrop open={loading} className="loading_box">
        <CircularProgress color="inherit" />
        <Typography variant="h5" style={{ marginLeft: "1rem" }}>
          Communicating with blockchain nodes...
        </Typography>
      </Backdrop>
    </div>
  );
}
