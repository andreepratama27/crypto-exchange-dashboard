"use client";
import { useState } from "react";
import { useStore } from "@/app/lib/store";
import { formatPrice } from "@/app/lib/format";

export default function OrderForm() {
  const { currentPrice, currentType, order, changeType } = useStore();
  const [focus, setFocus] = useState<"total" | "unit">("total");

  const [total, setTotal] = useState(0);
  const [unit, setUnit] = useState(0);

  const handleTotal = (event: React.ChangeEvent<HTMLInputElement>) => {
    let current = parseInt(event.target.value) / currentPrice;

    setTotal(parseInt(event.target.value));
    setUnit(current);
  };

  const handleUnit = (event: React.ChangeEvent<HTMLInputElement>) => {
    let current = parseInt(event.target.value) * currentPrice;

    setUnit(parseInt(event.target.value));
    setTotal(current);
  };

  const clearState = () => {
    setTotal(0);
    setUnit(0);
  };

  const handleOrder = () => {
    const payload = { total, unit };

    order({
      payload,
    });

    clearState();
  };

  return (
    <div className="flex flex-col w-[480px]">
      <div className="order-book w-full p-4 bg-gray-100 mb-4 h-[320px]">
        <div className="menu-header grid grid-cols-2">
          <button
            className={`w-full ${
              currentType == "buy"
                ? "bg-green-700 border-2 border-blue-500"
                : "bg-green-500"
            } h-10 text-white`}
            onClick={() => changeType({ type: "buy" })}
          >
            Buy
          </button>
          <button
            className={`w-full ${
              currentType == "sell"
                ? "bg-red-700 border-2 border-blue-500"
                : "bg-red-500"
            } h-10 text-white`}
            onClick={() => changeType({ type: "sell" })}
          >
            Sell
          </button>
        </div>

        <div className="order-book--form">
          <div className="column pt-4">
            <label htmlFor="">Total</label>

            {focus === "unit" ? (
              <p>{formatPrice(total)}</p>
            ) : (
              <input
                type="number"
                min={0.01}
                step={0.01}
                className="w-full mt-2 p-2"
                placeholder="In IDR"
                onChange={handleTotal}
                value={total}
                onFocus={() => setFocus("total")}
              />
            )}
          </div>

          <div className="column pt-4">
            <label htmlFor="">Unit</label>

            <input
              type="number"
              className="w-full mt-2 p-2"
              placeholder="BTC"
              onChange={handleUnit}
              value={unit}
              onFocus={() => setFocus("unit")}
              onBlur={() => setFocus("total")}
            />
          </div>

          <div className="column pt-8">
            <button
              className="w-full p-2 bg-blue-500 text-white"
              onClick={handleOrder}
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
