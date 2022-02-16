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
      rotation: 0,
      type: 'Cube',
      isCurrent: true,
      color: 'hotpink',
      id: uuid.generate(),
      initPosition: [0,3,0],
      movePosition: [0,0,0],
    }
  ]);

  const panelHandlers = {
    handleMove: direction => {
      const otherPrims = primitives.filter(p => !p.isCurrent);
      const currentPrim = primitives.find(p => p.isCurrent);

      let position = [0,0,0];
      switch(direction) {
        case 'Up':
          position = [0,0,-1];
        break;
        case 'Down':
          position = [0,0,1];
        break;
        case 'Right':
          position = [1,0,0];
        break;
        case 'Left':
          position = [-1,0,0];
        break;
        default: break;
      }

      currentPrim.movePosition = position;
      setPrimitives([ ...otherPrims, currentPrim ]);
    },

    handleTurn: direction => {
      const fortyFive = Math.PI / 4;
      const otherPrims = primitives.filter(p => !p.isCurrent);
      const currentPrim = primitives.find(p => p.isCurrent);

      let { rotation } = currentPrim;
      switch(direction) {
        case 'CW':
          rotation += fortyFive;
        break;
        case 'CCW':
          rotation -= fortyFive;
        break;
        default: break;
      }

      currentPrim.rotation = rotation;
      setPrimitives([ ...otherPrims, currentPrim ]);
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
        const lastPrimitive = primitives.pop();
        lastPrimitive.isCurrent = true;

        setPrimitives([ ...primitives, lastPrimitive ]);
      }
    }
  };

  const onAddClick = initPosition => {
    if(!adding) { // Grid's onClick bounces
      return;
    }

    const newPrimitive = {
      rotation: 0,
      initPosition,
      type: adding,
      isCurrent: true,
      id: uuid.generate(),
      movePosition: [0,0,0],
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

  const scene = primitives.map(props => {

    const Primitive = PrimitivesMap[props.type];
    return <Primitive key={props.id} {...props} highlightEdges={props.isCurrent} />
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