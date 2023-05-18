'use client'

import { Box, useFBX, useGLTF, useTexture } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'
import { Line, useCursor, MeshDistortMaterial } from '@react-three/drei'
import { useRouter } from 'next/navigation'

export const Blob = ({ route = '/', ...props }) => {
  const router = useRouter()
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  return (
    <mesh
      onClick={() => router.push(route)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial roughness={0} color={hovered ? 'hotpink' : '#1fb2f5'} />
    </mesh>
  )
}

export const GlowingCube = ({ ...props }) => {
  const cubeRef = useRef();
  const miniKubeRef = useRef();
  const [hovered, hover] = useState(false)

  useCursor(hovered)

  return (
    <Box {...props} ref={cubeRef} args={[2, 2, 2]} scale={1} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
      <meshPhysicalMaterial
        metalness={0.5}
        roughness={0.1}
        transmission={.7}
        transparent
        color={hovered ? '#a1ff21' : '#8c00ff'}
      >
      </meshPhysicalMaterial>
      <Box ref={miniKubeRef} args={[.8, .8, .8]} position={[0, 0, 0]}>
        <meshPhysicalMaterial
          color="white"
          metalness={0.5}
          roughness={0.1}
          transmission={0.9}

          side={THREE.DoubleSide}
        >
        </meshPhysicalMaterial>
      </Box>
    </Box>
  );
};

export const Logo = ({ route = '/blob', ...props }) => {
  const mesh = useRef(null)
  const router = useRouter()

  const [hovered, hover] = useState(false)
  const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), [])

  useCursor(hovered)
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.y = Math.sin(t) * (Math.PI / 8)
    mesh.current.rotation.x = Math.cos(t) * (Math.PI / 8)
    mesh.current.rotation.z -= delta / 4
  })

  return (
    <group ref={mesh} {...props}>
      {/* @ts-ignore */}
      <Line worldUnits points={points} color='#8c00ff' lineWidth={0.15} />
      {/* @ts-ignore */}
      <Line worldUnits points={points} color='#8c00ff' lineWidth={0.15} rotation={[0, 0, 1]} />
      {/* @ts-ignore */}
      <Line worldUnits points={points} color='#8c00ff' lineWidth={0.15} rotation={[0, 0, -1]} />
      <mesh onClick={() => router.push(route)} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshPhysicalMaterial roughness={0} color={hovered ? 'hotpink' : '#d000ff'} />
      </mesh>
    </group>
  )
}

export function Duck(props) {
  const { scene } = useGLTF('/duck.glb')

  useFrame((state, delta) => (scene.rotation.y += delta))

  return <primitive object={scene} {...props} />
}
export function Dog(props) {
  const { scene } = useGLTF('/dog.glb')

  return <primitive object={scene} {...props} />
}
