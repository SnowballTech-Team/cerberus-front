import * as React from "react";
import "./web.scss";
import "./mobile.scss"
import { useMediaQuery } from "@material-ui/core";

export function Header(){
    const isSmallScreen = useMediaQuery("(max-width: 650px)");
    const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
    // const topList = [{name:"Home",url:""},{name:"CDoge",url:""},{name:"CNFT",url:""},{name:"CSwap",url:""},{name:"Cerbs",url:""}]
    return(<div className={isSmallScreen || isVerySmallScreen ? "header_box mobile_header_box":"header_box"}>
        <div className="container_box">
            <div className="left">
                <img src={require("../../../assets/header/logo.svg")} alt="" />
            </div>
            {/* <div className="right">
                <ul>
                    {
                        topList && topList.map((item,index)=>{
                            return (<li key={index}><p>{item.name}</p></li>)
                        })
                    }
                </ul>
                <div className="btn_box">
                    <button className="Referral_box">Referral</button>
                    <button className="Wallet_box">Wallet</button>
                </div>
            </div> */}
        </div>
    </div>)
}