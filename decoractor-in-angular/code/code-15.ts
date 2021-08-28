export type HttpBackendConfig = {
    server: string;
    path: string;
};

export const HTTP_BACKEND = new InjectionToken<HttpBackendConfig>('Backend');

export const PROD_HTTP_BACKEND: HttpBackendConfig = {
    server: 'https://prod.example.com',
    path: '/api/v1/heroes',
};

export const DEV_HTTP_BACKEND: HttpBackendConfig = {
    server: 'http://localhost:8000',
    path: '/api/v1/heroes',
};

