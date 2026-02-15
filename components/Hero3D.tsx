'use client'

import { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function RotatingOrb() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const mouseRef = useRef({ x: 0, y: 0 })

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Slow rotation
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.3
      
      // Subtle mouse parallax
      const { x, y } = state.mouse
      meshRef.current.rotation.y += (x - mouseRef.current.x) * 0.1
      meshRef.current.rotation.x += (y - mouseRef.current.y) * 0.1
      mouseRef.current.x = x
      mouseRef.current.y = y
    }
  })

  return (
    <mesh ref={meshRef} scale={1.5}>
      <icosahedronGeometry args={[1, 1]} />
      <MeshDistortMaterial
        color="#FFC700"
        emissive="#FFC700"
        emissiveIntensity={0.2}
        metalness={0.8}
        roughness={0.2}
        distort={0.3}
        speed={1}
        transparent
        opacity={0.6}
      />
    </mesh>
  )
}

export default function Hero3D() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: !isMobile, alpha: true }}
        className="w-full h-full"
        dpr={isMobile ? 1 : 2}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#FFC700" />
          {!isMobile && <Environment preset="city" />}
          <RotatingOrb />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            enableRotate={false}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
