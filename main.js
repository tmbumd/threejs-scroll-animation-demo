import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(20);
camera.position.setX(-5);


// Loaders

// Moon
const moonTexture = new THREE.TextureLoader().load('moon.jpg');
const normalTexture = new THREE.TextureLoader().load('normal.jpg');
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
    normalMap: normalTexture,
  })
scene.add(moon);


// Helper function to generate random number within a range
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;


// Function to populate random GLTF instances
function populateRandomModels() {
  // Load GLTF model
  gltfLoader.load('/model.gltf', (gltf) => {


    // Create instances of the loaded model at random positions
    const numModels = 5; // Number of models to populate
    for (let i = 0; i < numModels; i++) {


      // Set random position within a cube centered at (0, 0, 0)
      clonedModel.position.set(
        randomInRange(-10, 10),
        randomInRange(-5, 5),
        randomInRange(-10, 10)

jeff.position.z = -5;
jeff.position.x = 2;

      // Add rotation animation
      clonedModel.rotation.set(
        randomInRange(0, Math.PI * 2),
        randomInRange(0, Math.PI * 2),
        randomInRange(0, Math.PI * 2)

loader.load( '/scene.gltf', function ( gltf ) {

      // Add model to the scene
      scene.add(clonedModel);
    }
  });


// Call the populate function


function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop
function animate() {
  requestAnimationFrame(animate);


  moon.rotation.x += 0.005;


  // controls.update();

  renderer.render(scene, camera);
}

animate();
