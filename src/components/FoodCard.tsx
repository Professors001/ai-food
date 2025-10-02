import { Food } from "@/interfaces/food";
import Image from "next/image";

interface FoodCardProps {
  food: Food;
}

export default function FoodCard({ food }: FoodCardProps) {
  return (
    <div className="flex flex-col gap-1 items-center justify-center overflow-hidden">
      <div className="relative h-48 w-full">
        <img
          src={food.image}
          alt={food.name}
          className="h-full w-full object-fill rounded-lg"
        />
      </div>
      <div className="pb-2">
        <h3 className="text-2xl text-gray-800">{food.name}</h3>
      </div>
    </div>
  );
}
