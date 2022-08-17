export interface INamesResponse {
    [key: string]: INames
}

export interface INames {
    G: string,
    C?: number,
    B: { [key: string]: INamesItems }
}

export interface INamesItems {
    N: string,
    T: number
}
