// THREE JS BACKGROUND
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg'), alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 6;

const geometry = new THREE.TorusGeometry(1.2, 0.4, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0x000000 });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5,5,5);
scene.add(light);

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  renderer.render(scene, camera);
}
animate();

// GSAP SCROLL
gsap.registerPlugin(ScrollTrigger);
gsap.from(".section", {
  opacity: 0,
  y: 60,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".section",
    start: "top 80%"
  }
});
