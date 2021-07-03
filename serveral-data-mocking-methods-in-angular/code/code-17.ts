@NgModule({
  declarations: [HeroListComponent],
  imports: [CommonModule, HeroRoutingModule],
  providers: [
    {
        provide: HTTP_BACKEND,
        useFactory: (envProbService: EnvProbService): HttpBackendConfig => {
            const currentEnv = envProbService.getEnv();
            if (currentEnv === "dev") {
                return DEV_HTTP_BACKEND;
            } else if (currentEnv === "prod") {
                return PROD_HTTP_BACKEND;
            } else {
                return DEV_HTTP_BACKEND;
            }
        },
      deps: [EnvProbService],
    },
    EnvProbService,
  ],
})
export class HeroModule {}
