import './App.css';
import React, { useState } from 'react'
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/900.css";

function HomeScreen() {
  return (
    <div className='HomeContainer ContentContainer'>
      <h1>About Bit=Chem</h1>
      <p>Section explaining what Bitchem is</p>
    </div>
    
  )
}
function TransmuteScreen() {
  return (
    <div className='HomeContainer ContentContainer'>
      <div className='ExContainer'><p className='ExRate'>1 BTC = 5.148e+17J = 5.72792kg</p></div>
      <p>Transmute between Bitcoin, energy and mass</p>
      <div className='ConvContainer'>
        <div className='BTCContainer'>
          <h3>BTC</h3>
          <input></input>
          </div>
        <div className='EnergyContainer'>
          <h3>Energy</h3>
          <input></input>
        </div>
        <div className='PtableContainer'><h3>Mass</h3></div>
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
