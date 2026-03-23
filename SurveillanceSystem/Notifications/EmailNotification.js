class EmailNotification {
    constructor(emailAddress) {
        this.emailAddress = emailAddress;
    }

    notify(message) {
        console.log("email : " + this.emailAddress + " " + message);
    }
}