export interface Food {
  id: number;
  name: string;
  image: string;
}

export interface ApiFetch {
  date: string;
  foods: Food[];
  islamicFoods: Food[];
}
