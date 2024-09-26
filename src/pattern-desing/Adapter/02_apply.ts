// Una Aplicación permite enviar notificaciones a diferentes plataformas de mensajería, como Slack y Microsoft Teams. Cada plataforma tiene su propia API y su propia forma de enviar mensajes. El objetivo es utilizar el Patrón Adaptador para unificar el uso de ambas plataformas de mensajería dentro de tu aplicación.

// Actualmente, el sistema de notificación de Slack utiliza el método sendSlackMessage, mientras que el sistema de Microsoft Teams usa sendTeamsMessage. Queremos que ambos sistemas implementen una interfaz unificada para que el código cliente no tenga que preocuparse por la plataforma de mensajería que se utiliza.


// Interfaz común para ambas plataformas de mensajería
interface NotificationService {
  sendNotification(message: string): void;
}

// Implementación del sistema de notificación de Slack
class SlackService implements NotificationService {
  sendNotification(message: string): void {
    console.log(`Enviando notificación a Slack: ${message}`);
  }
}

// Implementación del sistema de notificación de Microsoft Teams
class TeamsService implements NotificationService {
  sendNotification(message: string): void {
    console.log(`Enviando notificación a Microsoft Teams: ${message}`);
  }
}

// Adaptador: Clase que convierte la interfaz del sistema de notificación de Slack en la interfaz del sistema de notificación de Microsoft Teams
class NotificationAdapter implements NotificationService {
  private slackService: SlackService;
  private teamsService: TeamsService;

  constructor() {
    this.slackService = new SlackService();
    this.teamsService = new TeamsService();
  }

  sendNotification(message: string): void {
    this.teamsService.sendNotification(message);
  }

  sendSlackNotification(message: string): void {
    this.slackService.sendNotification(message);
  }
}

// Uso del patrón Adaptador
// 1
const notificationAdapter = new NotificationAdapter();
notificationAdapter.sendNotification("Este es un mensaje de prueba");
// 2
const notificationAdapter2 = new NotificationAdapter();
notificationAdapter2.sendSlackNotification("Este es un mensaje de prueba");
