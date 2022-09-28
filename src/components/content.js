import { Header } from "./header";
import { Footer } from "./footer";

import Moralis from 'moralis-v1';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from "../context/ContextUser"
import axios from "axios";

import Web3 from "web3";

import Cards from '../components/Cards';
import { nftAbi } from '../ABI/Nft';

import { Button } from 'react-bootstrap';

export function Content() {



  const {             MyUser,
    setMyUser,
    Token,
    setToken,
    URL,
    ContratNft1,
    ContratStake,
    ApiNFt,
    ContratToken, Refresca, setRefresca, setNfts, setNftsInStake, Nfts, NftsInStake, MisPuntos, setMisPuntos, Statistics1, Statistics2, Statistics3, Statistics4, Statistics5,
    login,
    logOut,StakeinNft, NftStatistics, ClaimReawrd, BuscarNft, YaAprobo, Listo } = useContext(UserContext)




  useEffect(() => {
    let user = Moralis.User.current();
    setToken(localStorage.getItem('asdasd'))
    if (Token == "") {
      login()
    } else {
      setMyUser(user.get("ethAddress"))
     // getChallenge(user.get("ethAddress"));
      // BuscarNft()
      // YaAprobo()


    }
  }, []);


  useEffect(() => {
    if(Listo == true){
      StakeinNft()
      BuscarNft()
      NftStatistics()
    }


  }, [Refresca]);

  return (
    <>
      <Header></Header>
      <div className="alfaCont">
        <div className="uwuClaim mobileUwuClaim" ><div className="cummulative" id="Your_RewardM"> 666666</div> <a href="void(0)">
          <div className="claimButton" id="connectWalletM" >Connect</div>
          <div className="claimButton hide" id="ClaimM" >Claim Rewards</div>
        </a></div>
        <div className="leftBox">
          <div className="leftBoxContent">
            <div className="statistics">Statistics:</div>
            <div className="statisticList ">
              <div className="statBox tooltip">
                <div className="right hideMob">
                  <p>Amount of holder that have their weirdos staked at the Underworld!</p>
                  <i></i>
                </div>
                <div className="quant" id="holders">
                {Statistics1} 

                </div>

                <div>
                  Holders at the Underworld
                </div>
              </div>

              <div className="statBox tooltip">
                <div className="right hideMob">
                  <p>All the weirdos without bonus traits earn base $UWU rewards (1 every 24h)</p>
                  <i></i>
                </div>
                <div className="quant" id="trait1Total">

                {Statistics2} 


                </div>

                <div>
                  Weirdos without Bonus
                </div>
              </div>
              <div className="statBox tooltip">
                <div className="right hideMob">
                  <p>Weirdos with one bonus trait get +50% extra rewards (1.5 $UWU every 24h)</p>
                  <i></i>
                </div>
                <div className="quant" id="trait1">
                {Statistics3} 



                </div>

                <div>
                  Weirdos with x1.5 Bonus
                </div>
              </div>
              <div className="statBox tooltip">
                <div className="right hideMob">
                  <p>Non-common weirdos with two bonus traits get +200% extra rewards (3 $UWU every 24h)</p>
                  <i></i>
                </div>
                <div className="quant" id="trait2">
                {Statistics4} 


                </div>

                <div>
                  Weirdos with x3 Bonus
                </div>
              </div>
              <div className="statBox SBLast tooltip">
                <div className="right hideMob">
                  <p>Rarest weirdos with three bonus traits get +900% extra rewards (10 $UWU every 24h)</p>
                  <i></i>
                </div>
                <div className="quant" id="trait3">
                {Statistics5} 


                </div>
                <div>
                  Weirdos with x10 Bonus
                </div>
              </div>
            </div>
            <div className="weirdTrio tooltip">
              <img src="res/weirdos-05.png" alt=""></img>
              <div className="bottom">
                <p>Bonus traits of the week: <b>Stumble with Lolipop</b> face, <b>Pink Bathrobe</b> clothing (devils and skellys) and <b>Green Octopus </b>head. You can see the bonuses for having one or more of this traits at our <b>FAQ section</b>.</p>
                <i></i>
              </div>
            </div>
          </div>
        </div>

        <div className="separator"></div>
        <div className="rightBox">
          <div className="rightBoxContent" id="rightBoxContent">

            <div id="WalletD" >11111111111111111111111</div>
            <div id="Your_WeirdosD"> {NftsInStake.length}/ {Nfts.length + NftsInStake.length}
            </div>
            <div className="weirdos" id="weirdosAll">
              {Nfts.map((res, i) => {
                return (
                  <Cards key={i} name={res.name} id={res.id} attributes={res.attributes} img={res.img} estado={"no stake"} />
                )

              })}

              {
              
              NftsInStake.map((res, i) => {
                return (
                  <Cards key={i} name={res.name} id={res.id} attributes={res.attributes} img={res.img} estado={"stake"} puntos={res.puntos} />
                )

              })}


            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>

    </>
  )
}