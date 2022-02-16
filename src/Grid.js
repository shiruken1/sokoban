import { Vector3 } from 'three';
import { useThree } from '@react-three/fiber';
import { usePlane } from '@react-three/cannon';

const REASONABLE_DROP_HEIGHT = 5;

export const Grid = ({ handleAddClick }) => {
  const { mouse, camera, intersect } = useThree();
  const [ ref ] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0]
  }));


  const handleClick = () => {
    // remember: the view is rotated, everything else stays the same
    const vector = new Vector3(mouse.x, mouse.y, 1);
    vector.unproject(camera);

    const direction = vector.sub(camera.position).normalize();
    const distance = - camera.position.y / direction.y;
    const position = camera.position.clone().add(direction.multiplyScalar(distance));
    const projectedCoordinates = [position.x, REASONABLE_DROP_HEIGHT, position.z];

    handleAddClick(projectedCoordinates);
  };

  return (
    <mesh ref={ref} onClick={handleClick}>
      <meshStandardMaterial color={"#dddddd"} />
      <planeGeometry attach="geometry" args={[ 10, 10 ]} />
      <gridHelper
        position={[ 0, 0, 0.005 ]} // offset to stop z-fighting
        args={[ 10, 10, 'blue', 'blue' ]}
        rotation={[ -Math.PI / 2, 0, 0 ]} // rotated to match the plane
      />
    </mesh>
  );
}
