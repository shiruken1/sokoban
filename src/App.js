import uuid from 'short-uuid';
import { Vector3 } from 'three';
import React, { useState } from 'react';
import { Physics } from '@react-three/cannon';
import { Canvas, useThree } from '@react-three/fiber';
import { MapControls, Stars } from '@react-three/drei';

import './styles.css'
import { Grid } from './Grid';
import { Panel } from './Panel';
import * as PrimitivesMap from './Primitives';

export default function App() {
  const [ adding, setAdding ] = useState(false);
  const [ primitives, setPrimitives ] = useState([
    {
      id: uuid.generate(),
      type: 'Cube',
      color: 'hotpink',
      position: [0,5,0],
      isCurrent: true
    }
  ]);

  const panelHandlers = {
    handleMove: direction => {
      const otherPrims = primitives.filter(p => !p.isCurrent);
      const currentPrim = primitives.find(p => p.isCurrent);

      let position = [0,3,0];
      switch(direction) {
        case 'Up':
          position = [0,3,-2];
        break;
        case 'Down':
          position = [0,3,2];
        break;
        case 'Right':
          position = [2,3,0];
        break;
        case 'Left':
          position = [-2,3,0];
        break;
        default: break;
      }

      currentPrim.position = position;
      setPrimitives([ ...otherPrims, currentPrim ]);
    },

    handleTurn: direction => {

    },

    handleAdd: (type) => {
      if(!adding) {
        setAdding(type);
      }
    },

    handleRemove: removeAll => {
      if(removeAll || primitives.length < 2) {
        setPrimitives([]);
      } else {

        const newPrimitivesList = primitives.pop();
        const lastPrimitive = newPrimitivesList.pop();
        lastPrimitive.isCurrent = true;

        setPrimitives([ ...newPrimitivesList, lastPrimitive ]);
      }
    }
  };

  const onAddClick = position => {
    if(!adding) { // Grid's onClick bounces
      return;
    }

    const newPrimitive = {
      position,
      type: adding,
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
        style={{ cursor: adding ? 'crosshair' : 'inherit' }}
        shadows
        dpr={[1, 2]}
        gl={{ alpha: false }}
        camera={{ position: [0, 10, 0], fov: 45 }}>
          <MapControls />
          <Stars />
          <ambientLight />
          <directionalLight position={[10, 10, 10]} castShadow shadow-mapSize={[2048, 2048]} />
          <Physics>
            <Grid handleAddClick={onAddClick} />
            { scene }
          </Physics>
          <color attach="background" args={['lightblue']} />
      </Canvas>

      <Panel id="panel" { ...panelHandlers } />
    </div>
  );
};