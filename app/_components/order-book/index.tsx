"use client";
import { formatPrice } from "@/app/lib/format";
import { useStore } from "@/app/lib/store";

export default function OrderBook() {
  const { orderList } = useStore();

  const renderContent = () => {
    if (!orderList.length) {
      return (
        <div className="w-full">
          <p>Orderbook still empty</p>
        </div>
      );
    }

    return (
      <table className="w-full">
        <thead>
          <tr className="text-left text-sm">
            <th>Type</th>
            <th>Place (IDR)</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody className="w-full text-sm">
          {orderList.map((item, key) => (
            <tr
              className={`text-white ${
                item.type === "buy" ? "bg-green-400" : "bg-red-400"
              }`}
              key={key}
            >
              <td className="p-2 text">{item.type}</td>
              <td>{formatPrice(item.total)}</td>
              <td>{item.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="order-book bg-gray-100 p-4">
      <p className="text-md pb-2">Order Book</p>
      <hr />

      <div className="order-book--table py-2">{renderContent()}</div>
    </div>
  );
}
