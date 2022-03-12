import './App.css';
import React, { useState, useEffect, /*useRef*/} from 'react'
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/900.css";
import { Canvas, /*useFrame*/} from '@react-three/fiber'
import MyModel from "./ptable.js";
import {MapControls } from '@react-three/drei';

import Web3Modal, { /*Provider*/ } from '@0xsequence/web3modal'
import { ethers } from 'ethers'
import { sequence } from '0xsequence'
import WalletConnect from '@walletconnect/web3-provider'
import ABI from "./ABIv1.json";



import MainCraft from './MainCraft';

function HomeScreen() {
  return (
    <div className='HomeContainer ContentContainer'>
      <h1>About Bit=Chem</h1>
      <p>Section explaining what Bitchem is</p>
    </div>
    
  )
}

function TransmuteScreen(props) {
  const [Element, setElement] = useState(0);
  const [ElemName, setElemName] = useState("None");

  const [BTCinput, setBTCinput] = useState(0);
  const [Jinput, setJinput] = useState(0);
  const [MOLinput, setMOLinput] = useState(0);
  


  const [lastinput, setlastinput] = useState("")

  function onChange(e) {
    console.log(e);
    if (e.target.name === "BTCinput") {
      setBTCinput(e.target.value);
      setlastinput("BTCinput")
    }
    else if (e.target.name === "Jinput") {
      setJinput(e.target.value)
      setlastinput("Jinput")
    }
    else if (e.target.name === "MOLinput") {
      if (Element === 0) {
        setElement(1);
      }

      setMOLinput(e.target.value)
      setlastinput("MOLinput")
    }
  }
  function onMint(e) {
    if (props.MyProvider != null) {
      console.log(e);
      if (e.target.name === "ElementMint") {
        //address can change
        const address = "0x80aC040E4A430d51c66d307d29Db64C9C47a1634";
        const abi = ABI;
        const signerOrProvider = props.MyProvider.getSigner();

        console.log("Minting: " + ElemName);
        const ThisContract = new ethers.Contract( address , abi , signerOrProvider );
        console.log(ThisContract);
        const fnmint = "mint" + ElemName
        const contrstats = ThisContract[fnmint](Math.floor(MOLinput*(10**10)));
        console.log(contrstats)
      }
    
      else if (e.target.name === "BTCMint") {
        alert("Reverse mints Not yet implemented")
      }
    } else {alert("Please connect Wallet!")}

  }
  useEffect(() => {
    const MolarMasses = {1: 1.0079, 2: 4.0026, 3: 6.941, 4: 9.0122, 5: 10.811, 6: 12.011, 7: 14.007, 8: 16};
    if (lastinput === "BTCinput") {
      setJinput(BTCinput * 5.148e+11)
      if (Element === 0) {
        setElement(1);
      }
      setMOLinput(((Jinput/(299792458**2)*(10**3)))/MolarMasses[Element])
    }
    else if (lastinput === "Jinput") {
      setBTCinput(Jinput / 5.148e+11 )
      if (Element === 0) {
        setElement(1);
      }
      setMOLinput(((Jinput/(299792458**2))*(10**3))/MolarMasses[Element])
    }
    else if (lastinput === "MOLinput") {
      setJinput(((MOLinput * MolarMasses[Element])/(10**3))*(299792458**2));
      setBTCinput(Jinput / 5.148e+11 )
    }
  }, [BTCinput, Jinput, MOLinput, Element, lastinput])

  useEffect(() => {
    switch (Element) {
      case 0:
        console.log("First Run");
        break;
      case 1:
        setElemName("Hydrogen");
        break;
      case 2:
        setElemName("Helium");
        break;
      case 3:
        setElemName("Lithium");
        break;
      case 4:
        setElemName("Beryllium");
        break;
      case 5:
        setElemName("B");
        break;
      case 6:
        setElemName("C");
        break;
      case 7:
        setElemName("N");
        break;
      case 8:
        setElemName("Oxygen");
        break;
      default:
        break;
    }
  }, [Element]);


  return (
    <div className='HomeContainer ContentContainer'>
      <div className='ExContainer'><p className='ExRate'>1 BTC = 5.148e+11J = 5.727mg</p></div>

      <div className='ConvContainer'>
        <div className='BTCContainer'>
        <div className='EnergySymbol'>
            <h3 className='BTCSymbol'>wBTC</h3>
          </div>
          <div className='EnergyInputContainer'>
            <p className='MassText'>wBTC:</p>
            <input name="BTCinput" className='PtableInput' onChange={(e) => onChange(e)} value={BTCinput}></input>
            <button name="BTCMint" className='EnergyMint' onClick={(e) => onMint(e)}>Mint</button>
          </div>
          </div>
        <div className='EnergyContainer'>
          <div className='EnergySymbol'>
            <h3 className='PlugSymbol'>🔌</h3>
          </div>
          <div className='EnergyInputContainer'>
            <p className='MassText'>Energy:</p>
            <input name="Jinput" className='PtableInput' onChange={(e) => onChange(e)} value={Jinput}></input>
            {/*<button className='EnergyMint'>Mint</button>*/}
          </div>
        </div>
        <div className='PtableContainer'>
          <Canvas className='PtableCanvas' camera={{ position: [0, 40, 0],  near: 0, far: 100 ,zoom: 4}} orthographic>
            <pointLight position={[-10, 4, -20]} intensity={10} />
            <MyModel rotation={[0,0,0]} setElement={(res) => {setElement(res); console.log(res)}} ></MyModel>
            <MapControls></MapControls>
          </Canvas>
          
          <div className='PtableInputContainer'>
            <p className='MassText'>Mass:</p>
            <input name="MOLinput" className='PtableInput' onChange={(e) => onChange(e)} value={MOLinput}></input>
            <p className='ElementDisplay'>{ElemName}</p>
            <button name="ElementMint" className='PtableMint' onClick={(e) => onMint(e)}>Mint</button>
          </div>
          
        </div>
      </div>


    </div>
  )
}
function CraftScreen(props) {
  return (
    <div className='CraftContainer ContentContainer'>
        <MainCraft MyProvider={props.MyProvider}></MainCraft>
    </div>
    
  )
}


