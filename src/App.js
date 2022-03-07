import './App.css';
import React, { useState, useEffect } from 'react'
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/900.css";
import { Canvas } from '@react-three/fiber'
import MyModel from "./ptable.js";
import {MapControls } from '@react-three/drei';

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



function Menu(props) {
  var whatactive = props.active;
  function activateWeb3(r) {
    console.log(r.target)
    //connect to wallet here
  }

  return(
    <div className='MenuContainer'>
      <p 
      className={whatactive === "Home" ? "MenuActive MenuElement": 'MenuElement'}
      onClick={(r) => props.setactive(r.target.innerText)}
      >Home</p>
      <p 
      className={whatactive === "Transmute" ? "MenuActive MenuElement": 'MenuElement'}
      onClick={(r) => props.setactive(r.target.innerText)}
      >Transmute</p>
      <p 
      className={whatactive === "Craft" ? "MenuActive MenuElement": 'MenuElement'}
      onClick={(r) => props.setactive(r.target.innerText)}
      >Craft</p>
      <p 
      className={whatactive === "Gov" ? "MenuActive MenuElement": 'MenuElement'}
      onClick={(r) => props.setactive(r.target.innerText)}
      >Gov</p>
      <button onClick={(r) => activateWeb3(r)} className='MenuElement Web3Button'>Web3 Not connected</button>
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
      </header>
    </div>
  );
}

export default App;
