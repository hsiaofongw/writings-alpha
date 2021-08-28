export class MockedUserService {
  @ProgressUpdateSimulation(2000)
  @IncreaseDelay(2000)
  getUsers(): Observable<IUserQueryResult> {
    // ...
  }
}