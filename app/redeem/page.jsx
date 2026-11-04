"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "../../context/AppContext";
import Navbar from "../../components/layout/Navbar";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

export default function RedeemPage() {
  const { points, redeemPoints } = useAppContext();
  const router = useRouter();

  const [selectedBreak, setSelectedBreak] = useState(null);
  const [message, setMessage] = useState("");

  const breakOptions = [
    { id: 1, title: "Short Break", duration: "5 minutes", cost: 5 },
    { id: 2, title: "Relaxing Break", duration: "10 minutes", cost: 10 },
    { id: 3, title: "Long Break", duration: "15 minutes", cost: 15 },
  ];

  const handleRedeem = () => {
    if (!selectedBreak) {
      setMessage("Please select a break first.");
      return;
    }

    const success = redeemPoints(selectedBreak.cost, selectedBreak);

    if (success) {
      setMessage(
        `${selectedBreak.title} redeemed successfully! Enjoy your break.`
      );
      setSelectedBreak(null);
    } else {
      setMessage("You don't have enough points for this break.");
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F6FA]">
      <Navbar />

      <div className="mx-auto max-w-3xl p-8">
        <h1 className="mb-2 text-3xl font-bold text-[#20243A]">
          Redeem Your Points
        </h1>

        <p className="mb-6 text-gray-500">
          Use your earned points to enjoy a planned break.
        </p>

        <Card>
          <div className="mb-8 text-center">
            <p className="text-gray-500">Available Balance</p>
            <p className="mt-2 text-4xl font-bold text-[#7966D8]">
              {points} Points
            </p>
          </div>

          <h2 className="mb-4 text-xl font-semibold text-[#252938]">
            Choose Your Break
          </h2>

          <div className="space-y-3">
            {breakOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => {
                  setSelectedBreak(option);
                  setMessage("");
                }}
                className={`w-full rounded-lg border p-4 text-left transition ${
                  selectedBreak?.id === option.id
                    ? "border-[#7966D8] bg-purple-50"
                    : "border-[#E2E5EC] bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#252938]">
                      {option.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {option.duration}
                    </p>
                  </div>

                  <p className="font-semibold text-[#7966D8]">
                    {option.cost} Points
                  </p>
                </div>
              </button>
            ))}
          </div>

          {message && (
            <p className="mt-5 text-center text-sm font-medium text-[#252938]">
              {message}
            </p>
          )}

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button onClick={handleRedeem}>
              Redeem Break
            </Button>

            <Button
              variant="secondary"
              onClick={() => router.push("/")}
            >
              Back to Dashboard
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}