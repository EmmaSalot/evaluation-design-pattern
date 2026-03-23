const camera = new CameraA("Room 01");
camera.onDetect((message) => console.log(message));

const tempSensor = new TemperatureSensorA("Room 02", 30);
tempSensor.onDetect((message) => console.log(message));

const thermalB = new ThermalSensorB("03");
thermalB.triggerHeatSignature((data) => console.log(data));

const thermalAdapter = new ThermalSensorBAdapter("04");
thermalAdapter.onDetect((message) => console.log(message));

const email = new EmailNotification("test@gmail.com");
email.notify("notification email");

const log = new LogNotification();
log.notify("notification log");

const discord = new DiscordNotification("discord-server");
discord.notify("notification discord");

const room05 = new Room("Room 05");
room05.addSensor(new CameraA("Room 05"));
room05.addSensor(new ThermalSensorBAdapter("05"));
room05.addNotification(new EmailNotification("test2@gmail.com"));
room05.addNotification(new DiscordNotification("discord-server"));

const room06 = new Room("Room 06");
room06.addSensor(new TemperatureSensorA("Room 06", 30));
room06.addNotification(new LogNotification("notification log"));
room06.addNotification(new EmailNotification("test3@gmail.com"));

console.log("ROOM 05");
room05.triggerAll();
console.log("ROOM 06");
room06.triggerAll();