let providerOptions = {
  walletconnect: {
    package: WalletConnect,
    options: {
      rpc: {
        1: "	https://rpc.ankr.com/eth",
        80001: "https://rpc-mumbai.matic.today"
      },
    }
  }
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

function Menu(props) {
  
  
  const web3Modal = new Web3Modal({
    providerOptions,
    cacheProvider: true
  })
  //const [MyProvider, setProvider] = useState(null);
  const [ProviderName, setProviderName] = useState("none");
  const [Web3Styling, setWeb3Styling]= useState('Web3Button Web3Button-Disconnected')
  const [isShownHoverContent, setIsShownHoverContent] = useState(false);

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
    console.log("Should be connecting here")
    const wallet = await web3Modal.connect()
    
    
    const provider = new ethers.providers.Web3Provider(wallet, "any");
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
    
    }
    console.log(provider);
    if (wallet.sequence) {
      provider.sequence = wallet.sequence
    }

    //setProvider(provider);
    props.setProvider(provider)
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
          
        </div>
      </div>
      
    </div>
  )
}

function App() {
  const [active, setactive] = useState("Home");

  const [MyProvider, setProvider] = useState(null);



  return (
    <div className="App">
      <header className="App-header">
        <h1 className='MainTitle'>BIT CHEM</h1>
        <hr></hr>
        <Menu 
          active={active} 
          setactive={(res) => setactive(res)}
          MyProvider={MyProvider}
          setProvider={(res) => setProvider(res)}></Menu>
        <hr></hr>
        {active === "Home" ? <HomeScreen></HomeScreen> : null}
        {active === "Transmute" ? <TransmuteScreen MyProvider={MyProvider}></TransmuteScreen> : null}
        {active === "Craft" ? <CraftScreen MyProvider={MyProvider}></CraftScreen> : null}
      </header>
    </div>
  );
}

export default App;
