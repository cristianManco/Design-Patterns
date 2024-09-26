class Document {
    constructor(
      public title: string,
      public content: string,
      public author: string,
      public date: Date
    ) {}
  
    public printDocument(): void {
      console.log(`Título: ${this.title}, Contenido: ${this.content}, Autor: ${this.author}, Fecha: ${this.date}`);
    }
  }
  
  // Uso sin Prototype
  
  // Crear un documento desde cero
  const doc1 = new Document("Contrato de Trabajo", "Este es el contenido del contrato...", "Empresa XYZ", new Date());
  doc1.printDocument(); // Título: Contrato de Trabajo, Contenido: Este es el contenido del contrato..., Autor: Empresa XYZ
  
  // Crear otro documento diferente
  const doc2 = new Document("Informe Anual", "Contenido del informe anual...", "Departamento Financiero", new Date());
  doc2.printDocument(); // Título: Informe Anual, Contenido: Contenido del informe anual..., Autor: Departamento Financiero