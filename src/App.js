import uuid from 'short-uuid';
import React, { useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Button, Menu, Dropdown } from 'semantic-ui-react';
import { MapControls, Stars, Edges, useCursor } from '@react-three/drei';
import { Physics, usePlane, useBox, useCylinder, useSphere } from '@react-three/cannon';

import './styles.css'
import { Grid } from './Grid';
import { Panel } from './Panel';

const Cube = ({ position, highlightEdges, color }) => {
  const [ ref, api ] = useBox(() => ({ mass: 1, position }))
  const [hovered, setHovered] = useState();
  useCursor(hovered, /*'pointer', 'auto'*/);
  api.position.set(1,0,0);

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}>
      <boxGeometry />
      <meshLambertMaterial color={color} />

      <Edges visible={highlightEdges} scale={1.2} >
        <meshBasicMaterial transparent color="#333" depthTest={true} />
      </Edges>

    </mesh>
  )
}

const Cylinder = ({ position, highlightEdges, color }) => {
  const [ ref ] = useCylinder(() => ({ args: [1,1,2], mass: 1, position, rotation: [0, Math.PI / 2, 0] }))

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow>
      <cylinderGeometry />
      <meshLambertMaterial color={color} />

      <Edges visible={highlightEdges} scale={2} >
        <meshBasicMaterial transparent color="#333" depthTest={true} />
      </Edges>

    </mesh>
  )
}

const PrimitivesMap = {
  Cylinder,
  Cube
};

export default function App() {
  const [ adding, setAdding ] = useState(false);
  const [ primitives, setPrimitives ] = useState([
    {
      id: uuid.generate(),
      type: 'Cube',
      color: 'hotpink',
      position: [1,9,1],
      isCurrent: true
    }]);

  const handleMove = direction => {
    const otherPrims = primitives.filter(p => !p.isCurrent);
    const currentPrim = primitives.find(p => p.isCurrent);

console.log('=-=-=- currentPrim: ', currentPrim);
    const { position } = currentPrim;
    currentPrim.position = [1,1,0];

    setPrimitives([ ...otherPrims ]);
    setPrimitives([ ...otherPrims, currentPrim ]);
  };

  const handleTurn = () => {};

  const handleAdd = (type) => {
    if(!adding) {
      setAdding(type);
    }
  };

  const handleRemove = removeAll => {

    if(removeAll || primitives.length < 2) {
      setPrimitives([]);
    } else {

      const newPrimitivesList = primitives.pop();
      const lastPrimitive = newPrimitivesList.pop();
      lastPrimitive.isCurrent = true;

      setPrimitives([ ...newPrimitivesList, lastPrimitive ]);
    }
  };

  const handleAddClick = position => {
    addShape(adding, position)
  };

  const addShape = (type, position) => {
    const newPrimitive = {
      type,
      position,
      isCurrent: true,
      id: uuid.generate(),
      color: Math.random() * 0xffffff,
    };

    if(primitives.length === 0) {
      setPrimitives([newPrimitive]);

    } else {
      const lastPrimitive = primitives.pop();
      lastPrimitive.isCurrent = false;

      setPrimitives([ ...primitives, lastPrimitive, newPrimitive ]);
    }

    setAdding(false);
  };

  const panelHandlers = { handleMove, handleAdd, handleRemove };

  const scene = primitives.map(({ id, type, position, color, isCurrent }) => {

    const Primitive = PrimitivesMap[type];
    return <Primitive
              key={id}
              color={color}
              position={position}
              highlightEdges={isCurrent} />
  });

  return (
    <div id="app">
      <Canvas
        style={{ cursor: adding ? 'crosshair' : 'auto' }}
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
            <Grid />
            { scene }
          </Physics>
      </Canvas>

      <Panel id="panel" { ...panelHandlers } />
    </div>
  );
};