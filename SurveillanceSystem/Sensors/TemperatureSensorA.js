class TemperatureSensorA {
    constructor(location, threshold) {
        this.location = location;
        this.threshold = threshold;
    }

    onDetect(callback) {
        const message = "Temperature Sensor A : " + this.location + " " + this.threshold;
        callback(message);
    }
}