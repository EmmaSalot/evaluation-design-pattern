const camera = new CameraA("Salle 1");
camera.onDetect((message) => console.log(message));

const tempSensor = new TemperatureSensorA('Salle 2', 30);
tempSensor.onDetect((message) => console.log(message));

const thermalB = new ThermalSensorB('03');
thermalB.triggerHeatSignature((data) => console.log(data));

const thermalAdapter = new ThermalSensorBAdapter("04");
thermalAdapter.onDetect((message) => console.log(message));