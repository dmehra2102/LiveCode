"use client";
import { io } from "socket.io-client";
import { useEffect } from "react";
import HomePage from "@/components/HomePage";

export default function Home() {
  useEffect(() => {
    const socket = io("http://localhost:8080", {
      path: "/livecode.io/",
      auth: {
        token: "your-auth-token",
      },
    });
  }, []);

  return (
    <section className="max-w-2xl mx-auto">
      <HomePage />
    </section>
  );
}
