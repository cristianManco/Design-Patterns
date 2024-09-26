// // Tenemos una clase que se utiliza para crear una conexión a una base de datos. La configuración de esta conexión puede incluir varios parámetros opcionales, como el host, puerto, usuario, contraseña, y si debe usar SSL o no. En este caso, el constructor de la clase DatabaseConnection requiere que pasemos todos los parámetros opcionales, lo que puede volverse tedioso y difícil de mantener si agregamos más configuraciones en el futuro usando patron builder.


class DatabaseConnection {
    constructor(
        private readonly host: string,
        private readonly port: number,
        private readonly user: string,
        private readonly password: string,
        private readonly ssl: boolean = false
    ) {}
  
    public connect(): void {
        console.log(`Conectando a la base de datos en ${this.host}:${this.port} con usuario ${this.user} y contraseña ${this.password} y ${this.ssl ? "con" : "sin"} SSL`);
    }

   
}

// // En lugar de crear una instancia de la clase DatabaseConnection con los parámetros opcionales, podemos utilizar el patrón Builder para crear una instancia de la clase con solo los parámetros obligatorios.

// // Crear una instancia de la clase DatabaseConnection con solo los parámetros obligatorios
const connection = new DatabaseConnection("localhost", 8080, "admin", "password");
connection.connect(); 

// // Crear una instancia de la clase DatabaseConnection con solo los parámetros obligatorios y con SSL
const connectionSsl = new DatabaseConnection("localhost", 8080, "admin", "password", true);
connectionSsl.connect();

// // Crear una instancia de la clase DatabaseConnection con solo los parámetros obligatorios y sin SSL
const connectionNoSsl = new DatabaseConnection("localhost", 8080, "admin", "password", false);
connectionNoSsl.connect(); 