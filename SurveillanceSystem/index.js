const camera = new CameraA("Salle 1");
camera.onDetect((message) => console.log(message));

const tempSensor = new TemperatureSensorA('Salle 2', 30);
tempSensor.onDetect((message) => console.log(message));

const thermalB = new ThermalSensorB('03');
thermalB.triggerHeatSignature((data) => console.log(data));

const thermalAdapter = new ThermalSensorBAdapter("04");
thermalAdapter.onDetect((message) => console.log(message));

const email = new EmailNotification("test@gmail.com");
email.notify("notification email");

const log = new LogNotification();
log.notify("notification log");

const discord = new DiscordNotification("discord-server");
discord.notify("notification discord");