import React, {useState, useEffect, useCallback} /*{ Suspense, useRef, useEffect }*/ from "react";
/*import { useGLTF, Image, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from 'three';*/
import Unity, { UnityContext } from "react-unity-webgl";
import { ethers } from 'ethers'
import ABI from "./ABIv1.json";


const unityContext = new UnityContext({
  loaderUrl: "NewBuild10/Build/NewBuild10.loader.js",
  dataUrl: "NewBuild10/Build/NewBuild10.data",
  frameworkUrl: "NewBuild10/Build/NewBuild10.framework.js",
  codeUrl: "NewBuild10/Build/NewBuild10.wasm",
});

export default function MainCraft(props) {
  const [progression, setProgression] = useState(0);
  const [progressionStyle, setProgressionStyle] = useState("");


  const RXFN = useCallback(async function ReactionTransaction(fncreate, beaker, elem1, elem2) {
    //Edit as nessasary
    const address = "0x80aC040E4A430d51c66d307d29Db64C9C47a1634";
    const abi = ABI;
    if (beaker === "cheapBeaker") { beaker = 1000}
    console.log(beaker)
    const signerOrProvider = props.MyProvider.getSigner();

    console.log("Reaction occuring");

    const ThisContract = new ethers.Contract( address , abi , signerOrProvider );
    const EXE_TX = ThisContract[fncreate];
    console.log(ThisContract);
    try {
      await EXE_TX(1000);
    } catch (error) {
      alert(error.data.message)
      console.log(error.data.message)
    }
    
  }, [props.MyProvider]);

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