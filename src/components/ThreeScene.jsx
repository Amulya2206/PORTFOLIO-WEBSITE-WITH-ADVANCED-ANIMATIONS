import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

export default function ThreeScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    let renderer, scene, camera, mesh, wire, frameId
    const mount = mountRef.current
    if (!mount) return

    const width = mount.clientWidth
    const height = mount.clientHeight

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.set(0, 0, 4)

    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(5, 5, 5)
    scene.add(light)
    scene.add(new THREE.AmbientLight(0x404040, 0.8))

    const geom = new THREE.TorusKnotGeometry(0.8, 0.28, 120, 20)
    const mat = new THREE.MeshStandardMaterial({ metalness: 0.7, roughness: 0.15, color: 0x6ee7b7, emissive: 0x062c33, emissiveIntensity: 0.06 })
    mesh = new THREE.Mesh(geom, mat)
    mesh.rotation.x = 0.6
    scene.add(mesh)

    wire = new THREE.LineSegments(new THREE.WireframeGeometry(new THREE.TorusGeometry(1.05, 0.02, 16, 100)), new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.08, transparent: true }))
    scene.add(wire)

    const onResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', onResize)

    const hoverTl = gsap.timeline({ paused: true })
    hoverTl.to(mesh.rotation, { x: 0.4, y: 1.6, duration: 1.6, ease: 'power2.out' })
    mount.addEventListener('pointerenter', () => hoverTl.play())
    mount.addEventListener('pointerleave', () => hoverTl.reverse())

    const animate = () => {
      mesh.rotation.y += 0.005
      mesh.rotation.x += 0.002
      wire.rotation.y -= 0.0012
      renderer.render(scene, camera)
      frameId = window.requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('resize', onResize)
      try { mount.removeChild(renderer.domElement) } catch (e) {}
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} className="rounded-2xl overflow-hidden" aria-hidden="true" />
}
