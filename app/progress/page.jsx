"use client";

import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import Navbar from "../../components/layout/Navbar";
import Card from "../../components/ui/Card";
import ProgressBar from "../../components/progress/ProgressBar";

export default function ProgressPage() {
  const { goals, focusSessions } = useAppContext();

  const [weeklyActivity, setWeeklyActivity] = useState([]);

  const completedGoals = goals.filter(
    (goal) => goal.completed
  ).length;

  const totalFocusMinutes = focusSessions.reduce(
    (total, session) => total + session.duration,
    0
  );

  const totalPointsEarned = focusSessions.reduce(
    (total, session) => total + (session.points || 0),
    0
  );

  const goalPercentage =
    goals.length > 0
      ? Math.round((completedGoals / goals.length) * 100)
      : 0;

  // Calculate weekly activity after the component mounts
  useEffect(() => {
    const activity = Array.from({ length: 7 }, (_, index) => {
      const date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(date.getDate() - (6 - index));

      const minutes = focusSessions
        .filter((session) => {
          const sessionDate = new Date(session.completedAt);

          return (
            sessionDate.toDateString() === date.toDateString()
          );
        })
        .reduce(
          (total, session) => total + session.duration,
          0
        );

      return {
        day: date.toLocaleDateString("en-US", {
          weekday: "short",
        }),
        minutes,
      };
    });

    setWeeklyActivity(activity);
  }, [focusSessions]);

  const maxMinutes = Math.max(
    ...weeklyActivity.map((day) => day.minutes),
    1
  );

  return (
    <main className="min-h-screen bg-[#F5F6FA]">
      <Navbar />

      <div className="mx-auto max-w-6xl p-8">
        <h1 className="text-3xl font-bold text-[#20243A]">
          Your Progress
        </h1>

        <p className="mb-8 mt-2 text-gray-500">
          Track your productivity and celebrate your achievements.
        </p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <Card>
            <p className="text-gray-500">Total Focus Time</p>
            <h2 className="mt-2 text-3xl font-bold text-[#7966D8]">
              {Math.floor(totalFocusMinutes / 60)}h{" "}
              {totalFocusMinutes % 60}m
            </h2>
          </Card>

          <Card>
            <p className="text-gray-500">Completed Sessions</p>
            <h2 className="mt-2 text-3xl font-bold text-[#20243A]">
              {focusSessions.length}
            </h2>
          </Card>

          <Card>
            <p className="text-gray-500">Points Earned</p>
            <h2 className="mt-2 text-3xl font-bold text-[#7966D8]">
              {totalPointsEarned}
            </h2>
          </Card>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <h2 className="mb-5 text-xl font-semibold text-[#20243A]">
              Goal Completion
            </h2>

            <div className="mb-3 flex justify-between text-sm">
              <span className="text-gray-500">
                {completedGoals} of {goals.length} goals completed
              </span>

              <span className="font-semibold text-[#7966D8]">
                {goalPercentage}%
              </span>
            </div>

            <ProgressBar progress={goalPercentage} />

            {goals.length === 0 && (
              <p className="mt-3 text-sm text-gray-500">
                Create your first goal to start tracking progress.
              </p>
            )}
          </Card>

          <Card>
            <h2 className="mb-5 text-xl font-semibold text-[#20243A]">
              Weekly Focus Activity
            </h2>

            <div className="flex h-44 items-end justify-around gap-3">
              {weeklyActivity.map((day) => (
                <div
                  key={day.day}
                  className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                >
                  <span className="text-xs text-gray-500">
                    {day.minutes}
                  </span>

                  <div
                    className="w-full rounded-t-md bg-[#7966D8]"
                    style={{
                      height: `${
                        day.minutes > 0
                          ? Math.max(
                              (day.minutes / maxMinutes) * 100,
                              8
                            )
                          : 0
                      }%`,
                    }}
                  />

                  <span className="text-xs text-gray-500">
                    {day.day}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-center text-sm text-gray-500">
              Focus minutes per day
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
}