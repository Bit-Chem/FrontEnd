import React, { Suspense, useRef, useEffect } from "react";
import { useGLTF, Image, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "build/TestBuild.loader.js",
  dataUrl: "build/TestBuild.data.gz",
  frameworkUrl: "build/TestBuild.framework.js.gz",
  codeUrl: "build/TestBuild.wasm.gz",
});

export default function MainCraft(props) {
  
  return (
    <Unity unityContext={unityContext} className="UnityObject"/>
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