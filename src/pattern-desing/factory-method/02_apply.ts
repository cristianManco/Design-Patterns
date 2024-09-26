interface User {
    accessLevel(): void;
}

class AdminUser implements User {
  public accessLevel() {
    console.log("Acceso total como Administrador.");
  }
}

class RegularUser  implements User {
  public accessLevel() {
    console.log("Acceso limitado como Usuario Regular.");
  }
}

// Factory Method
abstract class UserFactory {
    abstract createUser(): User;

    public access(): void {
        const user = this.createUser()
        user.accessLevel();
    }
}

class AdminUserFactory extends UserFactory {
    createUser(): User {
        return new AdminUser();
    }
}

class RegularUserFactory extends UserFactory {
    createUser(): User {
        return new RegularUser();
    }
}

// Uso del código con Factory Method
const user1 = new AdminUserFactory()
user1.createUser(); // Acceso total como Administrador.

const user2 = new RegularUserFactory()
user2.createUser(); // Acceso limitado como Usuario Regular.