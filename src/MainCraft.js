import React, {useState, useEffect, useCallback} /*{ Suspense, useRef, useEffect }*/ from "react";
/*import { useGLTF, Image, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from 'three';*/
import Unity, { UnityContext } from "react-unity-webgl";
import { ethers } from 'ethers'
import ABI from "./ABIv1.json";


const unityContext = new UnityContext({
  loaderUrl: "NewBuild13/Build/NewBuild13.loader.js",
  dataUrl: "NewBuild13/Build/NewBuild13.data",
  frameworkUrl: "NewBuild13/Build/NewBuild13.framework.js",
  codeUrl: "NewBuild13/Build/NewBuild13.wasm",
});

function sleep(milliseconds) {  
  return new Promise(resolve => setTimeout(resolve, milliseconds));  
}  


export default function MainCraft(props) {

  

  const [progression, setProgression] = useState(0);
  const [progressionStyle, setProgressionStyle] = useState("");

  async function CheckConfirm(TransactionComplete) {
      const txReceipt = await props.MyProvider.getTransaction(TransactionComplete.hash)
      sleep(2000).then( () => {
        console.log(txReceipt)
        if (txReceipt.confirmations > 0) {
          props.CheckSetBalances();
          alert("TX confirmed")
        }
        else {CheckConfirm(TransactionComplete)}
      })
  }


  const RXFN = useCallback(async function ReactionTransaction(fncreate, beaker, elem1, elem2) {
    //Edit as nessasary
    const address = "0x0E6a83d634A8d34E61a4A2436b8a63df05805Fe4";
    const abi = ABI;
    //if (beaker === "cheapBeaker") { beaker = 1000}
    //console.log(beaker)
    const signerOrProvider = props.MyProvider.getSigner();
    console.log(elem1);
    console.log(typeof(elem1));
    console.log("Reaction occuring");

    const ThisContract = new ethers.Contract( address , abi , signerOrProvider );
    const EXE_TX = ThisContract[fncreate];
    console.log(ThisContract);
    try {
      var TransactionComplete = await EXE_TX(elem1 * 10**10);
      console.log(TransactionComplete);
      CheckConfirm(TransactionComplete);
      
    } catch (error) {
      console.log(error)
      if (error.data != null) {
        alert(error.data.message)
      }
    }
    
  }, [props.MyProvider]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(function () {
    
    
    unityContext.on("GameOver", function (userName, score) {
      console.log("Passing params to react")
      console.log("username is" + userName + "score is: " + score)
      //signit();
    });
    unityContext.on("SendTransaction", function (fncreate, beaker, elem1, elem2) {
     RXFN(fncreate, beaker, elem1, elem2)  
    }
    );
  }, [RXFN]);
  
  useEffect(function () {
    unityContext.on("progress", function (progression) {
      setProgression(progression);
      console.log(progression)
      if (progression === 1) {
        setProgressionStyle("hiddenStyle")
        console.log(progression)
      }
    });
  }, []);

  return (
    <div>
      <p className={progressionStyle}>Loading {progression * 100} percent...</p>
      <div>
        <Unity unityContext={unityContext} className="UnityObject"/>
      </div>
    </div>
  );
}

/*
export default function MainCraft(props) {
  const ref = useRef()
  useEffect(() => {
    if (ref.current == undefined) {
      console.log("ref undefined")
    }
    else {
      ref.current.material.map.magFilter = THREE.NearestFilter; 
      ref.current.material.map.minFilter = THREE.NearestFilter;
      console.log("Shoule Be fixed???")
    }
  }, [ref]);

  useFrame(() => {
    ref.current.material.zoom = 1 // 1 and higher
    ref.current.material.grayscale = 1 // between 0 and 1
    if (ref.current !== undefined) {ref.current.material.map.magFilter = THREE.NearestFilter; 
      ref.current.material.map.minFilter = THREE.NearestFilter;
    }
    
  }, -1)
  return (
    <Suspense fallback={null}>
       <Image ref={ref} className="MyIMG" url="/Pixel-assets/flask3.png"  />
       <OrbitControls></OrbitControls>
    </Suspense>
    
  );
}
*/