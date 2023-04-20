
//Profe tuve problemas con las tranformaciones reales ya que me salian mucho errores y por ello no logré la forma final, asi que tuve que borrarlas para que al menos saliera algo :(

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 20.5;
camera.position.x = -1.2;
camera.position.y = 12;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);


//esfera

const geometry = new THREE.SphereGeometry( 5, 32, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );  //Creación de la esfera
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );


//valores parametrizados
var R = 1;
 
var Sx = 0.5;

var Sy = 0.5;        

var Sz = 3;

var Rx = 0;

var Ry = Math.PI/2;

var Rz = Math.PI/4;

var Tx =  1.5;

var Ty =   1.5;

var Tz =   2;



const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);


var arrowSize = 26; // Tamaño flecha eje
    var origin = new THREE.Vector3(0, 0, 0); // Definir origen
    var x = new THREE.Vector3(1, 0, 0); // vector unitario en X
    var y = new THREE.Vector3(0, 1, 0); // Vector unitario en Y
    var z = new THREE.Vector3(0, 0, 1); // Vector unitario en Z
    var colorR = new THREE.Color(0xAA0000); // Color Rojo - Red
    var colorG = new THREE.Color(0x00AA00); // Color Verde - Green
     var colorB = new THREE.Color(0x0000AA); // Color Azul -Blue

    // Ejes X, Y, Z
    var arrowX = new THREE.ArrowHelper(x, origin, arrowSize, colorR); // Creación flecha en eje X
    var arrowY = new THREE.ArrowHelper(y, origin, arrowSize, colorG); // Creación flecha en eje Y
    var arrowZ = new THREE.ArrowHelper(z, origin, arrowSize, colorB); // Creación flecha en eje Z

     scene.add(arrowX); // Agregar flecha eje X
      scene.add(arrowY); // Agregar flecha eje Y
     scene.add(arrowZ); // Agregar flecha eje Z

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();