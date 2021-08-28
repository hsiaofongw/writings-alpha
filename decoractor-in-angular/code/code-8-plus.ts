export class HeroListComponent implements OnInit {

    constructor(private heroDataSerivce: HeroDataService) {}

    ngOnInit(): void {
        this.heroDataSerivce.getHeroes().subscribe(heroQueryResult => {
            this.load(heroQueryResult);
        });
    }

    load(queryResult: IHeroQueryResult): void {
        // ...
    }
}
