import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroPage from "./components/Hero";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <Footer />

      <main className="min-h-screen bg-black text-white">
        <h1 className="p-10 text-4xl font-bold">
          This is FitLog Main Page (page.tsx).
        </h1>
      </main>
    </>
  );
}