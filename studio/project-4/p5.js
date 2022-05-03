let theShader;
// this variable will hold our webcam video
let cam;

function preload(){
  // load the shader
  theShader = loadShader('project-4/shader.vert', 'project-4/shader.frag');
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(710, 400, WEBGL);
  noStroke();

  cam = createCapture(VIDEO);
  cam.size(710, 400);

  cam.hide();
}

function draw() {
  // shader() sets the active shader with our shader
  shader(theShader);

  // passing cam as a texture
  theShader.setUniform('tex0', cam);

  // rect gives us some geometry on the screen
  rect(0,0,width,height);
}