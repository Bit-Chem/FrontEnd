import './App.css';
import React, { useState, useEffect, useRef } from 'react'
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/900.css";
import { Canvas, useFrame} from '@react-three/fiber'
import MyModel from "./ptable.js";
import {MapControls, Image } from '@react-three/drei';

import Web3Modal, { Provider } from '@0xsequence/web3modal'
import { ethers } from 'ethers'
import { sequence } from '0xsequence'
import WalletConnect from '@walletconnect/web3-provider'


import { StandaloneStructService } from 'ketcher-standalone'
import {Editor} from 'ketcher-react'

import Viewer from 'miew-react'
import MainCraft from './MainCraft';

function HomeScreen() {
  return (
    <div className='HomeContainer ContentContainer'>
      <h1>About Bit=Chem</h1>
      <p>Section explaining what Bitchem is</p>
    </div>
    
  )
}

function TransmuteScreen() {
  const [Element, setElement] = useState(0);
  const [ElemName, setElemName] = useState("None");

  useEffect(() => {
    switch (Element) {
      case 0:
        console.log("First Run");
        break;
      case 1:
        setElemName("H");
        break;
      case 2:
        setElemName("He");
        break;
      case 3:
        setElemName("Li");
        break;
      case 4:
        setElemName("Be");
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
        setElemName("O");
        break;
      default:
        break;
    }
  }, [Element]);


  return (
    <div className='HomeContainer ContentContainer'>
      <div className='ExContainer'><p className='ExRate'>1 BTC = 5.148e+17J = 5.72792kg</p></div>

      <div className='ConvContainer'>
        <div className='BTCContainer'>
        <div className='EnergySymbol'>
            <h3 className='BTCSymbol'>wBTC</h3>
          </div>
          <div className='EnergyInputContainer'>
            <p className='MassText'>wBTC:</p>
            <input className='PtableInput'></input>
            <button className='EnergyMint'>Mint</button>
          </div>
          </div>
        <div className='EnergyContainer'>
          <div className='EnergySymbol'>
            <h3 className='PlugSymbol'>🔌</h3>
          </div>
          <div className='EnergyInputContainer'>
            <p className='MassText'>Energy:</p>
            <input className='PtableInput'></input>
            <button className='EnergyMint'>Mint</button>
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
            <input className='PtableInput'></input>
            <p className='ElementDisplay'>{ElemName}</p>
            <button className='PtableMint'>Mint</button>
          </div>
          
        </div>
      </div>


    </div>
  )
}
function CraftScreen() {
  return (
    <div className='CraftContainer ContentContainer'>
        <MainCraft></MainCraft>
    </div>
    
  )
}


let providerOptions = {
  walletconnect: {
    package: WalletConnect,
    options: {
      infuraId: 'xxx-your-infura-id-here'
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
        defaultNetwork: 'ethereum'
      }
    }
  }
}

function Menu(props) {
  
  
  const web3Modal = new Web3Modal({
    providerOptions,
    cacheProvider: true
  })
  const [MyProvider, setProvider] = useState(null);
  const [ProviderName, setProviderName] = useState("none");
  const [Web3Styling, setWeb3Styling]= useState('MenuElement Web3Button-Disconnected')

  useEffect(() => {
    if (MyProvider !== null) {
      setProviderName(MyProvider.connection.url)
      setWeb3Styling('MenuElement Web3Button-Connected')
    }
    else if (MyProvider == null) {
      setProviderName("none");
      setWeb3Styling('MenuElement Web3Button-Disconnected')
    }
  }, [MyProvider])
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet()
    }
  }, [])

  const connectWeb3Modal = async () => {
    if (web3Modal.cachedProvider) {
      web3Modal.clearCachedProvider()
    }
    connectWallet()
  }
  const connectWallet = async () => {
    console.log("Should be connecting here")
    const wallet = await web3Modal.connect()
    
    const provider = new ethers.providers.Web3Provider(wallet)
    console.log(provider);
    if (wallet.sequence) {
      provider.sequence = wallet.sequence
    }

    setProvider(provider);
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
      <button onClick={(r) => connectWeb3Modal()} className={Web3Styling}>Connected to {ProviderName} </button>
    </div>
  )
}

function App() {
  const [active, setactive] = useState("Home");


  return (
    <div className="App">
      <header className="App-header">
        <h1 className='MainTitle'>BIT CHEM</h1>
        <hr></hr>
        <Menu active={active} setactive={(res) => setactive(res)}></Menu>
        <hr></hr>
        {active === "Home" ? <HomeScreen></HomeScreen> : null}
        {active === "Transmute" ? <TransmuteScreen></TransmuteScreen> : null}
        {active === "Craft" ? <CraftScreen></CraftScreen> : null}
      </header>
    </div>
  );
}

export default App;
