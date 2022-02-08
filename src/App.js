import './styles.css'
import * as THREE from 'three';
import React, { useEffect } from "react";
import { MapControls, Stars } from "drei";
import { Button, Dropdown } from 'semantic-ui-react'
import { Canvas, useThree } from "react-three-fiber";
import { Physics, usePlane, useBox } from 'use-cannon'

// function SpiffyButton({ children }) {
//   return (
//     <button className="fancy" onClick={() => console.log('eyyyy')}>
//       <span className="top-key"></span>
//       {children}
//       <span className="bottom-key-1"></span>
//       <span className="bottom-key-2"></span>
//     </button>
//   );
// }

function Plane(props) {
  const [ ref ] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
    <gridHelper args={[50, 50, 'blue', 'blue']} rotation={[-Math.PI / 2, 0, 0]}/>
    </mesh>
  );
}

function Cube(props) {
  const [ ref ] = useBox(() => ({ mass: 1, position: [0, 1, 0], rotation: [1, 0, 0], ...props }))

  return (
    <mesh receiveShadow castShadow ref={ref}>
      <boxGeometry />
      <meshLambertMaterial color="hotpink" />
    </mesh>
  )
}

export default function App() {
  return (
    <div id="app">
    <div id="canvas">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ alpha: false }}
        camera={{ position: [0, 10, 0], fov: 45 }}>
        <MapControls />
        <Stars />
        <color attach="background" args={['lightblue']} />
        <ambientLight />
        <directionalLight position={[10, 10, 10]} castShadow shadow-mapSize={[2048, 2048]} />
        <Physics>
          <Plane position={[-1, -1, -1]} />
          <Cube position={[0, 0, 0]} />
        </Physics>
      </Canvas>
      </div>
      <div id="panel">
        <Button primary onClick={() => console.log('eyyyy')}>Add</Button>
        <Button onClick={() => console.log('eyyyy')}>Remove</Button>
        <Button onClick={() => console.log('eyyyy')}>Remove All</Button>
      </div>
    </div>
  );
};