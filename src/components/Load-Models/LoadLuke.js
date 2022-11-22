import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Html, OrbitControls, useProgress } from "@react-three/drei";
import { GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

// Visual percentage value for loading of the 3d model
function Loader() {
    const { progress } = useProgress; 
    return <Html center style={{color: "white"}}>{progress} % loaded</Html>
}

// Sets rotation animation for the model, 0 meaning no rotation
const LoadLuke = (args) => {
    const loadluke = useRef();
    useFrame(() => {
        if (loadluke.current) {
            loadluke.current.rotation.x += 0;
            loadluke.current.rotation.y += 0;
            // loadluke.current.position.z = (loadluke.current.position.z + 0.01) % 10; 
        }
    }); 
    const gltf = useLoader(GLTFLoader, '../../models/LukesSaber/scene.gltf'); // Area defifining file path to load the model from
    return <primitive ref={loadluke} object={gltf.scene} {...args} /> // Returning the model as an element 
}; 

export default function LukeSaber() {
    return (
        <Canvas shadows style={{height:'40vh'}}> 
            <Suspense fallback={<Loader />}>
                <ambientLight color="white" position={[0, 0, 0]} intensity={[100]}/>
                <pointLight color="white" position={[0, 0, 0]} intensity={[10]} />
                <LoadLuke position={[0, 5, 0]} scale={1} rotation-x={45} />
                <OrbitControls enabled={true}/>
            </Suspense>
        </Canvas>
    ); 
}