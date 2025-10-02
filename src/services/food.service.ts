import { ApiFetch } from "@/interfaces/food";
import { menu } from "@/data/food-data";

export const getFoodData = async (): Promise<ApiFetch> => {
  console.log("Fetching data from Article Service...");

  // จำลองการหน่วงเวลาของ Network
  await new Promise((resolve) => setTimeout(resolve, 500));

  // ในแอปจริง ตรงนี้จะเป็น const response = await fetch(...)
  // แต่ตอนนี้เราแค่ return mock data ที่ import มา
  return Promise.resolve(menu);
};
