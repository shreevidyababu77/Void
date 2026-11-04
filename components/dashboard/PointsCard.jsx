
import Card from "../ui/Card";
import { useAppContext } from "../../context/AppContext";

export default function PointsCard() {
  const { points } = useAppContext();

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
