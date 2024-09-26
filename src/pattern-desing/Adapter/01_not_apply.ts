// Sistema de almacenamiento local
class LocalFileStorage {
  saveFile(path: string, data: string): void {
    console.log(`Guardando archivo en el sistema local en ${path}`);
    // Lógica para guardar archivo localmente
  }
}

// Sistema de almacenamiento AWS S3
class S3Storage {
  uploadFile(bucket: string, key: string, data: string): void {
    console.log(`Subiendo archivo al bucket ${bucket} en la ruta ${key}`);
    // Lógica para subir archivo a S3
  }
}

// Uso sin Adaptador: Cada sistema tiene su propia interfaz
const localStorage = new LocalFileStorage();
localStorage.saveFile("/local/path/file.txt", "Contenido del archivo");

const s3Storage = new S3Storage();
s3Storage.uploadFile("mi-bucket", "path/file.txt", "Contenido del archivo");
