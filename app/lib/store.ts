import { create } from "zustand";

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
}

export const useStore = create<StoreInterface>((set) => ({
  currentPrice: 4000000,
  currentType: OrderType.buy,
  orderList: [],
  changeType: ({ type }: { type: keyof typeof OrderType }) =>
    set(() => ({
      currentType: type,
    })),
  order: ({ payload }) =>
    set((state) => ({
      orderList: [...state.orderList, { ...payload, type: state.currentType }],
    })),
}));
