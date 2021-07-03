export class LayoutComponent implements OnInit {

    constructor(
        @Inject(LOGO) private logo: string,
    ) { }

    ngOnInit(): void {
        this.headerLogoText = this.logo;
    }

}
