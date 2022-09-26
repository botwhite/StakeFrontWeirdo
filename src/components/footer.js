import Collapsible from 'react-collapsible';
export function Footer(){
 
    return(
    <>
    <div className="foot" id="foot"> 
         
        <div className="foot2">
            <div className="whitespace  hideMob">
                <p className="paragraph">We welcome you to the new version of the weirdo staking system! We named it "The Underworld Connection", why? you may ask. Talking with someone in the underworld is not an easy thing, that is why we developed this new styled connection system, combining the best of the OUIJA board, tarot cards, magic spells and nasty magical animals. Weirdos now can communicate with you, throwing funny and not so smart quotes to you anytime you stake them.</p>
            </div>
            <div className="colla">
                <Collapsible triggerOpenedClassName='trigger' triggerClassName='trigger' trigger={"+ What's new on this new staking system?"}  >
                <div className='contentCollapse ' >
                <p>We added 3 major updates to this new version of the staking that will benefit all the weirdos that are part of our community:<br/> 
                <br/> 
                <b className="i-33">◉ Staked Token:</b>
                As you all might know, with the past stake, we didn’t know how many holders we had in total, because when you stake your weirdo, you kind of "lost" it from your wallet. Now you will get a UWS token (UW Staked), this token will be used to set up collab.land again on our Discord.<br/> 
                <b className="i-33">◉ Mined Reward Saving:</b>   
                On the past stake, when we decide to give 2x rewards, it changed the amount of your already mined UWU, and once it get back to normal rewards, if you haven’t claimed, you will lose the bonus. Now with this option, I will save the mined amount of each user every time I make a change, that way you won’t need to claim before or at the end of an event.<br/> 
                <b className="i-33">◉ Trait Bonuses:</b>
                The best improvement on our staking. Each week we will pick 3 random traits from our collection (clothing, head accessories or face), and any staked weirdos with these traits will have additional rewards.</p>
                </div> 
                </Collapsible>

                <Collapsible triggerOpenedClassName='trigger' triggerClassName='trigger' trigger={"+ You mentioned bonuses! Tell me more."}>
                <div className={'contentCollapse'} >
                <p>The base daily reward of a weirdo is 1 $UWU (it will change for special occasions). As we mentioned, 3 traits will be picked each week, weirdos that have one or more of these traits, will generate more rewards:<br/>
                    <br/>
                    -Having one (1) of the traits will grant this weirdo x1.5 times more rewards<br/>
                    -Having two (2) of the traits will grant this weirdo x3 times more rewards<br/>
                    -Having three (3) of the traits will grant this weirdo x10 times more rewards</p>
                </div>
                </Collapsible>

                <Collapsible triggerOpenedClassName='trigger' triggerClassName='trigger' trigger={"+ What should I do to stake my weirdos?"}> 
                <div className={`contentCollapse`}>
                <p>It's pretty easy, first of all you need some weirdos that you can mint or buy at Opensea, if you already got some, click the connect button on the top menu (you will know you are connected cuz the button will change to 'Claim Rewards' <i className="i-33">~we recommend you to refresh the site after this.</i><br/>
                    <br/>
                    The second step will be to approve the stake and the token -both buttons can be found at the top menu<br/>
                    Click each one and wait until the transaction is confirmed. Your weirdos will show up! But wait, they have a red 'x' on the top corner? Yes, that means they are not stake yet.<br/> 
                    To stake them, click the picture of the weirdo and the transaction will pop-up, accept it and refresh the site once is approved (to speed up the change on the weirdo).<br/>
                    <br/>
                    Once your weirdo is staked it will be moved to the end of the weirdo card list and it will show a green checkmark on the top corner. That is! Your weirdo is already staked.<br/>
                    <br/>
                    ~You can see how many weirdos you have staked on the ouija board, bellow your wallet address.</p>
                </div>
                </Collapsible>

                <Collapsible triggerOpenedClassName='trigger' triggerClassName='trigger' trigger={"+ Can I unstake my weirdos whenever I want?"}>
                <div className={`contentCollapse`}>
                <p>Yes, you can withdraw the weirdos from the stake whenever you want, but by doing so you will stop receiving rewards.</p>
                </div> 
                </Collapsible>

                <Collapsible triggerOpenedClassName='trigger' triggerClassName='trigger' trigger={"+ What is the $UWU token used for?"}>
                <div className={`contentCollapse`}>
                <p>With it you can buy a new NFT, acquire loot boxes with prizes (MATIC, ETH, NFT's from many collections and more) or you can sell it on Quickswap.</p>
                </div> 
                </Collapsible>
     

              
            
            </div>
            
        </div>
        <div className="devil ">
            <img src="res/evildevils.png" alt=""></img>
        </div>
    </div>
    </>
    )
}