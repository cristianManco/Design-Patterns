// Servicio de mensajería de Slack
class SlackService {
  sendSlackMessage(channel: string, message: string): void {
    console.log(`Enviando mensaje a Slack en el canal ${channel}: ${message}`);
  }
}

// Servicio de mensajería de Microsoft Teams
class TeamsService {
  sendTeamsMessage(groupId: string, message: string): void {
    console.log(
      `Enviando mensaje a Microsoft Teams en el grupo ${groupId}: ${message}`
    );
  }
}

// Uso sin aplicar el patrón Adaptador
const slackService = new SlackService();
slackService.sendSlackMessage("#general", "Este es un mensaje para Slack");

const teamsService = new TeamsService();
teamsService.sendTeamsMessage("team123", "Este es un mensaje para Teams");
