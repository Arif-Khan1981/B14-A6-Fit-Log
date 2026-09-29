import { notFound } from "next/navigation";
import { Workout } from "../../types/workout";
import WorkoutActions from "../../components/WorkoutActions";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const getWorkout = async (id: string): Promise<Workout | null> => {
  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
};

export default async function WorkoutDetails({ params }: PageProps) {
  const { id } = await params;

  const workout = await getWorkout(id);

  if (!workout) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0d0f12] px-4 py-5 text-white md:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
        
        {/* Image */}
        <div>
          <img
            src={workout.image}
            alt={workout.name}
            className="h-125 w-full rounded-2xl object-cover md:h-163 lg:h-184"
          />
        </div>

        {/* Information */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl">
            {workout.name}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-6 text-gray-400 md:text-lg">
            {workout.description}
          </p>

          {/* Muscle groups */}
          <div className="mt-5 flex flex-wrap gap-3">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#ccff00] px-4 py-1 text-sm font-semibold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Specifications */}
          <div className="mt-7 overflow-hidden rounded-2xl border border-gray-800 bg-[#15181e]">
            <div className="grid grid-cols-2 border-b border-gray-800 p-4">
              <span className="text-gray-400">Equipment</span>
              <span>{workout.equipment}</span>
            </div>

            <div className="grid grid-cols-2 border-b border-gray-800 p-4">
              <span className="text-gray-400">Difficulty</span>
              <span>{workout.difficulty}</span>
            </div>

            <div className="grid grid-cols-2 border-b border-gray-800 p-4">
              <span className="text-gray-400">Sets</span>
              <span>{workout.sets}</span>
            </div>

            <div className="grid grid-cols-2 border-b border-gray-800 p-4">
              <span className="text-gray-400">Reps</span>
              <span>{workout.reps}</span>
            </div>

            <div className="grid grid-cols-2 border-b border-gray-800 p-4">
              <span className="text-gray-400">Duration</span>
              <span>{workout.duration} min</span>
            </div>

            <div className="grid grid-cols-2 border-b border-gray-800 p-4">
              <span className="text-gray-400">Calories</span>
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            <div className="grid grid-cols-2 p-4">
              <span className="text-gray-400">Rating</span>
              <span>⭐ {workout.rating}</span>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <h2 className="text-lg font-black uppercase tracking-wide">
              Instructions
            </h2>

            <div className="mt-4 space-y-4">
              {workout.instructions.map((instruction, index) => (
                <div
                  key={index}
                  className="flex gap-4 text-sm leading-6 text-gray-300"
                >
                  <span className="min-w-5 font-medium text-gray-400">
                    {index + 1}.
                  </span>

                  <p>{instruction}</p>
                </div>
              ))}
            </div>
          </div>

          <WorkoutActions workout={workout} />
        </div>
      </div>
    </main>
  );
}