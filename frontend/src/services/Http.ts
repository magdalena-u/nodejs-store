import { apiBase } from "config/api";
import { METHOD } from "./Http.config";

export class Http {
  public GET<P>(path: string): Promise<P> {
    return this.makeRequest(METHOD.get, path);
  }

  public POST<B, P>(path: string, body: B): Promise<P> {
    return this.makeRequest(METHOD.post, path, body);
  }

  public DELETE<B, P>(path: string, body: B): Promise<P> {
    return this.makeRequest(METHOD.delete, path, body);
  }

  private makeRequest<B, P>(
    method: METHOD,
    path: string,
    data?: B
  ): Promise<P> {
    const url = apiBase + path;
    const body = method === METHOD.get ? null : JSON.stringify(data);
    const headers = { "Content-type": "application/json" };

    return fetch(url, { method, body, headers }).then(async (res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error(res.statusText);
    });
  }
}
