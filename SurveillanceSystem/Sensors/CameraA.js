class CameraA {
    constructor(location) {
        this.location = location;
    } // location = nom de la pièce

    onDetect(callback) {
        const message = "Camera A : " + this.location;
        callback(message);
    } // Déclenche un message d’alerte (string)
}
