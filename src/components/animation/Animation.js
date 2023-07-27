import React from "react";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  // BoxGeometry,
  MeshBasicMaterial,
  CapsuleGeometry,
  // CircleGeometry,
  // ConeGeometry,
  // CylinderGeometry,
  Mesh,
  // MeshStandardMaterial,
  // GridHelper,
  // Line,
  TextureLoader,
} from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Box } from "@mui/material";
function Animation() {
  let flag = true;
  const scene = new Scene();
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;
  const renderer = new WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  const texture = new TextureLoader().load("wall.png");
  // const geometry = new BoxGeometry(2, 2, 2, 2);
  const geometry = new CapsuleGeometry(1, 1, 50, 20);
  // const geometry = new CircleGeometry(1, 32);
  //   const geometry = new ConeGeometry(2, 4, 5);
  //   const geometry = new CylinderGeometry(1, 1, 5);

  const material = new MeshBasicMaterial({
    // color: "green",
    map: texture,
    roughness: 2,
  });
  const cube = new Mesh(geometry, material);
  scene.add(cube);
  const controls = new OrbitControls(camera, renderer.domElement);
  //   const gridHelper = new GridHelper(100, 10);
  //   scene.add(gridHelper);
  //   const animate = () => {
  //     if (cube.position.x > 5) {
  //       flag = false;
  //     } else if (cube.position.x > -5) {
  //       flag = true;
  //     }
  //     if (flag) {
  //       cube.rotation.y += 0.01;
  //     } else {
  //       cube.position.x -= 0.1;
  //     }
  //     // cube.position.x += 0.01;
  //     // cube.position.y += 0.01;
  //     // cube.position.z += 0.01;
  //     renderer.render(scene, camera);
  //     requestAnimationFrame(animate);
  //   };
  //   animate();

  let q = 0;
  const animate = () => {
    // cube.rotation.z = Math.sin((q += 0.01));
    controls.update();
    // cube.rotation.x = Math.cos((q -= 0.01));

    // cube.position.x = Math.sin((q -= 0.01));
    // cube.position.x += 0.01;
    // cube.position.y += 0.01;
    // cube.position.z += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();

  return (
    <>
      <Box className="animation"></Box>
    </>
  );
}

export default Animation;
