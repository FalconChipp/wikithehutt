import React from 'react';
import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Environment, Html, OrbitControls, useProgress } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

const LoadAnakin = (args) => {
  const loadanakin = useRef();
  useFrame(() => {
    if (loadanakin.current) {
      loadanakin.current.rotation.x += 0;
      loadanakin.current.rotation.y += 0;
      // loadanakin.current.position.z = (loadanakin.current.position.z + 0.01) % 10;
    }
  });
  const gltf = useLoader(GLTFLoader, '../../models/ASkywalkerSaber/scene.gltf');
  return <primitive ref={loadanakin} object={gltf.scene} {...args} />;
};

export default function AnakinSaber() {
  return (
    <Canvas shadows style={{ height: '40vh' }}>
      <Suspense fallback={<Loader />}>
        <pointLight color="white" position={[10, 10, 10]} intensity={[0.5]}/>
        <LoadAnakin position={[1, 1, 1]} scale={0.05} rotation-x={0} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}