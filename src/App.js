import './App.css';
import React, { useState /*useRef*/} from 'react'
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/900.css";
import ABI from "./ABIv1.json";
import { ethers } from 'ethers'



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
        <MainCraft MyProvider={props.MyProvider} CheckSetBalances={() => props.CheckSetBalances()}></MainCraft>
    </div>
    
  )
}


function App() {
  const [active, setactive] = useState("Home");

  const [MyProvider, setProvider] = useState(null);
  const [MyBalances, setMyBalances] = useState({1: 0});
  console.log(MyBalances);

  async function CheckSetBalances() {
    var provider = MyProvider;
    const address = "0x0E6a83d634A8d34E61a4A2436b8a63df05805Fe4";
    const abi = ABI;
    let isSequence = false;
    console.log(provider)

    if (provider.connection.url === "unknown:"){
      provider = provider.sequence;
      isSequence = true;
    }
    
    const signerOrProvider = await provider.getSigner();
    console.log("updating balances");
    const ThisContract = new ethers.Contract( address , abi , signerOrProvider );
    //console.log(ThisContract);
    
    const accounts = new Array(10).fill(isSequence ? provider.session.accountAddress : provider.provider.selectedAddress); 
    console.log(accounts)
    const ids = [1, 2, 3, 4, 5, 6, 7, 8, 200, 201]
    const TheseBalances = await ThisContract.balanceOfBatch(accounts, ids);
    console.log(TheseBalances)
    var TempBalanceObj = {};
    TheseBalances.map((v, i) => {
        const elemnum = ids[i];
        TempBalanceObj[elemnum] = ((parseFloat(v.toNumber()) / 10**10)).toExponential(2)
        return null
    })
    console.log(TempBalanceObj);
    setMyBalances(TempBalanceObj)
  }
  
  


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
          CheckSetBalances={() => CheckSetBalances()}
          ></Menu>
          
          
        <hr></hr>
        {active === "Home" ? <HomeScreen></HomeScreen> : null}
        {active === "Transmute" ? <TransmuteScreen MyProvider={MyProvider} CheckSetBalances={() => CheckSetBalances()}></TransmuteScreen> : null}
        {active === "Craft" ? <CraftScreen MyProvider={MyProvider} CheckSetBalances={() => CheckSetBalances()}></CraftScreen> : null}
      </header>
    </div>
  );
}

export default App;
