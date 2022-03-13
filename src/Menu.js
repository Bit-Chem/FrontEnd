import './App.css';
import React, { useState, useEffect, /*useRef*/} from 'react'
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/900.css";

import Web3Modal, { /*Provider*/ } from '@0xsequence/web3modal'
import { ethers } from 'ethers'
import { sequence } from '0xsequence'
//import ABI from "./ABIv1.json";

function ShowBalances(props) {

    console.log(props.MyBalances);
  
    function SwitchBalances(ElemNum) {
      var returnvalue = "N/A";
      switch (ElemNum) {
        case 0:
          console.log("First Run");
          break;
        case 1:
          returnvalue = ("Hydrogen");
          break;
        case 2:
          returnvalue = ("Helium");
          break;
        case 3:
          returnvalue = ("Lithium");
          break;
        case 4:
          returnvalue = ("Beryllium");
          break;
        case 5:
          returnvalue = ("Boron");
          break;
        case 6:
          returnvalue = ("Carbon");
          break;
        case 7:
          returnvalue = ("Nitrogen");
          break;
        case 8:
          returnvalue = ("Oxygen");
          break;
        case 200:
          returnvalue = ("Water");
          break;
        case 201:
          returnvalue = ("LiOH");
          break;
        default:
          break;
      }
      return returnvalue
    }
    return (
      <div>
        <div style={{height: "3vh"}}></div>
        {Object.keys(props.MyBalances).map((value, i) => {
          //console.log("key: " + value);
          //console.log("val: " + props.MyBalances[value])
          
          if (props.MyBalances[value] > 0) {
            return (
              <div key={i}>
                <div className="DropDownContainer">
                  <p style={{margin: "0px"}}>{SwitchBalances(parseInt(value))}</p>
                  <p style={{margin: "0px"}}>{props.MyBalances[value]}</p>
                  <p style={{margin: "0px"}}>mol</p>
                </div>
                <hr />
            </div>
            )
          } else return null
        })
        }
        
        
      </div>
    )
}

let providerOptions = {
    
  }
if (!window?.ethereum?.isSequence) {
    providerOptions = {
      ...providerOptions,
      sequence: {
        package: sequence,
        options: {
          appName: 'BitChem',
          defaultNetwork: 'mumbai'
        }
      }
    }
  }
export default function Menu(props) {

    const web3Modal = new Web3Modal({
      providerOptions,
      cacheProvider: true
    })
    //const [MyProvider, setProvider] = useState(null);
    const [ProviderName, setProviderName] = useState("none");
    const [Web3Styling, setWeb3Styling]= useState('Web3Button Web3Button-Disconnected')
    const [isShownHoverContent, setIsShownHoverContent] = useState(false);

    
  
    //style button
    useEffect(() => {
      if (props.MyProvider == null) {
        setProviderName("none");
        setWeb3Styling('Web3Button Web3Button-Disconnected')
      }
      else if ((props.MyProvider !== null) && (async () => await props.MyProvider.getNetwork() === 80001 ) ) {
        if (props.MyProvider.connection.url === "unknown:"){
          setProviderName("Sequence")
          setWeb3Styling('Web3Button Web3Button-Connected')
        }
        else {
        setProviderName(props.MyProvider.connection.url)
        setWeb3Styling('Web3Button Web3Button-Connected')
  
        }
      
      }
      else if ((props.MyProvider != null) && (async () => await props.MyProvider.getNetwork() !== 80001 ) ) {
        setProviderName("Wrong Chain")
        setWeb3Styling('Web3Button Web3Button-Disconnected')
      }
  
    }, [props.MyProvider])

    //check proper network and get balance if proper
    useEffect(() => {
        var provider = props.MyProvider;
        if (provider != null) {
            const GetNetwork = async () => {
                
                const TheNetwork = await provider.getNetwork();
                console.log(TheNetwork.chainId)
                if (TheNetwork.chainId !== 80001) {
                    window.alert("please switch network to polygon testnet (mumbai)")
                    console.log("DANGER")
                    window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [{
                            chainId: "0x13881",
                            rpcUrls: ["https://rpc-mumbai.matic.today", "https://matic-mumbai.chainstacklabs.com"],
                            chainName: "Polygon Testnet (Mumbai)",
                            nativeCurrency: {
                                name: "MATIC",
                                symbol: "MATIC",
                                decimals: 18
                            },
                            blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
                        }]
                    });
                    setProviderName("Wrong Network - Refresh page")
                    setWeb3Styling('Web3Button Web3Button-WrongNetwork')
                }
                else {
                    props.CheckSetBalances();
                }
                

            }
            GetNetwork().catch((err) => alert(err));
            
        }
    }, [props.MyProvider]) // eslint-disable-line react-hooks/exhaustive-deps
    
    useEffect(() => {
      if (web3Modal.cachedProvider) {
        connectWallet()
      }
    }, [web3Modal.cachedProvider]) // eslint-disable-line react-hooks/exhaustive-deps
  
    const connectWeb3Modal = async () => {
      if (web3Modal.cachedProvider) {
        web3Modal.clearCachedProvider()
      }
      connectWallet()
    }
    const connectWallet = async () => {
      try {
        console.log("Should be connecting here")
        const wallet = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(wallet, "any");
        console.log(provider);
        if (wallet.sequence) {
          provider.sequence = wallet.sequence
        }
        props.setProvider(provider);
      } catch (error) {
        console.log(error)
      }
      
  
      
    }
    return(
      <div className='MenuContainer'>
        <p 
        className={props.active === "Home" ? "MenuActive MenuElement": 'MenuElement'}
        onClick={(r) => props.setactive(r.target.innerText)}
        >Home</p>
        <p 
        className={props.active === "Transmute" ? "MenuActive MenuElement": 'MenuElement'}
        onClick={(r) => props.setactive(r.target.innerText)}
        >Transmute</p>
        <p 
        className={props.active === "Craft" ? "MenuActive MenuElement": 'MenuElement'}
        onClick={(r) => props.setactive(r.target.innerText)}
        >Craft</p>
        <p 
        className={props.active === "Gov" ? "MenuActive MenuElement": 'MenuElement'}
        onClick={(r) => props.setactive(r.target.innerText)}
        >Gov</p>
        <div className="MenuElement ButtonMenu">
          <button 
             
            onClick={(r) => connectWeb3Modal()} 
            className={Web3Styling}>
              Connected to {ProviderName} 
          </button>
          <div 
          style={{padding: "5px"}}
          onMouseEnter={() => setIsShownHoverContent(true)}
          onMouseLeave={() => setIsShownHoverContent(false)}>
          ▼
          </div>
          <div className={isShownHoverContent ? "HoverDropdown" : "hiddenStyle HoverDropdown"}>
            <ShowBalances MyBalances={props.MyBalances}/>
          </div>
        </div>
        
      </div>
    )
  }