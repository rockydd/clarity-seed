export interface Ship {
  name: String;
  model: String;
}

export interface Ships {
  count: number;
  next: String;
  previous: String;
  results: Ship[];
}
