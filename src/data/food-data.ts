import { ApiFetch, Food } from "@/interfaces/food";

export const foods: Food[] = [
  {
    id: 1,
    name: "พิซซ่ามาร์เกอริต้า",
    image:
      "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "ชีสเบอร์เกอร์",
    image:
      "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "สลัดซีซาร์",
    image:
      "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    name: "สปาเกตตีคาโบนาร่า",
    image:
      "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    name: "ไก่ย่าง",
    image:
      "https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    name: "ซูชิรวม",
    image:
      "https://images.pexels.com/photos/8951336/pexels-photo-8951336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 7,
    name: "ต้มยำกุ้ง",
    image:
      "https://images.pexels.com/photos/5333033/pexels-photo-5333033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 8,
    name: "ผัดไทย",
    image:
      "https://images.pexels.com/photos/2741448/pexels-photo-2741448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 9,
    name: "เค้กช็อกโกแลต",
    image:
      "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 10,
    name: "สมูทตี้ผลไม้",
    image:
      "https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export const menu: ApiFetch = {
  date: new Date().toISOString(),
  foods: foods,
  islamicFoods: foods,
};
