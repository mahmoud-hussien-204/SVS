"use client";
import {OrbitControls, useTexture} from "@react-three/drei";
import {Canvas, useFrame} from "@react-three/fiber";
import gsap from "gsap";
import React, {useEffect, useRef} from "react";
import {Mesh} from "three";

const CoinAnimation = () => {
  const coinRef = useRef<Mesh>(null);
  const logoRef = useRef(null);

  const [texture] = useTexture(["/landing/logo.png"]);

  useFrame(() => {
    // coinRef.current.rotation.y += 0.01; // Rotate around Y-axis
    if (coinRef.current) {
      coinRef.current.rotation.x += 0.01; // Rotate around X-axis (optional)
    }
  });

  useEffect(() => {
    // ..coin animation
    gsap.to(logoRef.current, {
      rotationY: 360,
      duration: 8,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <mesh ref={coinRef} scale={[2, 2, 2]} rotation={[2, 1.6, 2]}>
      <cylinderGeometry args={[1.2, 1.2, 0.2, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const ThreeDCoin = () => {
  return (
    // <Canvas camera={{ position: [10, 5, 1], fov: 30 }}>
    <Canvas camera={{position: [1, 12, 0], fov: 30}}>
      <ambientLight intensity={3} />
      <pointLight position={[10, 10, 10]} />
      <CoinAnimation />
      <OrbitControls
        enableRotate={false}
        enableZoom={false}
        enablePan={false}
        enableDamping={false}
      />
    </Canvas>
  );
};

// const CoinAnimation = () => {
//   const coinRef = useRef(null);
//   const logoRef = useRef(null);

//   const [texture] = useTexture(["/landing/logo.png"]);

//   useFrame(() => {
//     // coinRef.current.rotation.y += 0.01; // Rotate around Y-axis
//     coinRef.current.rotation.z += 0.01; // Rotate around X-axis (optional)
//   });

//   useEffect(() => {
//     // ..coin animation
//     gsap.to(logoRef.current, {
//       rotationY: 360,
//       duration: 8,
//       repeat: -1,
//       ease: "linear",
//     });
//   }, []);

//   return (
//     <mesh ref={coinRef} scale={[2, 2, 2]} rotation={[2, 1.6, 2]}>
//       <cylinderGeometry args={[1, 1, 0.2, 32]} />
//       <meshStandardMaterial map={texture} />
//     </mesh>
//   );
// };

// const ThreeDCoin = () => {
//   return (
//     // <Canvas camera={{ position: [10, 5, 1], fov: 30 }}>
//     <Canvas camera={{ position: [1, 12, 0], fov: 30 }}>
//       <ambientLight intensity={2} />
//       <pointLight position={[10, 10, 10]} />
//       <CoinAnimation />
//       <OrbitControls
//         enableRotate={false}
//         enableZoom={false}
//         enablePan={false}
//       />
//     </Canvas>
//   );
// };

export default ThreeDCoin;

// import React, { useRef, useEffect } from "react";
// import * as THREE from "three";

// const ThreeDCoin = () => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     let scene, camera, renderer, coin;

//     // Initialize Three.js scene, camera, and renderer
//     scene = new THREE.Scene();
//     camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     // Create a coin (or any object)
//     const geometry = new THREE.CircleGeometry(1, 32); // Adjust size and segments
//     const material = new THREE.MeshBasicMaterial({ color: 0xffd700 }); // Gold color
//     coin = new THREE.Mesh(geometry, material);
//     scene.add(coin);

//     // Position the camera
//     camera.position.z = 5;

//     // Render loop
//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Rotate the coin around its own axis
//       coin.rotation.y += 0.01; // Adjust rotation speed

//       // Render the scene with the camera
//       renderer.render(scene, camera);
//     };

//     animate();

//     // Cleanup function
//     return () => {
//       mountRef.current.removeChild(renderer.domElement);
//       renderer.dispose();
//     };
//   }, []);

//   return <div ref={mountRef} />;
// };

// export default ThreeDCoin;
