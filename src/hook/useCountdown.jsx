"use client";
import { useEffect, useState } from "react";

const useCountdown = () => {
  const [days, setDays] = useState(null);
  const [hours, setHours] = useState(null);
  const [minutes, setminutes] = useState(null);
  const [seconds, setseconds] = useState(null);

  const deadline = "March, 12, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setminutes(Math.floor((time / 1000 / 60) % 60));
    setseconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getTime(deadline);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return [days, hours, minutes, seconds];
};

export default useCountdown;
