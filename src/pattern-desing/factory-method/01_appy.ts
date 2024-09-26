interface Notification {
  sendNotification(message: string): void;
}

class EmailNotification implements Notification {
  sendNotification(message: string) {
    console.log(`Enviando notificación por correo: ${message}`);
  }
}

class SMSNotification implements Notification {
  sendNotification(message: string) {
    console.log(`Enviando notificación por SMS: ${message}`);
  }
}

abstract class NotificationFactory  {
    abstract createNotification(): Notification;

    public send(message: string): void{
        const notification = this.createNotification();
        notification.sendNotification(message);
    }
}

class EmailNotificationFactory extends NotificationFactory {
    public createNotification(): Notification {
        return new EmailNotification();
    }
}

class SMSNotificationFactory extends NotificationFactory {
    public createNotification(): Notification {
        return new SMSNotification();
    }
}

// Uso

const message: string = "Compra exitosa.";

const emailNotificationFactory = new EmailNotificationFactory();
const smsFactory = new SMSNotificationFactory();

emailNotificationFactory.send(message); // Enviando notificación por correo: Compra exitosa.
smsFactory.send(message); // Enviando notificación por correo: Compra exitosa.