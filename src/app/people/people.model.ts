export interface Person {
  name: String;
  height: Number;
  gender: String;
}

export interface People {
  count: number;
  next: String;
  previous: String;
  results: Person[];
}
