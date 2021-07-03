/** 服务器返回的参数 */
type ServerHeroQueryReturn = {
  /** 英雄表总记录数 */
  total_counts: number;

  /** 英雄列表 */
  results: {

    /** 英雄 ID */
    hero_id: number;

    /** 英雄名称 */
    hero_name: string;
  }[];
}

/**
 * 此服务负责以 HTTP 方式向后端请求英雄列表数据，实现了 HeroDataService
 */
@Injectable()
export class HttpHeroDataService implements HeroDataService {

  constructor(
    private httpClient: HttpClient,
  ) {}

  /**
   * 以 HTTP 协议向后端请求英雄列表数据，接受分页参数
   * @returns {Observable<IHeroQueryResult>} 英雄查询结果
   */
  getHeroes(): Observable<IHeroQueryResult> {
    const apiPath = '/api/v1/heroes';
    return this.httpClient.get<ServerHeroQueryReturn>(apiPath).pipe(
      map(serverReturn => ({
        totalCounts: serverReturn.total_counts,
        heroes: serverReturn.results.map(result => ({
          id: result.hero_id, name: result.hero_name,
        })),
      })),
    );
  }
}
