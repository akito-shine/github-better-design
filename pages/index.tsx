"use client";

import { useEffect, useState, useCallback } from "react";
import { open as openEmbed } from "@play-ai/web-embed";
import { Logo } from "@/components/Logo";
import { Tagline } from "@/components/Tagline";

const webEmbedId = "B7GJTE83mEnjcf8wiiZNV";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const events = [
    {
      name: "change-text",
      when: "The user says what they want to change the text on the screen to",
      data: {
        text: { type: "string", description: "The text to change to" },
      },
    },
  ] as const;

  const onEvent = useCallback((event: any) => {}, []);

  useEffect(() => {
    try {
      openEmbed(webEmbedId, { events, onEvent });
    } catch (error) {
      console.error("Failed to initialize web embed:", error);
    } finally {
      setIsLoading(false);
    }
  }, [onEvent, events]);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center min-h-screen">
          <Logo />
          <Tagline />
          {isLoading && (
            <div className="flex justify-center">
              <div className="animate-pulse flex space-x-2">
                <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}