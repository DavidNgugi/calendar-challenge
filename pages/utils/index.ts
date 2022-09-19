import { IEvent } from "../../types";
export const convertToCurrTime = (minFromMidnight: number): string => {
  const date = convertToDate(minFromMidnight);
  return date.toTimeString().slice(0, 5);
};

export const convertToDate = (minFromMidnight: number): Date => {
  const hours = Math.floor(minFromMidnight / 60);
  const minutes = minFromMidnight % 60;
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setHours(hours, minutes);
  return date;
};

export const createTimeSlots = (
  events
): {
  [key: string]: IEvent[];
} => {
  const timeSlots: { [key: string]: IEvent[] } = {};
  let i = 0;
  for (i; i < 24; i++) {
    const hour = i < 10 ? `0${i}` : i;
    timeSlots[`${hour}:00`] = [];
  }

  Object.values(timeSlots).forEach((timeSlot, index) => {
    events.forEach((event: IEvent) => {
      const startSlot = Math.floor(event.start / 60);
      const endSlot = Math.floor(event.end / 60);
      if (index >= startSlot && index + 1 <= endSlot) {
        timeSlot.push(event);
      }
    });
  });
  return timeSlots;
};
