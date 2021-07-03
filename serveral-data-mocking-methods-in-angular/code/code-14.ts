@NgModule({
    declarations: [HeroListComponent],
    imports: [CommonModule, HttpClientModule, HeroRoutingModule],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: MockHeroResponseInterceptor,
            multi: true,
        },
    ],
})
export class HeroModule {}
