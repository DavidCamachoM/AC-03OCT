// Configuración básica de la escena
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Agregar OrbitControls
let controls = new THREE.OrbitControls(camera, renderer.domElement);

// Crear luz
let light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 1, 1).normalize();
scene.add(light);

// Generar cubos aleatoriamente
let cubes = [];
let cubeCount = Math.floor(Math.random() * 5) + 1; // Entre 1 y 5 cubos
let spacing = 2; // Distancia entre los cubos

for (let i = 0; i < cubeCount; i++) {
    let geometry = new THREE.BoxGeometry(1, 1, 1);
    let material = new THREE.MeshStandardMaterial({ color: Math.random() * 0xffffff });
    let cube = new THREE.Mesh(geometry, material);
    cube.position.x = i * spacing; // Alinearlos horizontalmente
    cubes.push(cube);
    scene.add(cube);
}

// Configuración de la cámara
camera.position.z = 5;

// Animar los cubos
function animate() {
    requestAnimationFrame(animate);

    // Rotación sincrónica
    cubes.forEach(cube => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    });

    // Actualizar controles
    controls.update();

    // Renderizar la escena
    renderer.render(scene, camera);
}

animate();
