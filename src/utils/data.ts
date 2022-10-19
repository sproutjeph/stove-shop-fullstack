import { CartItem } from "./types";
import counterTopKit from "@/assets/images/counter-top-kit.jpg";
import handheldKit from "@/assets/images/handheld-kit.jpg";
import guestServiceKit from "@/assets/images/guest-service-kit.jpg";

export const data: CartItem[] = [
  {
    id: 1,
    title: "Samsung Galaxy S7 from data",
    price: 599.99,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png",
    amount: 1,
  },
  {
    id: 2,
    title: "google pixel ",
    price: 499.99,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png",
    amount: 1,
  },
  {
    id: 3,
    title: "Xiaomi Redmi Note 2",
    price: 699.99,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368224/phone-3_h2s6fo.png",
    amount: 1,
  },
];

interface IStarterKit {
  id: string;
  kitName: string;
  kitImg: string;
  kitMessage: string;
  active: boolean;
}
export const starterKits: IStarterKit[] = [
  {
    id: "starterKit-1",
    kitName: "CounterTopKit",
    kitImg: counterTopKit,
    kitMessage:
      "Nice toll to hlep you and your staff focus on Food and hospitality",
    active: true,
  },
  {
    id: "starterKit-2",
    kitName: "HandHeldKit",
    kitImg: handheldKit,
    kitMessage:
      "Nice toll to hlep you and your staff focus on Food and hospitality",
    active: false,
  },
  {
    id: "starterKit-3",
    kitName: "Guest Self-Service Kit",
    kitImg: guestServiceKit,
    kitMessage:
      " Nice toll to hlep you and your staff focus on Food and hospitality",
    active: false,
  },
];

interface IProduct {
  productName: string;
  productId: string;
  PartNumber: string;
  ProductType: string;
  productPrice: string;
  defaultCurrency: string;
}

export const ProductData: IProduct[] = [
  {
    productName: "T2s Single Display",
    productId: "153bd7ae",
    PartNumber: "T2sL1D",
    ProductType: "Goods",
    productPrice: "70.00",
    defaultCurrency: "Dollar",
  },
  {
    productName: "T2s Liter",
    productId: "133bd7aessss",
    PartNumber: "T2sLite",
    ProductType: "Goods",
    productPrice: "50.00",
    defaultCurrency: "Dollar",
  },
  {
    productName: "24 Hour Onsite Bronze",
    productId: "3433153bd7ae",
    PartNumber: "24sL1D",
    ProductType: "Goods",
    productPrice: "100.00",
    defaultCurrency: "Dollar",
  },
  {
    productName: "T2Lite Dual Display",
    productId: "153ssssabd7ae",
    PartNumber: "T2L2D",
    ProductType: "Goods",
    productPrice: "160.00",
    defaultCurrency: "Dollar",
  },
  {
    productName: "6 Hour Onsiite Gold",
    productId: "153ashhsabd7ae",
    PartNumber: "6T2sL1D",
    ProductType: "Goods",
    productPrice: "200.00",
    defaultCurrency: "Dollar",
  },
  {
    productName: "T2 Terminal Test",
    productId: "1sldkd53bd7ae",
    PartNumber: "T2sL1Dshhs",
    ProductType: "Goods",
    productPrice: "170.00",
    defaultCurrency: "Dollar",
  },
];

export const basicItems = [
  "Cloud Based POS",
  "Full Reporting",
  " Employee Time Tracking",
  "Scheduling",
  "Online Ordering (+25/mo)",
  " Payroll (+35/mo)",
  " Kiosk Ordering (+35/mo)",
  "Gift Cards ($20/mo)",
  "eservations+ (+35/mo)",
  " KDS (+$15/mo)",
];
