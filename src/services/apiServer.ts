import { ClientApiResponse } from '@backendTypes';

export const API_URL = import.meta.env.VITE_BACKEND_API;

interface ApiServerType {
  post<RequestBody, ResponseData>(endpoint: string, requestData: RequestBody): Promise<ClientApiResponse<ResponseData>>;
  postFormData<ResponseData>(endpoint: string, requestData: FormData): Promise<ClientApiResponse<ResponseData>>;
  get<ResponseData>(endpoint: string): Promise<ClientApiResponse<ResponseData>>;
  patch<RequestBody, ResponseData>(
    endpoint: string,
    requestData: RequestBody,
  ): Promise<ClientApiResponse<ResponseData>>;
}

class ApiServer implements ApiServerType {
  constructor(private readonly apiUrl: string) {}

  async post<RequestBody, ResponseData>(
    endpoint: string,
    requestData: RequestBody,
  ): Promise<ClientApiResponse<ResponseData>> {
    const init: RequestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(requestData),
    };

    return this.handleFetch<ResponseData>(this.getUrl(endpoint), init);
  }

  async postFormData<ResponseData>(endpoint: string, requestData: FormData): Promise<ClientApiResponse<ResponseData>> {
    const init: RequestInit = {
      method: 'POST',
      credentials: 'include',
      body: requestData,
    };

    return this.handleFetch<ResponseData>(this.getUrl(endpoint), init);
  }

  async get<ResponseData>(endpoint: string): Promise<ClientApiResponse<ResponseData>> {
    return this.handleFetch<ResponseData>(this.getUrl(endpoint), { method: 'GET', credentials: 'include' });
  }

  async patch<RequestBody, ResponseData>(
    endpoint: string,
    requestData: RequestBody,
  ): Promise<ClientApiResponse<ResponseData>> {
    const init: RequestInit = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(requestData),
    };

    return this.handleFetch<ResponseData>(this.getUrl(endpoint), init);
  }

  private getUrl(endpoint: string): string {
    return this.apiUrl + endpoint;
  }

  private async handleFetch<ResponseData>(
    request: RequestInfo,
    init?: RequestInit,
  ): Promise<ClientApiResponse<ResponseData>> {
    try {
      const response = await fetch(request, init);
      return await response.json();
    } catch (error) {
      console.error(error);
      throw new Error('Wewnętrzny błąd serwera');
    }
  }
}

export const apiServer = new ApiServer(API_URL);
