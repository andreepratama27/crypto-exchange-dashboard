import ChartWrapper from "./_components/chart-wrapper";
import Navbar from "./_components/navbar";
import OrderForm from "./_components/order-form";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen justify-between max-w-6xl mx-auto">
        <div className="flex gap-4">
          <ChartWrapper />

          <OrderForm />
        </div>
      </main>
    </>
  );
}
