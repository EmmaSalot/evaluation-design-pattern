const camera = new CameraA("Salle 1");
camera.onDetect((message) => console.log(message));

const tempSensor = new TemperatureSensorA('Salle 2', 30);
tempSensor.onDetect((message) => console.log(message));