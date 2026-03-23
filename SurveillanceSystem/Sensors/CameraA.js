class CameraA {
    constructor(location) {
        this.location = location;
    }

    onDetect(callback) {
        const message = "Camera A : " + this.location;
        callback(message);
    }
}
