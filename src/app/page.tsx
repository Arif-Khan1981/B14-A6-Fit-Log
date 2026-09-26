import Image from "next/image";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <h1 className="p-10 text-4xl font-bold">
          FitLog
        </h1>
      </main>
    </>
  );
}