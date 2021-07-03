export class HeroListComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/api/v1/heroes').subscribe(data => {
      // ...
    });
  }
}