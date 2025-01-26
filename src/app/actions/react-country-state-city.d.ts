
declare module 'react-country-state-city' {
    
    export const CountrySelect: any;
    export const StateSelect: any;
    export const CitySelect: any;
  
  
    export type Country = {
      id: number;
      name: string;
      isoCode?: string;
    };
  
    export type State = {
      id: number;
      name: string;
      countryId: number;
      isoCode?: string;
    };
  
    export type City = {
      id: number;
      name: string;
      stateId: number;
      countryId: number;
    };
    type CountryType = {
        id: number;
        name: string;
        isoCode?: string;
      };
      
      type StateType = {
        id: number;
        name: string;
        countryId: number;
        isoCode?: string;
      };
      
      type CityType = {
        id: number;
        name: string;
        stateId: number;
        countryId: number;
      };
      
  }
  