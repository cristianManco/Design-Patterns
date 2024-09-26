class Logger {
  private static instance: Logger;
  private logs: string[] = [];

  // Método para agregar un log
  public log(message: string): void {
    this.logs.push(message);
    console.log(`Log añadido: ${message}`);
  }

  // Método para mostrar los logs
  public printLogs(): void {
    console.log(this.logs);
  }

  static getInstance(){
    if(!Logger.instance){
        return new Logger()
    }
    return Logger.instance;
  }
}


// Utilizando singleton
const logger = Logger.getInstance()

logger.log("Ocurrio un error")
logger.log("error2")

logger.printLogs() // ["Ocurrio un error","error2"]


// Clase 2

const logger2 = Logger.getInstance()
logger2.log("No se conecto a la BD")

logger2.printLogs() // ["Ocurrio un error","error2", ""No se conecto a la BD""]