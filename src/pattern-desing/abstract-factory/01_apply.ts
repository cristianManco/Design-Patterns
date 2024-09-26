interface DBConection {
  connect(): void;
  executeQuery(query: string): void;
}

class MySQLConnection implements DBConection {
  connect() {
    console.log("Conectando a MySQL...");
  }

  executeQuery(query: string) {
    console.log(`Ejecutando query en MySQL: ${query}`);
  }
}

// Clases concretas para manejar PostgreSQL
class PostgreSQLConnection implements DBConection {
  connect() {
    console.log("Conectando a PostgreSQL...");
  }

  executeQuery(query: string) {
    console.log(`Ejecutando query en PostgreSQL: ${query}`);
  }
}

// Abstract Factory
interface DBFactory{
    createConnection(): DBConection;
}

class MySQLFactory implements DBFactory {
    createConnection(): DBConection {
        return new MySQLConnection();
    }
}

class PostgreSQLFactory implements DBFactory {
    createConnection(): DBConection {
        return new PostgreSQLConnection();
    }
}

class MONGOFactory implements DBFactory {
    createConnection(): DBConection {
        return new PostgreSQLConnection();
    }
}
class DatabaseClient {
    private connection: DBConection;

    constructor(factory: DBFactory) {
        this.connection = factory.createConnection();
    }

    runQuery(query: string) {
        this.connection.connect();
        this.connection.executeQuery(query);
    }
}

// Ejemplo de uso con Abstract Factory
const mysql = new DatabaseClient(new MySQLFactory());
const postgres = new DatabaseClient(new PostgreSQLFactory());
const mongo = new DatabaseClient(new MONGOFactory());
mysql.runQuery("SELECT * FROM users;");
postgres.runQuery("SELECT * FROM customers;");
mongo.runQuery("SELECT * FROM customers;");