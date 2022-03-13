import './App.css';
import React, { useState /*useRef*/} from 'react'
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/900.css";



import MainCraft from './MainCraft';
import TransmuteScreen from "./TransmuteScreen"
import Menu from "./Menu"




function HomeScreen() {
  return (
    <div className='HomeContainer ContentContainer'>
      <div style={{padding: " 0px 3vw 0px 3vw"}}>
        <h3>Welcome to Bit=Chem</h3>
        <p>Bitchem aims to be a cross between an educational tool, a chemical simulator and a blockchain game.</p>
        <p style={{fontSize: 15}}>
          Get Started by connecting your wallet - matamask and sequence wallet supported (make sure to switch to testnet mode - contracts deployed to mumbai).
          Then you may go to the Transmute section to mint psysically acurate chemical elements, the first 8 are currently supported. 
          Once you have at least some Hydrogen and Oxygen, you may go to the Craft screen to react them into water. Currently only reaction
          between Oxygen + Hydrogen, and water + Lithium are supported.
        </p>
        <p style={{fontSize: 15}}>
          Minting elements aims to be physically accurate by using E = mc^2, where E is directly correlated to the amount of energy it takes to mine 1 bitcoin. 
          Thus in effect, bitcoin can be directly exchanged to tokens that represent the energy if the conversion was 100% efficent. These elements 
          can be combined into infinity many elements. They can also act as primitives for other blockchain games that require physically accurate elements. 
          In the future, gov can be implemented to add more elements and reactions.
        </p>
        <p style={{fontSize: 15}}>
          Currently, minting elements do not require wBTC to transmute to reduce complications on testnet.
        </p>
        <p></p>
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


function App() {
  const [active, setactive] = useState("Home");

  const [MyProvider, setProvider] = useState(null);
  const [MyBalances, setMyBalances] = useState({1: 0});
  console.log(MyBalances);
  
  


  return (
    <div className="App">
      <header className="App-header">
        <h1 className='MainTitle'>BIT CHEM</h1>
        <hr></hr>
        <Menu 
          active={active} 
          setactive={(res) => setactive(res)}
          MyProvider={MyProvider}
          setProvider={(res) => setProvider(res)}
          MyBalances={MyBalances}
          setMyBalances={(res) => setMyBalances(res)}
          ></Menu>
          
          
        <hr></hr>
        {active === "Home" ? <HomeScreen></HomeScreen> : null}
        {active === "Transmute" ? <TransmuteScreen MyProvider={MyProvider}></TransmuteScreen> : null}
        {active === "Craft" ? <CraftScreen MyProvider={MyProvider}></CraftScreen> : null}
      </header>
    </div>
  );
}

export default App;
