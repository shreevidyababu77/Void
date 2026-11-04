"use client";

import { useState } from "react";
import { dummyFriends } from "../../data/dummyData";
import Navbar from "../../components/layout/Navbar";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

export default function FriendsPage() {
  const [connectedFriends, setConnectedFriends] = useState([]);

  const handleConnect = (friendId) => {
    setConnectedFriends((previous) =>
      previous.includes(friendId)
        ? previous.filter((id) => id !== friendId)
        : [...previous, friendId]
    );
  };

  return (
    <main className="min-h-screen bg-[#F5F6FA]">
      <Navbar />

      <div className="mx-auto max-w-6xl p-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#20243A]">
              Friends
            </h1>
            <p className="mt-2 text-gray-500">
              Connect with friends and view their profiles.
            </p>
          </div>

          <Card>
            <p className="text-sm text-gray-500">
              Connected Friends
            </p>
            <p className="mt-1 text-2xl font-bold text-[#7966D8]">
              {connectedFriends.length}
            </p>
          </Card>
        </div>

        <h2 className="mb-5 text-xl font-semibold text-[#20243A]">
          Discover Friends
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dummyFriends.map((friend) => {
            const isConnected = connectedFriends.includes(friend.id);

            return (
              <Card key={friend.id}>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#7966D8] text-xl font-bold text-white">
                    {friend.avatar}
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-[#252938]">
                    {friend.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {friend.username}
                  </p>

                  <p className="mt-3 text-sm text-gray-500">
                    VOID member
                  </p>

                  <div className="mt-5 w-full">
                    <Button
                      block
                      variant={isConnected ? "secondary" : "primary"}
                      onClick={() => handleConnect(friend.id)}
                    >
                      {isConnected ? "Connected ✓" : "Connect"}
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {dummyFriends.length === 0 && (
          <Card>
            <p className="py-8 text-center text-gray-500">
              No friends available yet.
            </p>
          </Card>
        )}
      </div>
    </main>
  );
}