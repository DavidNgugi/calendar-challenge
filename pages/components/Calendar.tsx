import { IEvent } from "../../types";
import { createTimeSlots } from "../utils";
import TimeSlot from "./TimeSlot";

export default function Calendar(props: { events: IEvent[] }) {
  const timeSlots = createTimeSlots(props.events);

  return (
    <div className="calendar-grid-container">
      {Object.keys(timeSlots).map((time, index) => (
        <TimeSlot key={index} index={index} time={time} timeSlots={timeSlots} />
      ))}
    </div>
  );
}
