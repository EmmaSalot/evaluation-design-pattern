class Room {
    constructor(name) {
        this.name = name;
        this.sensors = [];
        this.notifications = [];
    }

    addSensor(sensor) {
        this.sensors.push(sensor);
    }

    addNotification(notification) {
        this.notifications.push(notification);
    }

    notifyAll(message) {
        this.notifications.forEach(n => n.notify(message));
    }

    triggerAll() {
        this.sensors.forEach(sensor => {
            sensor.onDetect((message) => {
                this.notifyAll(message);
            });
        });
    }
}