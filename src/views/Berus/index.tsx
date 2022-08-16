import { useMediaQuery, Container, Box, Typography, FormControl, Input } from "@material-ui/core";
import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./style/web.scss";
import "./style/mobile.scss";
export function Berus() {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  const [cdogValue, setCdogValue] = useState<string>("");
  const handleChangeCdogValue = (e: any) => {
    setCdogValue(e.target.value);
  };
  const data = [
    { name: "CerbsDAO Treasury", value: 5 },
    { name: "Community rewards and airdrops", value: 5 },
    {
      name: "is time-locked then linearly released in 100 years to invest in Elon Musk's Mars projects.",
      value: 42,
    },
    { name: "Development team", value: 10 },
    { name: "Private investors", value: 15 },
    { name: "BERUS VPool for public investors", value: 22 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#0088FE", "#FFBB28"];
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
              <ResponsiveContainer width={838} height={838}>
                <PieChart width={838} height={838}>
                  {/* <defs>
                    <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="16%" stopColor="#979797" stopOpacity={0.2} />
                      <stop offset="84%" stopColor="#454545" stopOpacity={0.2} />
                    </linearGradient>
                  </defs> */}
                  <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={400} fill="#8884d8" dataKey="value">
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
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
    </div>
  );
}
