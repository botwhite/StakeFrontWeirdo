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

import Werido5 from '../res/weirdos-05.png'

export function Content() {


  const frases = [
    {"ID":"2","Frase":"I have a memory like an elephant. I remember every elephant I've ever met"},
    {"ID":"3","Frase":"They say marriages are made in Heaven. i think they come from the Underworld"},
    {"ID":"4","Frase":"I was the weird kid next door's imaginary friend"},
    {"ID":"5","Frase":"I'm for whatever gets you through the night"},
    {"ID":"6","Frase":"One advantage of talking to yourself is that you know at least somebody's listening, weirdo"},
    {"ID":"7","Frase":"Behind every weird man is a woman rolling her eyes"},
    {"ID":"8","Frase":"I love Mickey Mouse more than any woman I have ever known"},
    {"ID":"9","Frase":"What do Popeye's fingers smell like? - Olive oil"},
    {"ID":"10","Frase":"Crazy ex-girlfriends are like a box of chocolate... - They'll kill your dog"},
    {"ID":"11","Frase":"I like Ouija boards - It's the only game I can still play with grandma"},
    {"ID":"12","Frase":"How do you make a weirdo cry? - Kill his family"},
    {"ID":"13","Frase":"How do you make a weirdo cry? - Drain his wallet"},
    {"ID":"14","Frase":"Hey hey hey! Fool me once, I'm gonna kill you weirdo!"},
    {"ID":"15","Frase":"You seem familiar, have I threatened you before?"},
    {"ID":"16","Frase":"What doesn't kill me should run, because now I'm fucking pissed"},
    {"ID":"17","Frase":"With great power comes great need to take a nap. Wake me up later"},
    {"ID":"18","Frase":"I'm usually that person who has no idea what's going on"},
    {"ID":"19","Frase":"My ultimate goal is to punch God in the eye, just to spite him one last time"},
    {"ID":"20","Frase":"Well, well, well... if it isn't my old friend: the dawning realization that I fucked up bad"},
    {"ID":"21","Frase":"I've come to a point in my life where I need a stronger word than fuck"},
    {"ID":"22","Frase":"I was born for politics. I have great hair and I love lying"},
    {"ID":"23","Frase":"So apparently the 'bad vibes' I've been feeling are actually severe psychological distress"},
    {"ID":"24","Frase":"Physically, yes, I could fight a bird. But emotionally? Imagine the toll"},
    {"ID":"25","Frase":"Died and came back as a cowboy, I call that reintarnation"},
    {"ID":"26","Frase":"Bitches be like 'im baby' but have childhood trauma"}    ,
    {"ID":"27","Frase":"If karma doesn't hit you, I fucking will"},
    {"ID":"28","Frase":"The older you get, the better you get, unless you�re a banana"}    ,
    {"ID":"29","Frase":"Clothes make the man. Naked weirdos have little influence in society"},
    {"ID":"30","Frase":"I'm not superstitious, but I am a little stitious"},
    {"ID":"31","Frase":"Truth hurts. Maybe not as much as jumping on a bicycle with a seat missing, but it hurts"},
    {"ID":"32","Frase":"Never feel more alone than when I'm trying to put sunscreen on my back"},
    {"ID":"33","Frase":"I'm not insane. My mother had me tested"},
    {"ID":"34","Frase":"If I'm not back in five minutes, just wait longer"},
    {"ID":"35","Frase":"I'm not good at the advice. Can I interest you in a sarcastic comment?"},
    {"ID":"36","Frase":"Alien in Stomach? Ridiculous!"},
    {"ID":"37","Frase":"Can I tell you a joke about paper bags? Nah, never mind, its tearable"},
    {"ID":"38","Frase":"This is my favorite shirt"},
    {"ID":"39","Frase":"Say my name 3 times. come one you can do it?"},
    {"ID":"40","Frase":"A day without sunshine is like, you know, night"},
    {"ID":"41","Frase":"Never do anything out of hunger. Not even eating"},
    {"ID":"42","Frase":"To call you weirdo would be an insult to weird people!"},
    {"ID":"43","Frase":"Accept who you are. Unless you're a serial killer"},
    {"ID":"44","Frase":"I like my money where I can see it: hanging in my closet"},
    {"ID":"45","Frase":"Trying is the first step toward failure"},
    {"ID":"46","Frase":"If I were two-faced, would I be wearing this one?"},
    {"ID":"47","Frase":"My favorite machine at the gym is the vending machine"},
    {"ID":"48","Frase":"Everyone with telekinetic powers, raise my hand"},
    {"ID":"49","Frase":"Never go to a doctor whose office plants have died"},
    {"ID":"50","Frase":"Life is hard. After all, it kills you"},
    {"ID":"51","Frase":"Insanity is hereditary; you get it from your children"},
    {"ID":"52","Frase":"Everyone has a purpose in life. Perhaps yours is being weird"},
    {"ID":"53","Frase":"Everything that used to be a sin is now a chill saturday night"},
    {"ID":"54","Frase":"The road to success is always under construction"},
    {"ID":"55","Frase":"If love is the answer, could you please rephrase the question?"},
    {"ID":"56","Frase":"Confidence is 10% work and 90% delusion"},
    {"ID":"57","Frase":"I'm not for everyone. I'm barely for me"},
    {"ID":"58","Frase":"We are the weirdos Mister!"},
    {"ID":"59","Frase":"If you want to look thin: hang out with fat people"},
    {"ID":"60","Frase":"Marriage is like mushrooms: we notice too late if they are good or bad"},
    {"ID":"61","Frase":"Different taste in jokes is a great strain on the affections"},
    {"ID":"62","Frase":"Love conquers all things except poverty and toothache"},
    {"ID":"63","Frase":"The worst time to have a heart attack is during a game of charades"},
    {"ID":"64","Frase":"The secret of a happy marriage remains a secret"},
    {"ID":"65","Frase":"I did not climb to the top of the food chain to eat carrots"},
    {"ID":"66","Frase":"All right everyone, line up alphabetically according to your height"},
    {"ID":"67","Frase":"Never under any circumstances take a sleeping pill and a laxative on the same night"},
    {"ID":"68","Frase":"If you try to fail, and succeed, which have you done"},
    {"ID":"69","Frase":"The two most common elements in the universe are hydrogen and stupidity"},
    {"ID":"70","Frase":"Weirdos don0t scare me. At least they're committed"},
    {"ID":"71","Frase":"Friends are people who know you are weird and like you anyway"},
    {"ID":"72","Frase":"The safe way to double your money is not crypto"},
    {"ID":"73","Frase":"Never put off till tomorrow what you can do the day after tomorrow"},
    {"ID":"74","Frase":"Always borrow money from a pessimist. He won't expect it back"},
    {"ID":"75","Frase":"Be yourself is about the worst advice you can give some people"},
    {"ID":"76","Frase":"I was trying to daydream, but my mind kept wandering"},
    {"ID":"77","Frase":"My fake plants died because I did not pretend to water them"},
    {"ID":"78","Frase":"I am an early bird and a night owl, so I am wise and I have worms"},
    {"ID":"79","Frase":"We never really grow up, we only learn how to act in public"},
    {"ID":"80","Frase":"I drink to make other people more interesting"},
    {"ID":"81","Frase":"One tequila, two tequila, three tequila, floor"},
    {"ID":"82","Frase":"Behind every successful man is a surprised mother-in-law"},
    {"ID":"83","Frase":"If you find it hard to laugh at yourself, I would be happy to do it for you"},
    {"ID":"84","Frase":"When we talk to God, we're praying. When God talks to us, we're schizophrenic"},
    {"ID":"85","Frase":"Laugh a lot. It burns a lot of calories"},
    {"ID":"86","Frase":"If you die in an elevator, be sure to push the up button"},
    {"ID":"87","Frase":"Once you give up integrity, the rest is a piece of cake"},
    {"ID":"88","Frase":"If you think education is expensive, try ignorance"},
    {"ID":"89","Frase":"I thought I was wrong once, but I was mistaken"},
    {"ID":"90","Frase":"Avoid fruits and nuts. You are what you eat"},
    {"ID":"91","Frase":"If you're too open-minded; your brains will fall out"},
    {"ID":"92","Frase":"There's a fine line between genius and insanity. I have erased this line"},
    {"ID":"93","Frase":"A camel is a horse designed by a committee"},
    {"ID":"94","Frase":"I intend to live forever. So far, so good"},
    {"ID":"95","Frase":"Did I mention how good it feels to be a Matic millionaire?"},
    {"ID":"96","Frase":"Did I mention how good it feels to be a ETH millionaire?"},
    {"ID":"97","Frase":"Crypto will do to banks what email did to the postal industry"},
    {"ID":"98","Frase":"Why Netflix & Chill when you can NFT & Chill?"},
    {"ID":"99","Frase":"Start the day with coffee. End the day with NFTs"},
    {"ID":"100","Frase":"NFTs: the next level of when wealth and ignorance collide"},
    {"ID":"101","Frase":"I've got 99 problems but Crypto for sure is one"},
    {"ID":"102","Frase":"I've got 99 problems but NFT's for sure is one"},
    {"ID":"103","Frase":"I've got 99 problems but Matic ain't one"},
    {"ID":"104","Frase":"Collecting digital art is the best hobby ever"},
    {"ID":"105","Frase":"Be very, very quiet... I'm hunting weirdos"},
    {"ID":"106","Frase":"Thats too much honey? said no one ever."},
    {"ID":"107","Frase":"What lasts 30 seconds for men and leaves them hot and sweaty? A pot of ramen noodles"},
    {"ID":"108","Frase":"You smell different when you're awake"}
    ]
    
  const { MyUser,
    setMyUser,
    Token,
    setToken,
    URL,
    ContratNft1,
    ContratStake,
    ApiNFt,
    ContratToken, Refresca, setRefresca, setNfts, setNftsInStake, Nfts, NftsInStake, MisPuntos, setMisPuntos, Statistics1, Statistics2, Statistics3, Statistics4, Statistics5,
    login,
    logOut, StakeinNft, NftStatistics, ClaimReawrd, BuscarNft, YaAprobo, Listo, YaAproboToken } = useContext(UserContext)




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
    if (Listo == true) {
      let user = Moralis.User.current();
      BuscarNft()
      YaAprobo(user.get("ethAddress"))             
      StakeinNft()
      NftStatistics()
      YaAproboToken(user.get("ethAddress"))
      setMyUser(user.get("ethAddress"))

    // console.log(Listo)
    }


  }, [Refresca]);

  return (
    <>
      <Header></Header>
      <div className="alfaCont">
        <div className="uwuClaim mobileUwuClaim" ><div className="cummulative" id="Your_RewardM"> {MisPuntos.toFixed(2)}</div> <a >

        {Token == "" ? (
                <div className="claimButton" id="connectWallet">
                  Claim
                </div>
              ) : (
                <div
                  className="claimButton"
                  id="connectWallet"
                  onClick={ClaimReawrd}
                >
                  Claim
                </div>
              )}
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
              <img src={Werido5} alt=""></img>
              <div className="bottom">
                <p>These are the bonus traits of the week, you can see the bonuses for having one or more of this traits at our FAQ section.</p>
                <i></i>
              </div>
            </div>
          </div>
        </div>

        <div className="separator"></div>
        <div className="rightBox">
          <div className="rightBoxContent" id="rightBoxContent">

            <div id="WalletD" >{MyUser.substring(0, 8)}</div>
            <div id="Your_WeirdosD"> {NftsInStake.length}/ {Nfts.length + NftsInStake.length}
            </div>
            <div className="weirdos" id="weirdosAll">
              {Nfts.map((res, i) => {
                        var rand = Math.random()*frases.length | 0;
                        var rValue = frases[rand].Frase;
                return (
                  <Cards key={i} name={res.name} id={res.id} attributes={res.attributes} img={res.img} estado={"no stake"} frase={rValue} />
                )

              })}

              {

                NftsInStake.map((res, i) => {
                  var rand = Math.random()*frases.length | 0;
                  var rValue = frases[rand].Frase;
                  return (
                    <Cards key={i} name={res.name} id={res.id} attributes={res.attributes} img={res.img} estado={"stake"} puntos={res.puntos} frase={rValue}/>
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