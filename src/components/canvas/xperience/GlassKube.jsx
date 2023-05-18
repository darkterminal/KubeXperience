'use client'

import { Box, RoundedBox, useGLTF, useTexture } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'
import { Line, useCursor, MeshDistortMaterial } from '@react-three/drei'
import { useRouter } from 'next/navigation'

// Labs 🧪: Le Kube
import { useLoader } from '@react-three/fiber';
import { Text } from '@react-three/drei';
// import { EffectComposer, Bloom } from '@react-three/postprocessing';


export const GlassKube = () => {
    const cuberef = useRef();
    const minikuberef = useRef();

    useFrame(() => {
        cuberef.current.rotation.x += 0.01;
        cuberef.current.rotation.y += 0.01;

        minikuberef.current.rotation.x += 0.01;
        minikuberef.current.rotation.y += 0.01;

        const time = Date.now() * 0.001;
        const radius = 3;
        const angle = time * 0.3;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        minikuberef.current.position.set(x, Math.sin(time) * 0.5, z);
        const scale = Math.sin(time * 2) * 0.1 + 0.9;
        minikuberef.current.scale.set(scale, scale, scale);

        const intensity = Math.sin(Date.now() * 0.005) * 0.5 + 0.5;
        cuberef.current.material.emissiveIntensity = intensity;
        minikuberef.current.material.emissiveIntensity = intensity;
    });

    return (
        <group>
            <Box ref={cuberef} args={[1.5, 1.5, 1.5]} position={[0, 0, 0]}>
                <meshPhongMaterial emissive="cyan" emissiveIntensity={.4} attach="material" />
            </Box>
            <Box ref={minikuberef} args={[0.5, 0.5, 0.5]} position={[1, 0, 0]}>
                <meshPhongMaterial emissive="pink" emissiveIntensity={.4} attach="material" />
            </Box>
        </group>
    );
};

export const RainbowKubeTest = () => {
    const cubeRef = useRef();

    useFrame(() => {
        cubeRef.current.rotation.x += 0.01;
        cubeRef.current.rotation.y += 0.01;
    });

    const rainbowTexture = useTexture('/rainbow.jpg');

    return (
        <Box ref={cubeRef} args={[1, 1, 1]} position={[0, 0, 0]}>
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshPhysicalMaterial
                    color="white"
                    metalness={0.5}
                    roughness={0.1}
                    transmission={0.9}
                    transparent
                    attach="material"
                    side={THREE.DoubleSide}
                >
                    <primitive attach="map" object={rainbowTexture} />
                </meshPhysicalMaterial>
            </mesh>
        </Box>
    );
};

export const GummyCubesAnimation = ({ props }) => {
    const cubeRef = useRef();
    const miniKubeRef = useRef();
    const groupRef = useRef();

    const [hovered, hover] = useState(false)
    const rainbowTexture = useTexture('/rainbow.jpg');


    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        cubeRef.current.rotation.x += 0.003;
        cubeRef.current.rotation.y += 0.003;
        miniKubeRef.current.rotation.x += 0.01;
        miniKubeRef.current.rotation.y += 0.01;
        groupRef.current.rotation.y = clock.elapsedTime * 0.2;
        const displacementScale = Math.sin(elapsedTime) * .8 + .8;
        miniKubeRef.current.material.displacementScale = displacementScale;
    });

    const texture = useTexture('/gummy.jpg');

    return (
        <group ref={groupRef}>

            {/* // ! Bug with EffectComposer.. */}
            {/* <EffectComposer>
                <Bloom intensity={1} luminanceThreshold={0} luminanceSmoothing={0.9} />
            </EffectComposer> */}

            <RoundedBox
                {...props}
                ref={cubeRef}
                args={[.6, .6, .6]}
                scale={1}
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={4} // The number of curve segments. Default is 4
                creaseAngle={0.4}
                onPointerOver={() => hover(true)}
                onPointerOut={() => hover(false)}
            >
                <meshPhysicalMaterial
                    metalness={2}
                    roughness={0.1}
                    transparent
                    transmission={0.4}
                    color={'#b5ff50'}
                    emissive="#b5ff50" emissiveIntensity={0.8}
                    attach="material"
                    side={THREE.DoubleSide}
                >
                    <primitive attach="map" object={rainbowTexture} />

                </meshPhysicalMaterial>
            </RoundedBox>

            <Box ref={miniKubeRef} args={[1.5, 1.5, 1.5]} position={[0, 0, 0]}>
                <meshPhysicalMaterial
                    color="purple"
                    metalness={2}
                    roughness={0}
                    transmission={0.7}
                    side={THREE.DoubleSide}
                    displacementMap={texture}
                    displacementScale={0.5}
                    transparent
                // color={hovered ? '#a1ff21' : '#8c00ff'}
                >

                </meshPhysicalMaterial>
            </Box>
        </group>
    );
};