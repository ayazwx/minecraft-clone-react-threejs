"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'

export default function Home() {
  return (
    <>
    <Canvas>
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={0.5} />
    </Canvas>
    </>
  )
}
