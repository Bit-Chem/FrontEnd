import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/TestTable2.glb");
  return (
    <group ref={group} {...props}  dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table118"].geometry}
        material={nodes["periodic-table118"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
        onClick={() => props.setElement(1)}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table119"].geometry}
        material={materials["Material.003"]}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
        onClick={() => props.setElement(2)}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table120"].geometry}
        material={materials["Material.004"]}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
        onClick={() => props.setElement(3)}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table121"].geometry}
        material={materials["Material.005"]}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
        onClick={() => props.setElement(4)}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table122"].geometry}
        material={materials["Material.006"]}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
        onClick={() => props.setElement(5)}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table123"].geometry}
        material={nodes["periodic-table123"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
        onClick={() => props.setElement(6)}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table124"].geometry}
        material={nodes["periodic-table124"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
        onClick={() => props.setElement(7)}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table125"].geometry}
        material={nodes["periodic-table125"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
        onClick={() => props.setElement(8)}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table126"].geometry}
        material={nodes["periodic-table126"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table127"].geometry}
        material={nodes["periodic-table127"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table128"].geometry}
        material={nodes["periodic-table128"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table129"].geometry}
        material={nodes["periodic-table129"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table130"].geometry}
        material={nodes["periodic-table130"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table131"].geometry}
        material={nodes["periodic-table131"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table132"].geometry}
        material={nodes["periodic-table132"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table133"].geometry}
        material={nodes["periodic-table133"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table134"].geometry}
        material={nodes["periodic-table134"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table135"].geometry}
        material={nodes["periodic-table135"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table136"].geometry}
        material={nodes["periodic-table136"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table137"].geometry}
        material={nodes["periodic-table137"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table138"].geometry}
        material={nodes["periodic-table138"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table139"].geometry}
        material={nodes["periodic-table139"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table140"].geometry}
        material={nodes["periodic-table140"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table141"].geometry}
        material={nodes["periodic-table141"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table142"].geometry}
        material={nodes["periodic-table142"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table143"].geometry}
        material={nodes["periodic-table143"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table144"].geometry}
        material={nodes["periodic-table144"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table145"].geometry}
        material={nodes["periodic-table145"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table146"].geometry}
        material={nodes["periodic-table146"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table147"].geometry}
        material={nodes["periodic-table147"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table148"].geometry}
        material={nodes["periodic-table148"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table149"].geometry}
        material={nodes["periodic-table149"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table150"].geometry}
        material={nodes["periodic-table150"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table151"].geometry}
        material={nodes["periodic-table151"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table152"].geometry}
        material={nodes["periodic-table152"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table153"].geometry}
        material={nodes["periodic-table153"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table154"].geometry}
        material={nodes["periodic-table154"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table155"].geometry}
        material={nodes["periodic-table155"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table156"].geometry}
        material={nodes["periodic-table156"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table157"].geometry}
        material={nodes["periodic-table157"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table158"].geometry}
        material={nodes["periodic-table158"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table159"].geometry}
        material={nodes["periodic-table159"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table160"].geometry}
        material={nodes["periodic-table160"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table161"].geometry}
        material={nodes["periodic-table161"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table162"].geometry}
        material={nodes["periodic-table162"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table163"].geometry}
        material={nodes["periodic-table163"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table164"].geometry}
        material={nodes["periodic-table164"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table165"].geometry}
        material={nodes["periodic-table165"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table166"].geometry}
        material={nodes["periodic-table166"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table167"].geometry}
        material={nodes["periodic-table167"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table168"].geometry}
        material={nodes["periodic-table168"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table169"].geometry}
        material={nodes["periodic-table169"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table170"].geometry}
        material={nodes["periodic-table170"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table171"].geometry}
        material={nodes["periodic-table171"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table172"].geometry}
        material={nodes["periodic-table172"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table173"].geometry}
        material={nodes["periodic-table173"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table174"].geometry}
        material={nodes["periodic-table174"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table175"].geometry}
        material={nodes["periodic-table175"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table176"].geometry}
        material={nodes["periodic-table176"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table177"].geometry}
        material={nodes["periodic-table177"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table178"].geometry}
        material={nodes["periodic-table178"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table179"].geometry}
        material={nodes["periodic-table179"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table180"].geometry}
        material={nodes["periodic-table180"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table181"].geometry}
        material={nodes["periodic-table181"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table182"].geometry}
        material={nodes["periodic-table182"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table183"].geometry}
        material={nodes["periodic-table183"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table184"].geometry}
        material={nodes["periodic-table184"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table185"].geometry}
        material={nodes["periodic-table185"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table186"].geometry}
        material={nodes["periodic-table186"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table187"].geometry}
        material={nodes["periodic-table187"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table188"].geometry}
        material={nodes["periodic-table188"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table189"].geometry}
        material={nodes["periodic-table189"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table190"].geometry}
        material={nodes["periodic-table190"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table191"].geometry}
        material={nodes["periodic-table191"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table192"].geometry}
        material={nodes["periodic-table192"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table193"].geometry}
        material={nodes["periodic-table193"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table194"].geometry}
        material={nodes["periodic-table194"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table195"].geometry}
        material={nodes["periodic-table195"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table196"].geometry}
        material={nodes["periodic-table196"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table197"].geometry}
        material={nodes["periodic-table197"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table198"].geometry}
        material={nodes["periodic-table198"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table199"].geometry}
        material={nodes["periodic-table199"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table200"].geometry}
        material={nodes["periodic-table200"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table201"].geometry}
        material={nodes["periodic-table201"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table202"].geometry}
        material={nodes["periodic-table202"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table203"].geometry}
        material={nodes["periodic-table203"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table204"].geometry}
        material={nodes["periodic-table204"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table205"].geometry}
        material={nodes["periodic-table205"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table206"].geometry}
        material={nodes["periodic-table206"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table207"].geometry}
        material={nodes["periodic-table207"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table208"].geometry}
        material={nodes["periodic-table208"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table209"].geometry}
        material={nodes["periodic-table209"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table210"].geometry}
        material={nodes["periodic-table210"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table211"].geometry}
        material={nodes["periodic-table211"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table212"].geometry}
        material={nodes["periodic-table212"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table213"].geometry}
        material={nodes["periodic-table213"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table214"].geometry}
        material={nodes["periodic-table214"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table215"].geometry}
        material={nodes["periodic-table215"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table216"].geometry}
        material={nodes["periodic-table216"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table217"].geometry}
        material={nodes["periodic-table217"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table218"].geometry}
        material={nodes["periodic-table218"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table219"].geometry}
        material={nodes["periodic-table219"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table220"].geometry}
        material={nodes["periodic-table220"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table221"].geometry}
        material={nodes["periodic-table221"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table222"].geometry}
        material={nodes["periodic-table222"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table223"].geometry}
        material={nodes["periodic-table223"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table224"].geometry}
        material={nodes["periodic-table224"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table225"].geometry}
        material={nodes["periodic-table225"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table226"].geometry}
        material={nodes["periodic-table226"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table227"].geometry}
        material={nodes["periodic-table227"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table228"].geometry}
        material={nodes["periodic-table228"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table229"].geometry}
        material={nodes["periodic-table229"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table230"].geometry}
        material={nodes["periodic-table230"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table231"].geometry}
        material={nodes["periodic-table231"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table232"].geometry}
        material={nodes["periodic-table232"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table233"].geometry}
        material={nodes["periodic-table233"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table234"].geometry}
        material={nodes["periodic-table234"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["periodic-table235"].geometry}
        material={nodes["periodic-table235"].material}
        position={[-45.43, 0, -19.01]}
        scale={[0.13, 1, 0.13]}
      />
    </group>
  );
}

useGLTF.preload("/TestTable2.glb");