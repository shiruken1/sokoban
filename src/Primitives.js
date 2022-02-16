import { useState } from 'react';
import { Edges, useCursor } from '@react-three/drei';
import { useBox, useCylinder, useSphere } from '@react-three/cannon';

export const Cube = ({ position, highlightEdges, color }) => {
  const [ ref ] = useBox(() => ({ mass: 1, position }))
  const [hovered, setHovered] = useState();
  useCursor(hovered, /*'pointer', 'auto'*/);

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}>
      <boxGeometry />
      <meshLambertMaterial color={color} />

      <Edges visible={highlightEdges} scale={1.1} >
        <meshBasicMaterial transparent color="#333" depthTest={true} />
      </Edges>

    </mesh>
  )
}

export const Cylinder = ({ position, highlightEdges, color }) => {
  const [ ref ] = useCylinder(() => ({ mass: 1, position, rotation: [0, 0, -Math.PI / 2] }))
  const [hovered, setHovered] = useState();
  useCursor(hovered, /*'pointer', 'auto'*/);

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}>
      <cylinderGeometry args={[ 1,1,2,16 ]} />
      <meshLambertMaterial color={color} />

      <Edges visible={highlightEdges} scale={1.1} >
        <meshBasicMaterial transparent color="#333" depthTest={true} />
      </Edges>

    </mesh>
  )
}

export const Cone = ({ position, highlightEdges, color }) => {
  const [ ref ] = useCylinder(() => ({ mass: 1, position, rotation: [0, 0, -Math.PI / 2] }))
  const [hovered, setHovered] = useState();
  useCursor(hovered, /*'pointer', 'auto'*/);

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

export const Sphere = ({ position, highlightEdges, color }) => {
  const [ ref ] = useSphere(() => ({ mass: 1, position, rotation: [0, -Math.PI / 2, -Math.PI / 2] }))
  const [hovered, setHovered] = useState();
  useCursor(hovered, /*'pointer', 'auto'*/);

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
