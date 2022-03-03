export interface Icontinent {
    name: string,
    code: string,
    countries: Icountry[]
}

export interface Icountry {
    name: string, 
    code: string
}

export interface IcountryDetails {
    name: string,
    code: string,
    native: string,
    capital: string | null,
    currency: string,
    languages: Ilanguage[],
    states: Istate[]
}

export interface Ilanguage {
        name: string,
        code: string,
}

export interface Istate{
    name: string
    code: string
  }