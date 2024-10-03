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

// Generar cubos alterados aleatoriamente
let cubes = [];
let cubeCount = Math.floor(Math.random() * 5) + 1; // Entre 1 y 5 cubos
let spacing = 2; // Distancia entre los cubos

for (let i = 0; i < cubeCount; i++) {
    // Crear geometría alterada para cada cubo
    let geometry = new THREE.BoxGeometry(1, 1, 1);
    
    // Variar las dimensiones de los cubos para que no sean iguales
    geometry.scale(Math.random() * 1.5 + 0.5, Math.random() * 1.5 + 0.5, Math.random() * 1.5 + 0.5);
    
    // Material alámbrico para la apariencia tipo wireframe
    let material = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff, wireframe: true });
    
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
