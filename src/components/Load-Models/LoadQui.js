import React from "react";
import { Suspense, useRef } from 'react'; 
import { Canvas, useFrame, useLoader } from "@react-three/fiber"; 
import { Html, OrbitControls, useProgress } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Loader() {
    const { progress } = useProgress(); 
    return <Html center style={{color: "white" }}>{progress} % Loaded</Html>
}

const LoadQui = (args) => {
    useFrame(() => {
        if (loadqui.current) {
            loadqui.current.position.x += 0.007; 
            loadqui.current.position.y += 0; 
            // loadqui.current.position.z = (loadqui.current.position.z + 0.01) % 10; 
        }
    }); 
    const gltf = useLoader(GLTFLoader, `../../models/`); 
    return <primative ref={loadqui} object={gltf.scene} {...args} />
}

export default function QuiSaber() {
    return (
        <Canvas style={{ height: '40vh' }}>
            <Suspense fallback={<Loader />}>
                <ambientLight color="white" position={[ 10, 10, 10 ]} intensity={[0.2]} />
                <pointLight color="white" position={[ 0, 0, 0 ]} intensity={[1]} />
                <LoadQui position={[ 0, 0, 0 ]} scale={10} rotation-x={10} />
                <OrbitControls enabled={false} />
            </Suspense>
        </Canvas>
    )
}