import React from 'react';
import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Html, OrbitControls, useProgress } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Loader() {
  const { progress } = useProgress();
  return <Html center style={{color: "white"}}>{progress} % loaded</Html>;
}

const LoadPong = (args) => {
  const loadpong = useRef();
  useFrame(() => {
    if (loadpong.current) {
      loadpong.current.rotation.x += 0.007;
      loadpong.current.rotation.y += 0;
      // loadpong.current.position.z = (loadpong.current.position.z + 0.01) % 10;
    }
  });
  const gltf = useLoader(GLTFLoader, '../../models/ASkywalkerSaber/scene.gltf');
  return <primitive ref={loadpong} object={gltf.scene} {...args} />;
};

export default function PongSaber() {
  return (
    <Canvas style={{ height: '40vh' }}>
      <Suspense fallback={<Loader />}>
        <ambientLight color="white" position={[10, 10, 10]} intensity={[0.2]}/>
        <pointLight color="white" position={[0, 0, 0]} intensity={[1]}/> 
        <LoadPong position={[-50, -10, -150]} scale={20} rotation-x={10} />
        <OrbitControls enabled={false}/>
      </Suspense>
    </Canvas>
  );
}