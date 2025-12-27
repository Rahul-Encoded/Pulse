import Navbar from "@/components/app-components/ComonComponents/Navbar";
import TokenTable from "@/components/app-components/TokenTable";

export default function Home() {
  return (
    <div className="p-4">
      <div className="w-full">
        <Navbar />
        <TokenTable />
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
