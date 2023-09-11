export const dateHelper = {
  millisecondsInDay: 1000 * 60 * 60 * 24,
  millisecondsInHour: 1000 * 60 * 60,
  millisecondsInMinute: 1000 * 60,
  millisecondsInSecond: 1000,

  internationalizeDate: (date: string): string => {
    const toDate = new Date(date);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };

    const formatter = new Intl.DateTimeFormat('pt-BR', options);
    const formattedDate = formatter.format(toDate);

    return formattedDate;
  },

  toMilliseconds: (date: string): number => {
    const toDate = new Date(date);
    return toDate.getTime();
  },

  timerFormatted: (time: number): string => {
    const { millisecondsInDay, millisecondsInHour, millisecondsInMinute, millisecondsInSecond } = dateHelper;

    const days = Math.floor(time / millisecondsInDay);
    const hours = Math.floor((time % millisecondsInDay) / millisecondsInHour);
    const minutes = Math.floor((time % millisecondsInHour) / millisecondsInMinute);
    const seconds = Math.floor((time % millisecondsInMinute) / millisecondsInSecond);

    return `${days} d
            : ${hours.toString().padStart(2, '0')} h
            : ${minutes.toString().padStart(2, '0')} m
            : ${seconds.toString().padStart(2, '0')} s`;
  },
};