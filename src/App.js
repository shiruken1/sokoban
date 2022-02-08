import * as THREE from 'three';
import ReactDOM from 'react-dom'
import React, { useEffect } from "react";
import { MapControls, Stars } from "drei";
import { Canvas, useThree } from "react-three-fiber";
import { Physics, usePlane, useBox } from 'use-cannon'
import './styles.css'

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
    <Canvas shadows dpr={[1, 2]} gl={{ alpha: false }} camera={{ position: [0, 10, 0], fov: 45 }}>
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
  );
};