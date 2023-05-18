// useFrame(() => {
//   cubeRef.current.rotation.x += 0.01;
//   cubeRef.current.rotation.y += 0.01;
//   miniKubeRef.current.rotation.x += 0.005;
//   miniKubeRef.current.rotation.y += 0.005;
// });

// Rotation along X and Y axes:
// useFrame(() => {
//   cubeRef.current.rotation.x += 0.01;
//   cubeRef.current.rotation.y += 0.01;
//   miniKubeRef.current.rotation.x += 0.02;
//   miniKubeRef.current.rotation.y += 0.02;
// });

// Scale pulsation animation:
// useFrame(() => {
//   const time = Date.now() * 0.001;
//   const scale = Math.sin(time * 3) * 0.1 + 0.9;
//   miniKubeRef.current.scale.set(scale, scale, scale);
//   cubeRef.current.scale.set(scale, scale, scale);
//   cubeRef.current.rotation.y += 0.01;
// });

// Boucing animation:
// useFrame(() => {
//   const time = Date.now() * 0.001;
//   const bounce = Math.sin(time * 2) * 0.1;
//   cubeRef.current.position.y = bounce;
// });

// Orbiting animation:
// useFrame(() => {
//   const time = Date.now() * 0.001;
//   const radius = 2;
//   const angle = time * 0.5;
//   const x = Math.cos(angle) * radius;
//   const z = Math.sin(angle) * radius;
//   miniKubeRef.current.position.set(x, 0, z);
//   // cubeRef.current.rotation.x += 0.01;
// });

// Spin animation:
// useFrame(() => {
//   cubeRef.current.rotation.x += 0.01;
//   cubeRef.current.rotation.y += 0.01;
//   miniKubeRef.current.rotation.x += 0.01;
//   miniKubeRef.current.rotation.y += 0.01;
// });

// 6 Pulse animation:
// useFrame(() => {
//   const time = Date.now() * 0.001;
//   const pulse = Math.sin(time * 2) * 0.1 + 1;
//   cubeRef.current.scale.set(pulse, pulse, pulse);
// });

// Spin and scale animation:
// useFrame(() => {
//   cubeRef.current.rotation.x += 0.02;
//   cubeRef.current.rotation.y += 0.02;
//   miniKubeRef.current.rotation.x -= 0.01;
//   miniKubeRef.current.rotation.y -= 0.01;
//   const scale = Math.sin(Date.now() * 0.002) * 0.2 + 0.8;
//   miniKubeRef.current.scale.set(scale, scale, scale);
// });

// Orbit and puslation animation:
// useFrame(() => {
//   const time = Date.now() * 0.001;
//   const radius = 3;
//   const angle = time * 0.3;
//   const x = Math.cos(angle) * radius;
//   const z = Math.sin(angle) * radius;
//   miniKubeRef.current.position.set(x, Math.sin(time) * 0.5, z);
//   const scale = Math.sin(time * 2) * 0.1 + 0.9;
//   miniKubeRef.current.scale.set(scale, scale, scale);
// });

// Color changing:
// useFrame(() => {
//     const time = Date.now() * 0.001;
//     const hue = (time * 0.1) % 1;
//     const saturation = 1;
//     const luminance = 0.6;
//     const color = new THREE.Color().setHSL(hue, saturation, luminance);
//     cubeRef.current.material.color = color;

//     const bounce = Math.sin(time * 2) * 0.1;
//     cubeRef.current.position.y = bounce;

//     cubeRef.current.rotation.x += 0.008;
//     cubeRef.current.rotation.y += 0.008;
//     miniKubeRef.current.rotation.x += 0.005;
//     miniKubeRef.current.rotation.y += 0.005;

// });

  // Random movement animation:
  // useFrame(() => {
  //   cubeRef.current.position.x = Math.random() * 2 - 1;
  //   cubeRef.current.position.y = Math.random() * 2 - 1;
  //   cubeRef.current.position.z = Math.random() * 2 - 1;
  //   miniKubeRef.current.position.x = Math.random() * 2 - 1;
  //   miniKubeRef.current.position.y = Math.random() * 2 - 1;
  //   miniKubeRef.current.position.z = Math.random() * 2 - 1;
  // });