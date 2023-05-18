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
      <div className='mx-auto h-full flex flex-1 w-full flex-col flex-wrap items-center md:flex-row container justify-center'>

        {/* jumbo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='flex w-full flex-col items-start justify-center py-12 text-center md:w-2/5 md:text-left'
        >
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className='w-full uppercase'
          >
            Next + React Three Fiber + Le Kube
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='w-full my-4 text-4xl font-bold leading-tight'
          >
            KubeXperience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='mb-8 text-2xl leading-normal'
          >
            Embark on my Three.js learning journey and explore Generative Arts and Code. Join me in this digital space where I share my experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-4"
          >
            <Link href={siteConfig.links.xperiment}>
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className={buttonVariants({ size: "lg" })}
              >
                See Xperiments 🧪
              </motion.span>
            </Link>
            <Link href={siteConfig.links.github}>
              <motion.span
                target="_blank"
                rel="noreferrer"
                href={siteConfig.links.github}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                GitHub
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>


        {/* canvas */}
        <div className='w-full text-center md:w-3/5'>
          <View ref={viewRef} className='flex h-[600px] w-full flex-col items-center justify-center'>
            <Suspense fallback={null}>
              <ambientLight intensity={0.3} />
              <pointLight intensity={1} position={[5, 5, 5]} />
              <GummyCubesAnimation />
              <Common />

              {/* // This look like to add some fancy rainbox effect! 🌈 */}
              <Environment preset="lobby" />

              {/* I should play with camera position instead of zoom to get a better effect and remove the stretching effect.. */}
              <OrbitControls minDistance={11} maxDistance={11} />
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
