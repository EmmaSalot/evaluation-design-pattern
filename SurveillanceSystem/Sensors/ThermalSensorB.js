class ThermalSensorB {
    constructor(position) {
        this.position = position;
    }

    triggerHeatSignature(process) {
        const data = {
            sensor: "ThermalSensor B : " + this.position,
            detection: "thermal",
            date: new Date().toISOString()
        };
        process(data);
    }
}