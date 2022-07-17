import * as React from "react";
import "./web.scss";
export function Header(){
    const topList = [{name:"Home",url:""},{name:"CDoge",url:""},{name:"CNFT",url:""},{name:"CSwap",url:""},{name:"Cerbs",url:""}]
    return(<div className="header_box">
        <div className="container_box">
            <div className="left">
                <img src={require("../../../assets/header/logo.svg")} alt="" />
            </div>
            <div className="right">
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
            </div>
        </div>
    </div>)
}