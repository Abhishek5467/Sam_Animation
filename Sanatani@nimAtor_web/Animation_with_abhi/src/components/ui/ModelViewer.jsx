// Enhanced ModelViewer.jsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useProgress } from '@react-three/drei';
import PropTypes from 'prop-types';

function Loader() {
  const { progress } = useProgress();
  
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-lg font-semibold">{progress.toFixed(0)}%</div>
    </div>
  );
}

const ModelViewer = ({ children }) => {
  return (
    <div className="relative w-full h-full">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 75 }}>
        <Stage environment="city" intensity={0.6}>
          {children}
        </Stage>
        <OrbitControls 
          autoRotate 
          autoRotateSpeed={4}
          enableZoom={true}
          enablePan={true}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
      <Loader />
    </div>
  );
};

ModelViewer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModelViewer;