class DiscordNotification {
    constructor(serverName) {
        this.serverName = serverName;
    }

    notify(message) {
        console.log("discord : " + this.serverName + " " + message);
    }
}