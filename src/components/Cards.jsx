import { useContext } from "react";
import { UserContext } from "../context/ContextUser";
import { nftAbi } from "../ABI/Nft";
import { StakeABi } from "../ABI/Stake";
import axios from "axios";
import Moralis from "moralis-v1";

function Cards(props) {
  const { MyUser, setMyUser, setToken, Token, URL, ContratNft1, ContratNft2, ContratStake, Refresca, setRefresca } =
    useContext(UserContext);

  const Stake = async () => {
    if (Token === "") return console.log("no hay token");
    const sendOptions = {
      chain: "polygon",
      contractAddress: ContratStake,
      functionName: "stake",
      abi: StakeABi,
      params: { tokenId: props.id, _collection: ContratNft1 },
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
     // console.log(transaction);

      await axios
        .post(
          `${URL}/nft/add`,
          {
            name: props.name,
            token_id: props.id,
            attributes: props.attributes,
            transaction_hash: transaction.hash,
            collAdd: ContratNft1,
          },
          {
            headers: {
                            authorization: `Bearer ${Token}`,
              'Access-Control-Request-Private-Network': 'true'
            },
          }
        )
        .then((resp) => {
          setRefresca(!Refresca)
        });
    }
  };

  const UnStake = async () => {
    if (Token === "") return console.log("no hay token");
    const sendOptions = {
      chain: "polygon",
      contractAddress: ContratStake,
      functionName: "unstake",
      abi: StakeABi,
      params: { tokenId: props.id, _collection: ContratNft1 },
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

      await axios
        .delete(`${URL}/nft/deleteStake/${props.id}/${ContratNft1}`, {
          headers: {
                          authorization: `Bearer ${Token}`,
              'Access-Control-Request-Private-Network': 'true'
          },
        })
        .then((resp) =>{
          setRefresca(!Refresca)
        });
    }
  };

  return (
    <>
      {props.estado == "stake" ? (
        <div className="emptyWeirdo  checkW" onClick={UnStake}>
          <img src={props.img} alt="weirdo"></img>
          <div className="yellowBand">{props.name} - {props.puntos.toFixed(2)}UWU</div>
          <div className="weirdMessage">
              {props.frase}
          </div>
        </div>
      ) : (
        <div className="emptyWeirdo crossW" onClick={Stake}>
          <img src={props.img} alt="weirdo"></img>
          <div className="yellowBand">{props.name}  </div>
          <div className="weirdMessage">
          {props.frase}
          </div>
        </div>
      )}

    </>
  );
}

export default Cards;
