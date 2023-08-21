import { create } from "zustand";
import { API_URL } from "./api";

enum OrderType {
  buy = "buy",
  sell = "sell",
}

interface Order {
  total: number;
  unit: number;
  type?: keyof typeof OrderType;
}

interface StoreInterface {
  currentPrice: number;
  currentType: keyof typeof OrderType;
  orderList: Order[];
  changeType: ({ type }: { type: keyof typeof OrderType }) => void;
  order: ({ payload }: { payload: Order }) => void;
  fetch: () => Promise<any>;
}

export const useStore = create<StoreInterface>((set) => ({
  currentPrice: 0,
  currentType: OrderType.buy,
  orderList: [],
  fetch: async () => {
    const response = await fetch("/api");
    const result = await response.json();

    set({
      currentPrice: result.data,
    });
  },
  changeType: ({ type }: { type: keyof typeof OrderType }) =>
    set(() => ({
      currentType: type,
    })),
  order: ({ payload }) =>
    set((state) => ({
      orderList: [...state.orderList, { ...payload, type: state.currentType }],
    })),
}));
