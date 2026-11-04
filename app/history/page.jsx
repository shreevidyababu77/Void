
"use client";

import { useAppContext } from "../../context/AppContext";
import Navbar from "../../components/layout/Navbar";
import Card from "../../components/ui/Card";

export default function HistoryPage() {
  const { focusSessions, redeemedBreaks } = useAppContext();

  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const activities = [
    ...focusSessions.map((session) => ({
      id: `session-${session.id}`,
      type: "Focus Session",
      description: `${session.duration} minutes of focused work`,
      points: `+${session.points || 10}`,
      date: session.completedAt,
      color: "text-green-600",
    })),

    ...redeemedBreaks.map((breakItem) => ({
      id: `break-${breakItem.id}`,
      type: "Break Redeemed",
      description: `${breakItem.title} - ${breakItem.duration}`,
      points: `-${breakItem.cost}`,
      date: breakItem.redeemedAt,
      color: "text-orange-600",
    })),
  ].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="min-h-screen bg-[#F5F6FA]">
      <Navbar />

      <div className="mx-auto max-w-5xl p-8">
        <h1 className="text-3xl font-bold text-[#20243A]">
          Activity History
        </h1>

        <p className="mb-8 mt-2 text-gray-500">
          Review your completed focus sessions and redeemed breaks.
        </p>

        <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Card>
            <p className="text-gray-500">Completed Sessions</p>
            <h2 className="mt-2 text-3xl font-bold text-[#7966D8]">
              {focusSessions.length}
            </h2>
          </Card>

          <Card>
            <p className="text-gray-500">Redeemed Breaks</p>
            <h2 className="mt-2 text-3xl font-bold text-[#7966D8]">
              {redeemedBreaks.length}
            </h2>
          </Card>
        </div>

        <Card>
          <h2 className="mb-5 text-xl font-semibold text-[#20243A]">
            Recent Activities
          </h2>

          {activities.length === 0 ? (
            <p className="py-8 text-center text-gray-500">
              No activities yet. Complete a focus session to get started!
            </p>
          ) : (
            <div className="divide-y divide-[#E2E5EC]">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex flex-col justify-between gap-3 py-5 sm:flex-row sm:items-center"
                >
                  <div>
                    <h3 className="font-semibold text-[#252938]">
                      {activity.type}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {activity.description}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      {formatDate(activity.date)}
                    </p>
                  </div>

                  <span className={`font-bold ${activity.color}`}>
                    {activity.points} Points
                  </span>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </main>
  );
}
