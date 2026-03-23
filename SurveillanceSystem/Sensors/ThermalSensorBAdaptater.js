class ThermalSensorBAdapter {
    constructor(position) {
        this.sensor = new ThermalSensorB(position);
    }

    onDetect(callback) {
        this.sensor.triggerHeatSignature((data) => {
            const message = "ThermalSensorBAdapter :" + data.sensor + " " + data.detection + " " + data.date;
            callback(message);
        });
    }
}