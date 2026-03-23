class TemperatureSensorA {
    constructor(location, threshold) {
        this.location = location;
        this.threshold = threshold;
    } // location = nom de la pièce, threshold = température de déclenchement

    onDetect(callback) {
        const message = "Temperature Sensor A : " + this.location +" "+ this.threshold;
        callback(message);
    } // Déclenche un message d’alerte (string)
}