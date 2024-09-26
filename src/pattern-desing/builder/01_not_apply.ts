class HttpRequest {
    private url: string;
    private method: string;
    private headers: { [key: string]: string };
    private body?: string;
  
    constructor(
      url: string,
      method: string = "GET",
      headers: { [key: string]: string } = {},
      body?: string
    ) {
      this.url = url;
      this.method = method;
      this.headers = headers;
      this.body = body;
    }
  
    public send(): void {
      console.log(
        `Enviando solicitud ${this.method} a ${this.url} con headers: ${JSON.stringify(
          this.headers
        )} y body: ${this.body}`
      );
    }
  }
  
  // Uso sin Builder
  
  // Crear una solicitud GET básica
  const request1 = new HttpRequest("https://api.example.com/resource");
  request1.send(); // Enviando solicitud GET a https://api.example.com/resource con headers: {} y body: undefined
  
  // Crear una solicitud POST con headers y body
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer token",
  };
  const body = JSON.stringify({ data: "example" });
  
  const request2 = new HttpRequest(
    "https://api.example.com/resource",
    "POST",
    headers,
    body
  );
  request2.send(); // Enviando solicitud POST a https://api.example.com/resource con headers y body