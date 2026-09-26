import { Workout } from "../types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <div className="card bg-white shadow-md">
      <figure>
        <img
          src={workout.image}
          alt={workout.name}
          className="h-56 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <div className="flex gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="badge badge-outline"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h2 className="card-title">
          {workout.name}
        </h2>

        <p className="text-gray-500">
          {workout.equipment}
        </p>

        <div className="flex justify-between text-sm text-gray-600">
          <span>{workout.duration} min</span>
          <span>{workout.caloriesBurned} kcal</span>
          <span>⭐ {workout.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;