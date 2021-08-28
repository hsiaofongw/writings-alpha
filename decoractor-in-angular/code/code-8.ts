@NgModule({
  imports: [
    CommonModule,
    HeroRoutingModule,
  ],
  providers: [
    { 
      provide: HeroDataService, useClass: HttpHeroDataService,
    }
  ],
})
export class HeroModule {}
