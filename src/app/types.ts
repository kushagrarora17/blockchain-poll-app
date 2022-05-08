export interface Poll {
  id: number; //12
  question: string; // "What is your favourite color?"
  results: number[]; // [0, 0, 1, 0, 4, 1]
  options: string[]; // ["red", "yellow"....]
  thumbnail: string; // https://image.png
}

export interface Voter {
  id: string;
  voted: number[];
}
