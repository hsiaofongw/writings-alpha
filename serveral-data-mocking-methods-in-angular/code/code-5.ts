/** 此服务负责产生 Mock 的英雄数据列表 */
@Injectable()
export class MockHeroDataService {
  constructor() {}

  /**
   * 产生 Mock 的英雄数据列表
   * @returns {Observable<IHeroQueryResult>} 英雄列表查询结果
   */
  getHeroes(): Observable<IHeroQueryResult> {
    return of({
        totalCounts: 2,
        heroes: [
            { id: 0, name: 'mockHero0', },
            { id: 1, name: 'mockHero1', },
        ],
    });
  }
}
