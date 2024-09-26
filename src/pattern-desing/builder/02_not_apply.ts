class DatabaseConnection {
    private host: string;
    private port: number;
    private user: string;
    private password: string;
    private useSSL: boolean;
  
    constructor(
      host: string,
      port: number,
      user: string,
      password: string,
      useSSL: boolean
    ) {
      this.host = host;
      this.port = port;
      this.user = user;
      this.password = password;
      this.useSSL = useSSL;
    }
  
    public connect(): void {
      console.log(
        `Conectando a la base de datos en ${this.host}:${this.port} como ${this.user} usando SSL: ${this.useSSL}`
      );
    }
  }
  
  // Uso sin el patrón Builder
  const dbConnection1 = new DatabaseConnection(
    "localhost",
    5432,
    "admin",
    "password123",
    false
  );
  dbConnection1.connect(); // Conectando a la base de datos en localhost:5432 como admin usando SSL: false
  
  // Crear otra conexión, pero con SSL habilitado
  const dbConnection2 = new DatabaseConnection(
    "db.example.com",
    3306,
    "root",
    "secret",
    true
  );
  dbConnection2.connect(); // Conectando a la base de datos en db.example.com:3306 como root usando SSL: true