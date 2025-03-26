import { useEffect, useState, useCallback } from "react";

type UseCountDownProps = {
  seconds: number;
  onComplete?: () => void;
};

const useCountdown = ({ seconds, onComplete }: UseCountDownProps) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsRunning(false);
          onComplete?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, onComplete]);

  const start = useCallback(() => {
    if (timeLeft === 0) setTimeLeft(seconds);
    setIsRunning(true);
  }, [timeLeft, seconds]);

  const pause = useCallback(() => {
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    setIsRunning(false);
    setTimeLeft(seconds);
  }, [seconds]);

  return { timeLeft, isRunning, start, pause, reset };
};

export default useCountdown;
