'use client'

import React, { useEffect, useState } from 'react';
import { dateHelper } from '../helpers/dateHelper';

type TimerProps = {
  endDate: Record<string, string>
}

const Timer: React.FC<TimerProps> = ({ endDate }) => {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const endTime = dateHelper.toMilliseconds(endDate.date);
      const timeDifference = endTime - currentTime;
      setRemainingTime(timeDifference);
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate.date]);

  return (
    <div className="pt-5">
      <p className="text-2xl font-semibold secondary-color-text">{ endDate.description }</p>
      <p className="text-4xl font-bold">{ dateHelper.timerFormatted(remainingTime) }</p>
    </div>
  );
};

export default Timer;