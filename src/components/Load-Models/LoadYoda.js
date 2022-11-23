import React from "react";
import { Suspense, useRef } from 'react'; 
import { Canvas, useFrame, useLoader } from "@react-three/fiber"; 
import { Html, OrbitControls, useProgress } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Loader() {
    const { progress } = useProgress(); 
    return <Html center style={{color: "white" }}>{progress} % Loaded</Html>
}

const LoadYoda = (args) => {
    useFrame(() => {
        if (loadyoda.current) {
            loadyoda.current.position.x += 0.007; 
            loadyoda.current.position.y += 0; 
            // loadyoda.current.position.z = (loadyoda.current.position.z + 0.01) % 10; 
        }
    }); 
    const gltf = useLoader(GLTFLoader, `../../models/`); 
    return <primative ref={loadyoda} object={gltf.scene} {...args} />
}

export default function YodaSaber() {
    return (
        <Canvas style={{ height: '40vh' }}>
            <Suspense fallback={<Loader />}>
                <ambientLight color="white" position={[ 10, 10, 10 ]} intensity={[0.2]} />
                <pointLight color="white" position={[ 0, 0, 0 ]} intensity={[1]} />
                <LoadYoda position={[ 0, 0, 0 ]} scale={10} rotation-x={10} />
                <OrbitControls enabled={false} />
            </Suspense>
        </Canvas>
    )
}