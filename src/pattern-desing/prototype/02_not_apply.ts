class User {
    constructor(
      public username: string,
      public role: string,
      public permissions: string[]
    ) {}
  
    public printUserInfo(): void {
      console.log(`Usuario: ${this.username}, Rol: ${this.role}, Permisos: ${this.permissions.join(", ")}`);
    }
  }
  
  // Crear un administrador
  const admin = new User("adminUser", "Admin", ["READ", "WRITE", "DELETE"]);
  admin.printUserInfo(); // Usuario: adminUser, Rol: Admin, Permisos: READ, WRITE, DELETE
  
  // Crear un empleado
  const employee = new User("employeeUser", "Employee", ["READ"]);
  employee.printUserInfo(); // Usuario: employeeUser, Rol: Employee, Permisos: READ