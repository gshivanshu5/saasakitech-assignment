import Dashboard from "./componetns/Dashboard";

export default function Home() {
  return (
    <div className="container">
      <h1 className="text-center font-bold text-[100px] text-black">ChartJs</h1>
      <div className="flex flex-wrap">
        <Dashboard />
      </div>
    </div>
  );
}
