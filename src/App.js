import './styles.css'
// import * as THREE from 'three';
import React, { useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Button, Menu, Dropdown } from 'semantic-ui-react';
import { MapControls, Stars, Edges } from '@react-three/drei';
import { Physics, usePlane, useBox } from '@react-three/cannon';

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

function Cube({ position, isSelected, color }) {
  const [ ref ] = useBox(() => ({ mass: 1, rotation: [1, 0, 0], position }))

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      // onClick={(event) => click(!clicked)}
      >
      <boxGeometry />
      <meshLambertMaterial color={color} />

      <Edges visible={isSelected} scale={1.2} >
        <meshBasicMaterial transparent color="#333" depthTest={false} />
      </Edges>

    </mesh>
  )
}

export default function App() {
  const [ primSelected, setPrimSelected ] = useState('');

  return (
    <div id="app">
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
            <Cube color="hotpink" position={[0, 0, 0]} isSelected={true} />
          </Physics>
      </Canvas>

      <div id="panel">
        <Menu>
          <Menu.Menu position='left'>
            <Dropdown
              item
              text='Move'
              upward={true}
              options={[
                { key: 1, text: 'North', value: 1 },
                { key: 2, text: 'East', value: 2 },
                { key: 3, text: 'South', value: 3 },
                { key: 4, text: 'West', value: 4 }
              ]}
            />
            <Dropdown
              item
              text='Turn'
              upward={true}
              options={[
                { key: 1, text: 'Clockwise', value: 1 },
                { key: 2, text: 'Counter-Clockwise', value: 2 },
              ]}
            />
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Dropdown
              item
              text='Add'
              upward={true}
              options={[
                { key: 1, text: 'Red Box', value: 1 },
                { key: 2, text: 'Green Cylinder', value: 2 },
                { key: 3, text: 'Blue Pyramid', value: 3 }
              ]}
            />
            <Dropdown
              item
              text='Remove'
              upward={true}
              options={[
                { key: 1, text: 'Remove Selected', value: 1 },
                { key: 2, text: 'Remove All', value: 2 },
              ]}
            />
          </Menu.Menu>
        </Menu>
      </div>
    </div>
  );
};