import { useContext, useEffect, useState } from 'react';
import logo02 from "../res/Logo-02.png"
import LogoDiscord from "../res/discord.png"
import LogoTwitter from "../res/twitter.svg"
import LogoInsta from "../res/insta.svg"
import Moralis from 'moralis-v1';
import { UserContext } from "../context/ContextUser"
import { TokenABi } from '../ABI/Token';

export function Header(props){
    const[show,setShow]=useState(false);


    

  const { MyUser, setMyUser, setToken, Token, URL, ContratNft1, ContratStake, ApiNFt, ContratToken,
    Nfts,
    setNfts,
    NftsInStake,
    setNftsInStake, Refresca, setRefresca,  MisPuntos, setMisPuntos, login, logOut, AproNFT, ClaimReawrd, EsApro, Stakeall, UnStakeall} = useContext(UserContext)

    const AproToken = async () => {
        const sendOptions = {
          chain: "polygon",
          contractAddress: ContratToken,
          functionName: "approve",
          abi: TokenABi,
          params: { spender: ContratStake, amount: Moralis.Units.ETH('10000'), },
        };
    
        if (!Moralis.isWeb3Enabled()) {
          await Moralis.deactivateWeb3();
          await Moralis.enableWeb3();
          console.log("web3 is ", Moralis.isWeb3Enabled());
        }
    
        console.log("web3 is ", Moralis.isWeb3Enabled());
    
        const transaction = await Moralis.executeFunction(sendOptions);
    
    
        await transaction.wait();
        if (transaction) {
          console.log(transaction);
    
        }
    
      }



    return(
        <>  
        <div className="headerBar">
                        <ul className="navItems desktopClaim">
                            <li className="logoLi">
                            <img className="logo" src={logo02} alt=""></img>
                            </li>
                            <li>
                                <a href="https://underworldweirdos.com/" to="https://underworldweirdos.com/" >Weirdos Who?</a>    
                            </li>
                        
                            <li><a href="https://mint.underworldweirdos.com/" to="https://mint.underworldweirdos.com/">Mint</a></li>
                            <li><a href="https://opensea.io/collection/underworldweirdos-main" to="https://opensea.io/collection/underworldweirdos-main">Collection</a></li>
                            <li><a href="https://quickswap.exchange/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=0xc586a4a0db0bc1169d490b8fbf0633cc06d0f0d3" to="https://quickswap.exchange/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=0xc586a4a0db0bc1169d490b8fbf0633cc06d0f0d3">Token</a></li>
                            <li><a href="#foot" id="goFoot" >FAQ</a></li>
                            { EsApro? <li><a   id="special" onClick={Stakeall} >Stake All</a></li>: <li> <a  id="aprobar" onClick={AproNFT}>Approve Stake</a></li> }
                            
                            <li><a  id="token" onClick={AproToken}>Approve Token</a></li>
                            {/* <li><a   id="special" >Approve Special</a></li> */}
                            
                            <li><a   id="special" onClick={UnStakeall}>UnStake All</a></li>

                            <li className="uwuClaim" onClick={ClaimReawrd} ><div className="cummulative" id="Your_Reward">{MisPuntos.toFixed(2)} </div> <a  to="#">
                                <div className="claimButton hide"  id="Claim">Claim Rewards</div>
                                {
                                    Token == ""? ( <div className="claimButton" id="connectWallet" onClick={login}>Connect</div>) : ( <div className="claimButton" id="connectWallet" onClick={logOut}>Disconnect</div>)
                                }
                                </a>                               

                            </li>
                            <li className="socialButtons"><a  to="#">
                                <img src={LogoDiscord} alt=""></img>
                            </a>
                            </li>
                            <li className="socialButtons"><a  to="#">
                                <img src={LogoTwitter} alt=""></img>
                            </a>
                            </li>
                            <li className="socialButtons" >
                                <a  to="#">
                                    <img src={LogoInsta}  alt=""></img>
                                </a>
                            </li>
                            <li > 
                                <div id="toggleAudio" className="mute" > </div>
                            </li>
                        </ul>
                        <img src="res/Logo-02.png" className="logoMov hideDesktop" alt=""></img>
                        <div className="toggleButton" onClick={()=>setShow(!show)} >
                        <label  className="hamburger  hideDesktop ">
                        <div className="top-bun"></div>
                        <div className="meat"></div>
                        <div className="bottom-bun"></div>
                        </label>
                        </div>
                        

                {
                show?
                <div className="nav-wrapper">
                <div>
                <div className="toggleButton" onClick={()=>setShow(!show)} >
                    <div className="hamburger">
                        <img src="res/Iconos-09.png" alt="close"></img>
                    </div>
                </div>
                    <ul className="mobUL">
                        
                        <div className="walletTitle" >Your wallet</div>
                        <div id="Wallet" className="hide" >wallet </div>
                        <div className="stakedTitle">Your weirdos staked</div>
                        <div id="Your_Weirdos" className="hide"></div>    
                        <li>
                            <a href="https://underworldweirdos.com/">Weirdos Who?</a>
                        </li>
                        <li>
                            <a href="https://mint.underworldweirdos.com/">Mint</a>
                        </li>
                        <li>
                            <a href="https://opensea.io/collection/underworldweirdos-main">Collection</a>
                        </li>
                        <li>
                            <a href="https://quickswap.exchange/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=0xc586a4a0db0bc1169d490b8fbf0633cc06d0f0d3">Token</a>
                        </li>
                        <li>
                            <a >FAQ</a>
                        </li>
                        
                        
                        { EsApro? <li><a   id="special" onClick={Stakeall} >Stake All</a></li>: <li> <a  id="aprobar" onClick={AproNFT}>Approve Stake</a></li> }

                            
                        <li><a  id="token" onClick={AproToken}>Approve Token</a></li>
                            {/* <li><a   id="special" >Approve Special</a></li> */}
                            
                            <li><a   id="special" onClick={UnStakeall}>UnStake All</a></li>
                        

                        <div className="contMobSocialButtons">
                            <li className="socialButtons mobSocialButtons"><a >
                                <img src={LogoDiscord} alt=""></img>
                            </a>
                            </li>
                            <li className="socialButtons mobSocialButtons"><a >
                                <img src={LogoTwitter} alt=""></img>
                            </a>
                            </li>
                            <li className="socialButtons mobSocialButtons" ><a >
                                <img src={LogoInsta} alt=""></img>
                            </a>
                            </li>
                        </div> 
                    </ul>  
                </div>
            </div> 
            :
            null
            } 
        </div>
        </>     
    )       
}       