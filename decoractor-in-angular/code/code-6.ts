const progress$ = new Subject<IProgressOption>();

export class MockedUserService {
  progressSubscription?: Subscription;

  constructor(private progressBarService: ProgressBarService) {}

  ngOnInit(): void {
    this.progressSubscription = progress$.subscribe((progress) => 
      this.progressBarService.update(progress)
    );
  }

  @ProgressUpdateSimulation(2000, progress$)
  @IncreaseDelay(2000)
  getUsers(): Observable<IUserQueryResult> {
    // ...
  }

  ngOnDestroy(): void {
    this.progressSubscription?.unsubscribe();
  }
}
