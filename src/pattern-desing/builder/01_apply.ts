class HttpRequest {
    private url?: string;
    private method: string;
    private headers?: { [key: string]: string };
    private body?: string;
  
    constructor(builder: HttpRequestBuilder) {
      this.url = builder.url;
      this.method = builder.method;
      this.headers = builder.headers;
      this.body = builder.body;
    }
  
    public send(): void {
      console.log(
        `Enviando solicitud ${this.method} a ${
          this.url
        } con headers: ${JSON.stringify(this.headers)} y body: ${this.body}`
      );
    }
  }
  
  class HttpRequestBuilder {
    url?: string;
    method: string = "GET";
    headers?: { [key: string]: string };
    body?: string;
  
    public setURL(url: string): HttpRequestBuilder {
      this.url = url;
      return this;
    }
  
    public setMethod(method: string): HttpRequestBuilder {
      this.method = method;
      return this;
    }
  
    public setHeaders(key: string, value: string): HttpRequestBuilder {
      this.headers![key] = value;
      return this;
    }
  
    public setBody(body: string): HttpRequestBuilder {
      this.body = body;
      return this;
    }
  
    public build() {
      return new HttpRequest(this);
    }
  }
  
  // Uso con Builder
  const request = new HttpRequestBuilder()
    .setURL("https://api.example.com/resource")
    .setBody("body")
    .setHeaders("Content-Type", "application/json")
    .build();
  request.send(); // Enviando solicitud GET a https://api.example.com/resource con headers: {"Content-Type":"application/json"} y body: body