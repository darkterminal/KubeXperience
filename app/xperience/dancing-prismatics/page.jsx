'use client'


import { GummyCubesAnimation, } from '@/components/canvas/xperience/GlassKube'
import { siteConfig } from '@/config/site'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Suspense, useRef } from 'react'
import { buttonVariants } from "@/components/ui/button"
import { OrbitControls, Environment, Plane, Shadow } from '@react-three/drei';
import { motion } from "framer-motion";

const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
    ssr: false,
    loading: () => (
        <div className='flex h-96 w-full flex-col items-center justify-center'>
            <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
                <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                />
            </svg>
        </div>
    ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
    const viewRef = useRef(null);

    return (
        <>
            <div className='mx-auto h-full flex flex-1 w-full flex-col flex-wrap items-center md:flex-row  justify-center'>

                {/* canvas */}
                <div style={{ height: `calc(100vh - 65px)` }} className='w-full text-center md:w-full'>
                    <View ref={viewRef} style={{ height: `calc(100vh - 65px)` }} className='flex w-full flex-col items-center justify-center'>
                        <Suspense fallback={null}>
                            <ambientLight intensity={0.3} />
                            <pointLight intensity={1} position={[5, 5, 5]} />
                            <GummyCubesAnimation />
                            <Common />

                            {/* // This look like to add some fancy rainbox effect! 🌈 */}
                            <Environment preset="lobby" />

                            {/* I should play with camera position instead of zoom to get a better effect and remove the stretching effect.. */}
                            <OrbitControls />
                            <Shadow
                                position={[0, -2, 0]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[4, 4, 4]}
                                opacity={0.3}
                                blur={1}
                            />
                            <Plane receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
                                <shadowMaterial attach="material" transparent opacity={0.3} />
                            </Plane>
                        </Suspense>
                    </View>

                    {/* // ? Work in progress */}
                    {/* <button onClick={() => captureScreenshot(viewRef)}>Capture Screenshot</button> */}

                </div>
            </div>

        </>
    )
}
