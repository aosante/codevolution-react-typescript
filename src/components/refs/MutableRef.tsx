import { useEffect, useRef, useState } from 'react';

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const intertvalRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (intertvalRef.current) window.clearInterval(intertvalRef.current);
  };

  useEffect(() => {
    intertvalRef.current = window.setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      stopTimer();
    };
  }, [intertvalRef]);

  return (
    <div>
      HookTimer - {timer} ={' '}
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
};
