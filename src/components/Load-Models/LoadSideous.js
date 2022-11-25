import React from "react";
import { Suspense, useRef } from 'react'; 
import { Canvas, useFrame, useLoader } from "@react-three/fiber"; 
import { Html, OrbitControls, useProgress } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Loader() {
    const { progress } = useProgress(); 
    return <Html center style={{color: "white" }}>{progress} % Loaded</Html>
}

const LoadSideous = (args) => {
    useFrame(() => {
        if (loadsideous.current) {
            loadsideous.current.position.x += 0.007; 
            loadsideous.current.position.y += 0; 
            // loadsideous.current.position.z = (loadsideous.current.position.z + 0.01) % 10; 
        }
    }); 
    const gltf = useLoader(GLTFLoader, `../../models/`); 
    return <primative ref={loadsideous} object={gltf.scene} {...args} />
}

export default function SideousSaber() {
    return (
        <Canvas style={{ height: '40vh' }}>
            <Suspense fallback={<Loader />}>
                <ambientLight color="white" position={[ 10, 10, 10 ]} intensity={[0.2]} />
                <pointLight color="white" position={[ 0, 0, 0 ]} intensity={[1]} />
                <LoadSideous position={[ 0, 0, 0 ]} scale={10} rotation-x={10} />
                <OrbitControls enabled={false} />
            </Suspense>
        </Canvas>
    )
}