import React from 'react';
import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Html, OrbitControls, useProgress } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Loader() {
  const { progress } = useProgress();
  return <Html center style={{color: "white"}}>{progress} % loaded</Html>;
}

const LoadKylo = (args) => {
  const loadkylo = useRef();
  useFrame(() => {
    if (loadkylo.current) {
      loadkylo.current.rotation.x += 0.007;
      loadkylo.current.rotation.y += 0;
      // loadkylo.current.position.z = (loadkylo.current.position.z + 0.01) % 10;
    }
  });
  const gltf = useLoader(GLTFLoader, '../../models/ASkywalkerSaber/scene.gltf');
  return <primitive ref={loadkylo} object={gltf.scene} {...args} />;
};

export default function KyloSaber() {
  return (
    <Canvas style={{ height: '40vh' }}>
      <Suspense fallback={<Loader />}>
        <ambientLight color="white" position={[10, 10, 10]} intensity={[0.2]}/>
        <pointLight color="white" position={[0, 0, 0]} intensity={[1]}/> 
        <LoadKylo position={[-50, -10, -150]} scale={20} rotation-x={10} />
        <OrbitControls enabled={false}/>
      </Suspense>
    </Canvas>
  );
}