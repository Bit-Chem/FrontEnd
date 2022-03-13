import './App.css';
import React, { useState, useEffect, /*useRef*/} from 'react'
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/900.css";
import { Canvas, /*useFrame*/} from '@react-three/fiber'
import MyModel from "./ptable.js";
import {MapControls } from '@react-three/drei';

import { ethers } from 'ethers'
import ABI from "./ABIv1.json";

function sleep(milliseconds) {  
  return new Promise(resolve => setTimeout(resolve, milliseconds));  
}  

export default function TransmuteScreen(props) {
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
    async function CheckConfirm(TXpromise) {
      try {
        let TransactionComplete = await TXpromise;
        const txReceipt = await props.MyProvider.getTransaction(TransactionComplete.hash)
        sleep(5000).then( () => {
          console.log(txReceipt)
          if (txReceipt.confirmations > 0) {
            props.CheckSetBalances();
            alert("TX confirmed")
          }
          else {CheckConfirm(TransactionComplete)}
        })
      } catch (error) {
        console.log(error)
      }
    }
    function onMint(e) {
      if (props.MyProvider != null) {
        console.log(e);
        if (e.target.name === "ElementMint") {
          //address can change
          try {
            const address = "0x0E6a83d634A8d34E61a4A2436b8a63df05805Fe4";
            const abi = ABI;
            const signerOrProvider = props.MyProvider.getSigner();
    
            console.log("Minting: " + ElemName);
            const ThisContract = new ethers.Contract( address , abi , signerOrProvider );
            console.log(ThisContract);
            const fnmint = "mint" + ElemName
            const contrstats = ThisContract[fnmint](Math.floor(MOLinput*(10**10)));
            console.log(contrstats)
            CheckConfirm(contrstats)
          } catch (error) {
            console.log(error)
          }
          
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
          setElemName("Boron");
          break;
        case 6:
          setElemName("Carbon");
          break;
        case 7:
          setElemName("Nitrogen");
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
              <p style={{padding: "5px"}}>J</p>
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
              <p className='MassText'>Elements:</p>
              <input name="MOLinput" className='PtableInput' onChange={(e) => onChange(e)} value={MOLinput}></input>
              <p style={{padding: "5px"}}>mol</p>
              <p className='ElementDisplay'>{ElemName}</p>
              
              <button name="ElementMint" className='PtableMint' onClick={(e) => onMint(e)}>Mint</button>
            </div>
            
          </div>
        </div>
  
  
      </div>
    )
  }