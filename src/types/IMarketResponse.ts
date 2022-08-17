export interface IMarketResponse {
    Error: string,
    Id: number,
    Success: boolean,
    Value: IMarketValue
}

export interface IMarketValue {
    Goods: IMarketGoods[]
}

export interface IMarketGoods {
    B: boolean,
    C: number,
    CV: null,
    G: number,
    P: number,
    Pl: null,
    T: number
}
