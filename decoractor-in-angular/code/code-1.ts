export class MockedUserService {
  getUsers(): Observable<IUserQueryResult> {
    // 获得了 users$

    return users$.pipe(delay(2000));
  }
}