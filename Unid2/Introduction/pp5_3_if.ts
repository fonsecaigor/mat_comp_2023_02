let rain_screen = document.getElementById("rain_screen") as HTMLCanvasElement;
const rain_context = rain_screen.getContext("2d") as CanvasRenderingContext2D;

function draw_raindrop(context: CanvasRenderingContext2D, center: number[], height: number) {
  const width = 1;

  context.beginPath();
  context.moveTo(center[0], center[1]);
  context.quadraticCurveTo(
    center[0] + width / 1,
    center[1] + height,
    center[0] - width / 1,
    center[1] + height
  );
  context.fillStyle = "blue";
  context.fill();
}

function update_raindrop(coords: number[], velocity: number, time: number) {
  coords[1] = Math.floor(coords[1] + velocity * time);
}

function generateRandomXCoordinate(canvasWidth: number): number {
  return Math.floor(Math.random() * canvasWidth);
}

function simulateRain() {
  const canvasWidth = rain_screen.width;
  let startCoords: number[] = [generateRandomXCoordinate(canvasWidth), 0];
  let velocity = 1; // Ajustar se necessário
  let time = 0;

  function animate() {
    draw_raindrop(rain_context, startCoords, 3 + Math.abs(5 - startCoords[1] % 10));
    update_raindrop(startCoords, velocity, 1);

    if (startCoords[1] < rain_screen.height) {
      requestAnimationFrame(animate);
    } else {
      rain_context.clearRect(0, 0, rain_screen.width, rain_screen.height);
      startCoords = [generateRandomXCoordinate(canvasWidth), 0];
      setTimeout(() => animate(), 500); // Restaura a animação depois do tempo definido
    }
  }

  function simulateAutoClick() {
    start_rain_button.click();
  }
  
  // Chama a função para simular o clique após algum tempo, por exemplo
  setTimeout(simulateAutoClick, 100);
  

  animate();
}

let start_rain_button = document.getElementById("start_rain_button") as HTMLElement;
start_rain_button.onclick = function () {
  rain_context.clearRect(0, 0, rain_screen.width, rain_screen.height);
  simulateRain();
};
