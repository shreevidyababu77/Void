
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "../../context/AppContext";
import Navbar from "../../components/layout/Navbar";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

export default function FocusPage() {
  const { completeFocusSession } = useAppContext();
  const router = useRouter();

  const [duration, setDuration] = useState(25);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;
    

    const timer = setInterval(() => {
      setTimeLeft((previous) => previous - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0 && !isCompleted) {
      setIsRunning(false);
      setIsCompleted(true);
    }
  }, [timeLeft, isCompleted]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const handleDurationChange = (minutes) => {
    setDuration(minutes);
    setTimeLeft(minutes * 60);
    setIsRunning(false);
    setIsCompleted(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsCompleted(false);
    setTimeLeft(duration * 60);
  };

  const handleComplete = () => {
    completeFocusSession({
      id: Date.now(),
      duration,
      points: 10,
      completedAt: new Date().toISOString(),
    });

    router.push("/");
  };

  return (
    <main className="min-h-screen bg-[#F5F6FA]">
      <Navbar />

      <div className="mx-auto max-w-2xl p-8">
        <h1 className="mb-2 text-3xl font-bold text-[#20243A]">
          Focus Session
        </h1>

        <p className="mb-8 text-gray-500">
          Stay focused and earn points by completing your session.
        </p>

        <Card>
          <div className="space-y-6 text-center">
            <h2 className="text-xl font-semibold text-[#252938]">
              Choose your focus duration
            </h2>

            <div className="flex justify-center gap-3">
              {[25, 45, 60].map((minutes) => (
                <button
                  key={minutes}
                  onClick={() => handleDurationChange(minutes)}
                  disabled={isRunning}
                  className={`rounded-lg border px-5 py-2 font-medium ${
                    duration === minutes
                      ? "border-[#7966D8] bg-[#7966D8] text-white"
                      : "border-gray-300 bg-white text-[#252938]"
                  } disabled:cursor-not-allowed disabled:opacity-60`}
                >
                  {minutes} min
                </button>
              ))}
            </div>

            <div className="py-6">
              <p className="text-6xl font-bold tabular-nums text-[#7966D8]">
                {formatTime(timeLeft)}
              </p>
              <p className="mt-3 text-gray-500">
                {isCompleted
                  ? "Focus session completed!"
                  : isRunning
                  ? "Stay focused. You've got this!"
                  : "Ready when you are!"}
              </p>
            </div>

            {isCompleted ? (
              <div className="space-y-4">
                <p className="font-semibold text-green-600">
                  Congratulations! You earned 10 points.
                </p>

                <Button onClick={handleComplete}>
                  Complete Session & Earn Points
                </Button>
              </div>
            ) : (
              <div className="flex flex-wrap justify-center gap-3">
                <Button onClick={() => setIsRunning(!isRunning)}>
                  {isRunning ? "Pause" : timeLeft === duration * 60 ? "Start" : "Resume"}
                </Button>

                <Button variant="secondary" onClick={handleReset}>
                  Reset
                </Button>
              </div>
            )}
          </div>
        </Card>
      </div>
    </main>
  );
}
