// Ejercicio 1: Se esta desarrollando un sistema de creación de documentos (como PDFs o contratos), y muchos de estos documentos tienen configuraciones similares. En lugar de crear cada documento desde cero, se deberia poder clonar un documento prototipo y modificarlo para nuestras necesidades específicas. sin embargo para poder acceder a estas funcionalidades se debe aplicar el patron prototype:

interface clonable {
  Clone(): this;
}


class Document implements clonable {
  title: string;
  content: string;
  author: string;
  date: Date;

  constructor(
    title: string,
    content: string,
    author: string,
    date: Date
  ) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.date = date;
  }

  public printDocument(): void {
    console.log(`Título: ${this.title}, Contenido: ${this.content}, Autor: ${this.author}, Fecha: ${this.date}`);
  }

  public Clone(): Document {
    return new Document(this.title, this.content, this.author, this.date);
  }
}

// Uso
const doc1 = new Document("Contrato de Trabajo", "Este es el contenido del contrato...", "Empresa XYZ", new Date());
const doc2 = doc1.Clone();
doc2.printDocument(); // Título: Contrato de Trabajo, Contenido: Este es el contenido del contrato..., Autor: Empresa XYZ, Fecha: Sun Mar 14 2022 12:00:00 GMT-0500 (Central Standard Time)
doc2.title = "Nuevo Contrato de Trabajo";
doc2.content = "Este es el nuevo contenido del contrato...";
doc1.printDocument(); // Título: Contrato de Trabajo, Contenido: Este es el contenido del contrato..., Autor: Empresa XYZ, Fecha: Sun Mar 14 2022 12:00:00 GMT-0500 (Central Standard Time)
doc2.printDocument(); // Título: Nuevo Contrato de Trabajo, Contenido: Este es el nuevo contenido del contrato..., Autor: Empresa XYZ, Fecha: Sun Mar 14 2022 12:00:00 GMT-0500 (Central Standard Time) 
