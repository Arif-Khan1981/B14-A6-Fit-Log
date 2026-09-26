import { Workout } from "../types/workout";
import WorkoutCard from "./WorkoutCard";

interface WorkoutLibraryProps {
  workouts: Workout[];
}

const WorkoutLibrary = ({ workouts }: WorkoutLibraryProps) => {
  return (
    <section id="library" className="bg-gray-100 px-4 py-16 md:px-8">
      <div className="container mx-auto">
        
        <div className="mb-10">
          <h2 className="text-4xl font-black text-black">
            THE LIBRARY
          </h2>

          <p className="mt-3 text-gray-600">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkoutLibrary;