// Se tiene una aplicacion que puede tener diferentes tipos de usuarios con configuraciones predeterminadas (administradores, empleados, etc.). En lugar de crear cada usuario desde cero, se debe usar el patrón Prototype para clonar un prototipo y personalizar solo los detalles.

interface UserPrototype {
  clone(): User;
}

class User implements UserPrototype {
  constructor(
    public username: string,
    public role: string,
    public permissions: string[]
  ) {}

  clone(): User {
    return Object.assign({}, this);
  }
}


// Crear un administrador
const adminPrototype = new User("adminUser", "Admin", ["READ", "WRITE", "DELETE"]);
const admin = adminPrototype.clone();
admin.username = "adminUserChanged";
admin.permissions = ["READ", "WRITE", "DELETE", "ADMIN_MANAGEMENT"];

// Crear un empleado
const employeePrototype = new User("employeeUser", "Employee", ["READ"]);
const employee = employeePrototype.clone();
employee.username = "employeeUserChanged";
employee.permissions = ["READ", "WRITE", "EMPLOYEE_MANAGEMENT"];

// Usar los usuarios clonados
console.log(admin); // Usuario: adminUserChanged, Rol: Admin, Permisos: READ, WRITE, DELETE, ADMIN_MANAGEMENT
console.log(employee); // Usuario: employeeUserChanged, Rol: Employee, Permisos: READ, WRITE, EMPLOYEE_MANAGEMENT

