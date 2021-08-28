@NgModule({
  imports: [
    CommonModule,
    HeroRoutingModule,
  ],
  providers: [
    { 
      provide: HeroDataService, useClass: MockHeroDataService,
    }
  ],
})
export class HeroModule {}
