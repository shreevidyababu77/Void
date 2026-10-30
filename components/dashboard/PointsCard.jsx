import Card from "../ui/Card";

export default function PointsCard({ points = 0 }) {
  return (
    <Card>
      <h3 className="text-gray-500 text-sm font-medium">
        Total Points
      </h3>

      <p className="text-3xl font-bold text-violet-600 mt-2">
        {points}
      </p>
    </Card>
  );
}