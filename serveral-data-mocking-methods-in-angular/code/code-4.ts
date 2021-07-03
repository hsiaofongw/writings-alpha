/**
 * 抽象英雄数据服务，由 Component 依赖，由直属 Module 负责提供相应的实现。
 */
@Injectable()
export abstract class HeroDataService {

    /**
     * 查询英雄数据
     */
    abstract getHeroes(): Observable<IHeroQueryResult>;

}
