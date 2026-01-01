"use client";
import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error";
  duration?: number;
}

export default function Toast({ message, type = "success", duration = 3000 }: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 p-4 rounded-md shadow-lg transition-all duration-300 font-sans ${
        type === "success"
          ? "bg-green-500 text-white"
          : "bg-red-500 text-white"
      } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
    >
      {message}
    </div>
  );
}