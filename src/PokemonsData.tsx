//tipo de dato personalizado

/*type ContadorProp = {
  count: number;
  callbackIncrement: () => void;
};*/

//datos personalizados que tienen propiedades

export interface PokemonsData {
  //count: number | undefined;
  //next: string | undefined;
  //previous?: null;
  results?: (Pokemon)[] | null;
}

export interface Pokemon {
  name: string;
  url: string;
  callback?: (url:string) => void;
}