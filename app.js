
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


let controls = new THREE.OrbitControls(camera, renderer.domElement);

let light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 1, 1).normalize();
scene.add(light);


let cubes = [];
let cubeCount = 5; 
let spacing = 2.5; 

for (let i = 0; i < cubeCount; i++) {

    let geometry = new THREE.BoxGeometry(1, 1, 1);
    

    geometry.scale(Math.random() * 1.5 + 0.5, Math.random() * 1.5 + 0.5, Math.random() * 1.5 + 0.5);
    

    let material = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff, wireframe: true });
    
    let cube = new THREE.Mesh(geometry, material);
    cube.position.x = i * spacing - (cubeCount * spacing) / 2; 
    cubes.push(cube);
    scene.add(cube);
}


camera.position.z = 7;

controls.target.set(cubes[2].position.x, cubes[2].position.y, cubes[2].position.z);
controls.update(); 


function animate() {
    requestAnimationFrame(animate);

    // Rotación sincrónica
    cubes.forEach(cube => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    });


    controls.update();


    renderer.render(scene, camera);
}

animate();
