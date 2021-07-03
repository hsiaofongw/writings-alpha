/** 英雄接口 */
export interface IHero {
    /** 英雄的 ID */
    id: number;

    /** 英雄的名字 */
    name: string;
}

/** 英雄数据查询接口 */
export interface IHeroQueryResult {
    /** 总数 */
    totalCounts: number;

    /** 当前页查询结果 */
    heroes: IHero[];
};
