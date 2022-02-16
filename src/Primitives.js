import { useState, useEffect } from 'react';
import { Edges, useCursor } from '@react-three/drei';
import { useBox, useCylinder, useSphere } from '@react-three/cannon';

const CUBE_POSITION_MULTIPLIER = 5;
const INITIAL_CUBE_ROTATION = [0,0,0];

const CONE_POSITION_MULTIPLIER = 9;
const INITIAL_CONE_ROTATION = [0, -Math.PI / 2, 0];

const CYLINDER_POSITION_MULTIPLIER = 9;
const INITIAL_CYLINDER_ROTATION = [0, -Math.PI / 2, 0];

const SPHERE_POSITION_MULTIPLIER = 0.1;
const INITIAL_SPHERE_ROTATION = [0, -Math.PI / 2, -Math.PI / 2];

export const Cube = ({ movePosition, initPosition, rotation, highlightEdges, color }) => {
  const [ ref, api ] = useBox(() => ({ mass: 1, position: initPosition, rotation: INITIAL_CUBE_ROTATION }))
  const [hovered, setHovered] = useState();
  useCursor(hovered, /*'pointer', 'auto'*/);

  useEffect(() => {
    const adjustedPosition = movePosition.map(n => n * CUBE_POSITION_MULTIPLIER);
    api.velocity.set(...adjustedPosition);
  }, [movePosition]);

  useEffect(() => {
    api.rotation.set(0, rotation, 0);
  }, [rotation]);

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}>
      <boxGeometry attach="geometry" />
      <meshLambertMaterial color={color} />

      <Edges visible={highlightEdges} scale={1.1} >
        <meshBasicMaterial transparent color="#333" depthTest={true} />
      </Edges>

    </mesh>
  )
}

export const Cylinder = ({ movePosition, initPosition, rotation, highlightEdges, color }) => {
  const [ ref, api ] = useCylinder(() => ({ mass: 1, position: initPosition, rotation: INITIAL_CYLINDER_ROTATION }))
  const [hovered, setHovered] = useState();
  useCursor(hovered, /*'pointer', 'auto'*/);

  useEffect(() => {
    const adjustedPosition = movePosition.map(n => n * CYLINDER_POSITION_MULTIPLIER);
    api.velocity.set(...adjustedPosition);
  }, [movePosition]);

  useEffect(() => {
    api.rotation.set(0, rotation, 0);
  }, [rotation]);

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}>
      <cylinderGeometry args={[ 0.5,0.5,0.75,12 ]} />
      <meshLambertMaterial color={color} />

      <Edges visible={highlightEdges} scale={1.1} >
        <meshBasicMaterial transparent color="#333" depthTest={true} />
      </Edges>

    </mesh>
  )
}

export const Cone = ({ movePosition, initPosition, rotation, highlightEdges, color }) => {
  const [ ref, api ] = useCylinder(() => ({ mass: 1, position: initPosition, rotation: INITIAL_CONE_ROTATION, friction: 1 }))
  const [hovered, setHovered] = useState();
  useCursor(hovered, /*'pointer', 'auto'*/);

  useEffect(() => {
    const adjustedPosition = movePosition.map(n => n * CONE_POSITION_MULTIPLIER);
    api.velocity.set(...adjustedPosition);
  }, [movePosition]);

  useEffect(() => {
    api.rotation.set(0, rotation, 0);
  }, [rotation]);

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}>
      <cylinderGeometry args={[ 0,1,2,16 ]} />
      <meshLambertMaterial color={color} />

      <Edges visible={highlightEdges} scale={1.1} >
        <meshBasicMaterial transparent color="#333" depthTest={true} />
      </Edges>

    </mesh>
  )
}

export const Sphere = ({ movePosition, initPosition, rotation, highlightEdges, color }) => {
  const [ ref, api ] = useSphere(() => ({ mass: 1, position: initPosition, rotation: INITIAL_SPHERE_ROTATION, friction: 1 }))
  const [hovered, setHovered] = useState();
  useCursor(hovered, /*'pointer', 'auto'*/);

  useEffect(() => {
    const adjustedPosition = movePosition.map(n => n * SPHERE_POSITION_MULTIPLIER);
    api.velocity.set(...adjustedPosition);
  }, [movePosition]);

  useEffect(() => {
    api.rotation.set(0, 0, rotation); // around this axis make the edges look better
  }, [rotation]);

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}>
      <sphereGeometry />
      <meshLambertMaterial color={color} />

      <Edges visible={highlightEdges} scale={1.1} threshold={5} >
        <meshBasicMaterial transparent color="#333" depthTest={false} />
      </Edges>

    </mesh>
  )
}
