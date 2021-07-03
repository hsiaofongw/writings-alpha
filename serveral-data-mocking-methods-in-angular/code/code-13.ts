@Injectable()
export class MockHeroResponseInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<unknown>, 
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
    if (request.url !== '/api/v1/heroes') {
        return next.handle(request);
    }

    return of(new HttpResponse({
        status: 404, body: 'Not Found',
    }));
  }
}
