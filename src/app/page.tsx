import Image from "next/image";
import HeroPage from "./components/Hero";
import Footer from "./components/Footer";
import { Workout } from "./types/workout";
import WorkoutLibrary from "./components/WorkoutLibrary";


const getWorkouts = async (): Promise<Workout[]> => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );
  
  if (!response.ok) {
  throw new Error("Failed to fetch workouts");
}

  const data = await response.json();

  return data;
};

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <>
      
      <HeroPage />
      <WorkoutLibrary workouts={workouts} />
      

      <main className="min-h-screen bg-black text-white">
        <h1 className="p-10 text-4xl font-bold">
          
         </h1>
      </main>
    </>
  );
}