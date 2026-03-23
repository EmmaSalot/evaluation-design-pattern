class ThermalSensorB {
    constructor(position) {
        this.position = position;
    }  // position = id de la pièce

    triggerHeatSignature(process) {
        const data = {
            sensor: "ThermalSensor B : " + this.position,
            detection: "thermal",
            date: new Date().toISOString()
        };
        process(data);
    } // Déclenche une donnée complexe json, voir ci dessous
}