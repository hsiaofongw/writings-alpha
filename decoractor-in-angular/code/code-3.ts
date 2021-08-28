export class MockedUserService {
  @IncreaseDelay(2000)
  getUsers(): Observable<IUserQueryResult> {
    // 获得了 users$

    return users$;
  }
}