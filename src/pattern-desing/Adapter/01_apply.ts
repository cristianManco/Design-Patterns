// Una aplicación necesita almacenar archivos en dos tipos de sistemas de almacenamiento diferentes: un sistema de almacenamiento local y un sistema en la nube usando AWS S3. Ambos sistemas tienen interfaces diferentes, y el objetivo es aplicar el Patrón Adaptador para unificar su uso en la aplicación.

// Actualmente, el sistema local usa el método saveFile, mientras que AWS S3 utiliza el método uploadFile. Queremos que ambos sistemas implementen una misma interfaz para que el código cliente no tenga que preocuparse por qué tipo de almacenamiento está utilizando.


// Interfaz común para los sistemas de almacenamiento
interface Storage {
  saveFile(path: string, data: string): void;
}

// Implementación del sistema de almacenamiento local
class LocalStorage implements Storage {
  saveFile(path: string, data: string): void {
    console.log(`Guardando archivo en el sistema local en ${path}`);
   
  }
}

// Implementación del sistema en la nube usando AWS S3
class S3Storage implements Storage {
  uploadFile(bucket: string, key: string, data: string): void {
    console.log(`Subiendo archivo al bucket ${bucket} en la ruta ${key}`);
    
  }
}

// Adaptador: Clase que convierte la interfaz del sistema local en la interfaz del sistema en la nube
class StorageAdapter implements Storage {
  private localStorage: LocalStorage;
  private s3Storage: S3Storage;            

  constructor() {
    this.localStorage = new LocalStorage();
    this.s3Storage = new S3Storage();
  }

  saveFile(path: string, data: string): void {
    this.s3Storage.uploadFile("mi-bucket", path, data);
  }
  
  saveLocalFile(path: string, data: string): void {
    this.localStorage.saveFile(path, data);
  }
}

// Uso del adaptador en la aplicación
const storageAdapter = new StorageAdapter();
storageAdapter.saveFile("/local/path/file.txt", "Contenido del archivo");
