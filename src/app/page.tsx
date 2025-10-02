"use client";

import FoodCard from "@/components/FoodCard";
import { ApiFetch } from "@/interfaces/food";
import { formatDateToThaiMed } from "@/lib/utils";
import { getFoodData } from "@/services/food.service";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ApiFetch | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getFoodData();
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center w-full flex min-h-screen justify-center items-center">
        Loading...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center w-full flex min-h-screen justify-center items-center">
        No data available
      </div>
    );
  }

  return (
    // Changed the main background to a light gray to match the example
    <main className="flex flex-col min-h-screen bg-gray-50 h-full font-db-heavent-rounded">
      {/* Banner Section (Unchanged) */}
      <div className="relative flex justify-center items-center w-full h-96 overflow-hidden z-0">
        <Image
          src="/ai-food-logo-bg.jpg"
          alt="Abstract background for the AI Food logo"
          fill
          style={{ objectFit: "cover" }}
          className="-z-10"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <Image
          src="/ai-food-logo.png"
          alt="AI Food Logo"
          width={220}
          height={100}
          style={{ objectFit: "contain" }}
          className="relative z-10"
        />
      </div>

      {/* --- Main Content Wrapper with `relative` positioning --- */}
      <div className="relative mx-auto w-full max-w-7xl py-8 px-4 sm:px-6 lg:px-8">
        {/* --- Decorative Images --- */}
        {/* These are hidden on small screens and appear on large (`lg`) screens */}
        <div className="hidden lg:block">
          <Image
            src="/burger.png" // Assumes burger.png is in your /public folder
            alt="Decorative burger"
            width={300}
            height={300}
            className="absolute top-[0%] -right-0  lg:top-[20%] lg:-right-56" // Positioned relative to the wrapper above
          />
          <Image
            src="/frappe-hotdog.png" // Assumes hotdog.png is in your /public folder
            alt="Decorative hotdog"
            width={300}
            height={300}
            className="absolute top-[40%] -left-56"
          />
          <Image
            src="/donut.png" // Assumes donut.png is in your /public folder
            alt="Decorative donut"
            width={300}
            height={300}
            className="absolute bottom-[20%] -right-56"
          />
        </div>

        {/* Your existing page content is now inside the relative wrapper */}
        {/* `z-10` on this container ensures it stays on top of the decorative images */}
        <div className="relative z-10 bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
          <h1 className="mb-8 text-center text-4xl font-db-heavent-rounded-bold tracking-tight text-gray-900">
            {formatDateToThaiMed(data.date)}
          </h1>

          <div className="flex flex-col gap-8">
            {/* Normal Foods */}
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-db-heavent-rounded-med text-gray-800">
                เมนูโรงอาหาร
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.foods.map((food) => (
                  <FoodCard key={food.id} food={food} />
                ))}
              </div>
            </div>

            {/* Islamic Foods */}
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-db-heavent-rounded-med text-gray-800">
                เมนูอาหารอิสลาม
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Make sure you are mapping the correct data here */}
                {data.islamicFoods.map((food) => (
                  <FoodCard key={food.id} food={food} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
