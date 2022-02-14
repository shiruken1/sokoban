import { usePlane } from '@react-three/cannon';

export const Grid = () => {
  const [ ref ] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0]
  }));

  return (
    <mesh ref={ref}>
      <meshStandardMaterial color={"#dddddd"} />
      <planeGeometry attach="geometry" args={[10, 10]} />
      <gridHelper
        args={[10, 10, 'blue', 'blue']}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0,0,0.005]} />
    </mesh>
  );
}
